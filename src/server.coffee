express = require 'express'
Sequelize = require 'sequelize'
epilogue = require 'epilogue'
App = require './app'
pluginmanager = require './pluginmanager'

# Core of the server. It initializes http/https server, loads plugins, and
# starts itself automatically.
#
# @author Jukka Hyytiälä <hyytiala.jukka@gmail.com>
# @version 0.0.1
# @since 0.0.0
class Server

  # Construct new server, load plugins, and start itself.
  #
  constructor: () ->
    # init express
    @app = express()

    # @init sequelize
    # @todo configure sequelize
    @sequelize = new Sequelize 'db', null, null,
      dialect: 'sqlite'

    # init epilogue
    epilogue.initialize
      app: @app
      sequelize: @sequelize

    # load plugins and then start the server
    server = this
    pluginmanager.loadAll () ->
      server.start()

  # start server
  #
  start: () ->
    @app.listen 3000
    console.log 'Listening on port 3000...'

module.exports = Server
