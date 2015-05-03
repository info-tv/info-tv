express = require 'express'
Sequelize = require 'sequelize'
epilogue = require 'epilogue'

pluginmanager = require './pluginmanager'
SubApp = require './subapp'
API = require './api'
Screen = require './screen'

class Server

  # export SubApp class
  @SubApp: SubApp

  constructor: () ->
    # init express and API's router
    @app = express()
    @api = express.Router()
    @app.use '/api', @api

    # init sequelize
    # TODO: configure sequelize
    @sequelize = new Sequelize 'db', null, null,
      dialect: 'sqlite'

    # init epilogue
    epilogue.initialize
      app: @api
      sequelize: @sequelize

    # load sub-apps
    @subApps =
      api: new API @api, @sequelize, epilogue
      screen: new Screen @app, @sequelize, epilogue

    # load plugins and then start the server
    server = this
    pluginmanager.loadAll () ->
      server.start()

  start: () ->
    server = @app.listen 3000, () ->
      host = server.address().address
      port = server.address().port

      console.log "Listening at http://#{host}:#{port}"

module.exports = Server
