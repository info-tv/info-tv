express = require 'express'
SubApp = require '../subapp'

class Screen extends SubApp
  constructor: (superApp) ->
    super 'screen', superApp

    # serve public folder as is
    @app.use express.static __dirname + '/public'

    # @todo configure sequelize, epilogue, manifest etc. generators

module.exports = Screen
