express = require 'express'

class SubApp

  # construct new sub-application with router
  constructor: (@mountingName = '', superApp) ->
    # init sub-app
    @app = express.Router()

    # mount it to super-app if present
    @useIn superApp if superApp?

  # mount app to superApp
  useIn: (superApp) ->
    superApp?.use "/#{@mountingName}", @app

module.exports = SubApp
