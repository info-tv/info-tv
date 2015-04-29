express = require 'express'
Sequelize = require 'sequelize'
epilogue = require 'epilogue'

pluginmanager = require './pluginmanager'
SubApp = require './subapp'
Screen = require './screen'

# Core of the server. It initializes http/https server, loads plugins, and
# starts itself automatically.
#
# @author Jukka Hyytiälä <hyytiala.jukka@gmail.com>
# @version 0.0.1
# @since 0.0.0
class Server

  # export SubApp class
  #
  # @example usage
  #   SubApp = require('info-tv').SubApp
  #
  @subApp: SubApp


  # Construct new server, load plugins, and start itself.
  #
  constructor: () ->
    # init express
    @app = express()

    # init sequelize
    # @todo configure sequelize
    @sequelize = new Sequelize 'db', null, null,
      dialect: 'sqlite'

    # init epilogue
    epilogue.initialize
      app: @app
      sequelize: @sequelize

    # load sub apps
    new Screen @app

    # load plugins and then start the server
    server = this
    pluginmanager.loadAll () ->
      server.start()

  # start server
  #
  start: () ->
    server = @app.listen 3000, () ->
      host = server.address().address
      port = server.address().port

      console.log "Litening at http://#{host}:#{port}"

module.exports = Server
