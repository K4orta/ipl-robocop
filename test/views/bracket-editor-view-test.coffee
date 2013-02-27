BrackerEditorView = require 'views/bracket-editor-view'
Bracket = require 'models/brackets/bracket'

describe 'BrackerEditorView', ->
	before ->
		@bracket = new Bracket()
		@view = new BrackerEditorView()

