View = require 'views/base/view'
Collection = require 'models/base/collection'
BracketView = require 'views/brackets/bracket-view'
BracketUrls = require 'utility/brackets/bracket-urls'
mediator = require 'mediator'
Mcclane = require 'utility/mcclane'

module.exports = class BracketEditorView extends BracketView
	initialize:(options)->
		super(options)
		@model.url = ()-> BracketUrls.apiBase+"/brackets/v6/api/"
		@dragging = false
		@delegate 'click', '.match', (ev)-> @clickMatch(ev)
		@delegate 'click', '.hotzone', ()->
			unless @dragging
				@deselect()
		@delegate 'click', '.bracket-title', (ev)->@editTitle(ev)
		@delegate 'blur', '.bracket-title-input', (ev)->@saveTitle(ev)
		@selected = []

	render: ->
		super
		hotZone = $('<div class="hotzone">').insertBefore(@$el.find('.match-layer')).width(@$el.width()).height(@$el.height())
		hotZone.css
			'position': 'absolute'
		hotZone.draggable
			start: (e)=>
				@startSelect(e)
				false

		@.$('.match-layer').css 'z-index', 10
		$('<input type="text" class="bracket-title-input">').appendTo(@.$('.label-layer span.bracket-title'))
		@

	saveBracket: ()=>
		@model.save null,
			xhrFields:
				withCredentials: true

	clickMatch: (ev)=>
		unless ev.shiftKey is true
			@deselect()
		unless $(ev.currentTarget).hasClass('activeSelect')
			@selected.push $(ev.currentTarget).data('match')
			$(ev.currentTarget).addClass 'activeSelect'
			mediator.publish 'change:selected', @selected

	deselect: ()=>
		$('.match.activeSelect').removeClass 'activeSelect'
		@selected = []

	editTitle: (ev)=>
		$(ev.currentTarget).addClass 'editing'
		$(ev.currentTarget).find('input').focus().val @model.get('title')

	saveTitle:(ev)=>
		$(ev.currentTarget).parent('span').removeClass 'editing'
		newTitle = String($(ev.currentTarget).val().trim())
		@model.set 'title', newTitle
		@model.set 'slug', newTitle.toLowerCase().replace(/\ /g, '-').replace(/[^\w|-]/g, '')
		@.$('.bracket-title h1').text @model.get 'title'
		Mcclane.save()

	startSelect: (e)=>
		@dragOrigin =
			x: e.pageX
			y: e.pageY
		@dragBox = $('<div class="drag-selection-box">').appendTo(@$el).css
			position: 'absolute'
			'background-color': 'rgba(255,255,255,.8)'
			border: '1px solid white'
			top: @dragOrigin.y
			left: @dragOrigin.x
		@dragging = true
		$(window).mousemove @runDrag
		$(window).mouseup @endSelect

	runDrag: (e)=>
		@dragBox.css
			width: Math.abs(e.pageX - @dragOrigin.x)
			height: Math.abs(e.pageY - @dragOrigin.y)
		@dragBox.css 'left', if e.pageX > @dragOrigin.x then @dragOrigin.x else @dragOrigin.x - @dragBox.width()
		@dragBox.css 'top', if e.pageY > @dragOrigin.y then @dragOrigin.y else @dragOrigin.y - @dragBox.height()

	endSelect: (e)=>
		sPos = @dragBox.position()
		@selectMatchesIn
			top: sPos.top
			right: sPos.left + @dragBox.width()
			bottom: sPos.top + @dragBox.height()
			left: sPos.left
		$(window).off 'mousemove', @runDrag
		$(window).off 'mouseup', @endSelect

		@dragBox.fadeOut('fast', ()=>
			@dragBox.remove()
			@dragging = false
		)

	selectMatchesIn: (selection)=>
		@deselect()
		for match in @matchViews
			mPos = match.$el.position()
			mDim =
				top: mPos.top
				bottom: mPos.top + match.$el.height()
				right: mPos.left + match.$el.width()
				left: mPos.left
			unless match.$el.hasClass('activeSelect')
				if (mDim.right > selection.left and mDim.left < selection.right)
					if (mDim.bottom > selection.top and mDim.top < selection.bottom)
						@selected.push match.model
						match.$el.addClass 'activeSelect'
		if @selected > 0
			mediator.publish 'change:selected', @selected

