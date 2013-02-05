Collection = require 'models/base/collection'
Game = require 'models/brackets/game'

module.exports = class Games extends Collection
	model: Game

	comparator: (game)-> game.get 'number'

	parse: (models)=>
		updated = []
		for i in [0...models.length]
			if @at(i)?
				updated[i] = @at(i)
				updated[i].set models[i]
			else
				updated[i] = new Game(models[i])
		updated