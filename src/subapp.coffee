express = require 'express'

# Abstract sub-application base class.
#
class SubApp

  # Construct new sub-application and use it in super-application
  #
  # @param name [string] name of the application used in mounting to
  #   super-application
  # @param superApp [express application] super-application to be mounted in
  #
  constructor: (@name, @superApp) ->
    # init sub-app
    @app = express.Router()

    # mount it to super-app if present
    @useIn @superApp if @superApp?

  # Mount to super-application with application name as mounting point
  #
  # @param superApp [express application] super-application to be mounted in
  #
  useIn: (@superApp) ->
    @superApp?.use "/#{@name}", @app

module.exports = SubApp
