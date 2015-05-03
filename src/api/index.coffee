SubApp = require '../subapp'

class API extends SubApp

  constructor: (@app, sequelize, epilogue) ->
    super 'api'

    # init Users, UserGroups, etc.

module.exports = API
