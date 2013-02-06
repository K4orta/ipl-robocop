View = require 'views/base/view'
template = require 'views/templates/match-menu'
Matches = require 'collections/brackets/matches'
mediator = require 'mediator'
Streams = require 'collections/brackets/streams'
GameSubView = require 'views/game-sub-view'

module.exports = class MatchMenuView extends View
	autoRender: true
	template: template
	container: '#menu-container'
	id: "match-menu"
	className: "admin-menu"
	events:
		'click #start-game-btn' : ()-> @startGame()
		'change .team-list' : (ev)-> @saveTeam(ev)
		'change .best-of-input' : (ev)-> @saveBestOf(ev)
		'change .stream-list' : (ev)-> @saveStream(ev)
		'change #match-title' : (ev)-> @saveTitle(ev)
		'change #start-time' : (ev)-> @saveTime(ev)
		'click .team-btn' : (ev)-> @endGame(ev)

	initialize:(options)->
		super
		mediator.subscribe 'change:selected', (sel)=> @selectionChanged(sel)
		@streams = new Streams()
		@streams.fetch
			url: "http://esports.ign.com/content/v2/streams.json?callback=?"
			cached:true
		$.ajax
			url: "http://esports.ign.com/content/v2/groups.json?callback=?"
			cached:true
			success:(data)=>
				console.log data
		@groups = []

		@bracket = options.bracket

	render:->
		super
		unless @model?
			return @
		options = {}
		options.title = @model.event().get 'title'
		options.bestOf = @model.matchup().get 'best_of'
		options.startsAt = @model.event().get 'starts_at'
		@$el.html @template( options )
		teamList = for team in @bracket.get('teams').models when team?
			team.get 'name'
		teamList.unshift('')

		for teamName in teamList
			$('<option></option>').appendTo(@.$('.team-list')).text teamName

		teams = @model?.teams()
		if teams?
			for i, team of teams
				@.$("#team#{parseInt(i)+1} option").each (ind)->
					if $(@).text() is team.get 'name'
						$(@).prop("selected", "selected")

		@fillSelect @streams.models, '.stream-list', @model?.get('event').get('stream')?.name
		@.$('#start-time').datetimepicker
			timeFormat: "hh:mm ttz"
			showTimezone: false
			timezone: "-0800"
			hourGrid: 4
			minuteGrid: 10

		if @model.games().first().get('status') isnt 'ready'
			@renderGames()
			@.$('#start-game-btn').hide()

		@

	renderGames: ()=>
		@gameViews = @model.games().map (game)=>
			new GameSubView({model:game}).setMatchup(@model.matchup()).render()
		false

	startGame: ()=>
		@model.games().first().set 'status', 'in progress'
		@render()
		false

	endGame: (ev)=>
		result = @model.matchup().pointFor @.$(ev.currentTarget).text()
		@model.games().next(result.winner)
		if result.matchDecided
			@model.games().each (game)=> game.set 'status', 'finished'
			@model.advance(result.winner)
		@render()
		false

	fillSelect: (list, elName, defaultVal=null)=>
		$('<option></option>').appendTo(@.$(elName))
		for element in list
			op = $('<option></option>').appendTo(@.$(elName)).text element.get('name')
			if op.text() is defaultVal
				op.prop("selected", "selected")

	saveTeam:(ev)->
		teams = _.clone(@model.teams())
		teams[parseInt($(ev.currentTarget).attr('slot'))] = @bracket.get('teams').where({name: $(ev.currentTarget).val()})[0]
		@model.teams(teams)
		teamNames = _.map teams, (team)=> team.get 'name'
		@model.event().set 'title', teamNames.join(" vs. ")
		@render()

	saveTitle: (ev)->
		@model.get('event').set 'title', $(ev.currentTarget).val()

	saveBestOf:(ev)->
		@model.matchup().set 'best_of', parseInt @.$(ev.currentTarget).val()

	selectionChanged: (selected) ->
		@toolbar.openMenu 'match-menu'
		@model.selected = selected
		@model.set _.clone(selected[0].attributes), {silent:true}
		@model.newAttrs()
		@render()

	saveStream: (ev)=>
		sName = $(ev.currentTarget).val()
		sId = @streams.find (el)->el.get('name') is sName
		@model.get('event').set 'stream',
			id: sId.id
			name: sName

	saveTime: (ev)=>
		@model.event().set 'starts_at', $(ev.currentTarget).val()
		@model.event().set 'ends_at', moment($(ev.currentTarget).val(), "MM/DD/YYYY hh:mm a").add('hours', 1).format("MM-DD-YYYYTHHss:mmZ")
