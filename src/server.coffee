express = require 'express'
Sequelize = require 'sequelize'
epilogue = require 'epilogue'

pluginmanager = require './pluginmanager'
SubApp = require './subapp'
Screen = require './screen'

class Server

  # export SubApp class
  @SubApp: SubApp

  constructor: () ->
    # init express
    @app = express()

    # init sequelize
    # TODO: configure sequelize
    @sequelize = new Sequelize 'db', null, null,
      dialect: 'sqlite'

    # init epilogue
    epilogue.initialize
      app: @app
      sequelize: @sequelize

    # load sub-apps
    new Screen @app

    # load plugins and then start the server
    server = this
    pluginmanager.loadAll () ->
      server.start()

  start: () ->
    server = @app.listen 3000, () ->
      host = server.address().address
      port = server.address().port

      console.log "Litening at http://#{host}:#{port}"

module.exports = Server
