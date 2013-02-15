Model = require 'models/base/model'

module.exports = class MatchTeam extends Model
	defaults: ()->
		name: "TBD"
		points: 0
		seed: 0
		# id: "5088cad2f767afae2e000005"

	initialize: (options)->
		super(options)
		@set 'points', 0