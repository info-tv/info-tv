# class Server
HTTP(S) server that uses sub-applications; instances of Server.SubApp.

```coffeescript
Server = require 'info-tv'
```

## static property Server.SubApp
Reference to class Server.SubApp.

## property server.app
Express.js application.

## property server.sequelize
Sequelize ORM instance.

## async constructor new Server()
Creates a new Express.js application with Sequelize and Epilogue. It loads plugins with pluginmanager and finally starts the server.

## async function server.start()
Turns on the server.

# abstract class Server.SubApp
Abstract sub-application class. Instances of its sub-classes are served within the main Server.

```coffeescript
SubApp = require('info-tv').SubApp
```

## property app
Express.Router instance

## property mountingName
`String` - name of the application used for mounting to super-application.

```coffeescript
# lets say that server is mounted to http://server.com/
app.name = 'example'
app.useIn server # => now app is mounted to http://server.com/example
```

## abstract constructor new Server.SubApp([mountingName[, superApp]])
Creates a new Express.Router instance and mount it to superApp if present.
### optional param mountingName = ''
See property mountingName.
### optional param superApp
See function useIn(superApp).

## function useIn(superApp)
Mounts the application to superApp. See property mountingName for example.
### param superApp
Parent application to be mounted.

# class Screen extends Server.SubApp
Screen application that provides needed business logic and API plus all needed files to its browser application.

## constructor new Screen([superApp])
Creates a new sub-application with the name `screen`. It serves content of `screen/public` folder directly to the browser.
### optional param superApp
Passed to parent's constructor. See constructor new Server.SubApp.

# internal module pluginmanager

## async function loadAll([callback])
Loads all plugins listed in `package.json`.

KNOWN ISSUE: async.auto fails on unspecified plugin dependencies. Update async library fix it.
### optional param callback(error = null)
Called with `null` after all plugins are loaded completely or with error if any.
