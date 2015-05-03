async = require 'async'
pkg = require '../package.json'

# todo: async.auto fails on unspecified dependencies.
# Now all deps must be specified in plugin's peerDependencies.
pluginList = {}

module.exports =

  # load all plugins listed in package.json
  loadAll: (callback) ->
    console.log 'Loading plugins...'

    plugins = pkg.plugins || []
    async.each plugins,
      (name, done) ->
        console.log "Loading plugin '#{name}'..."

        try
          plugin = require name

          # construct plugin
          pluginConstructor = (done) ->
            new plugin # todo: add params
            done()

          # create dependency list for async.auto
          if plugin.deps?
            pluginList[name] = [plugin.deps..., pluginConstructor]
          else
            pluginList[name] = pluginConstructor

        catch e
          console.error "Failed to load plugin '#{name}'."
          console.error e

        # complete loading plugin
        done()
      () ->
        # init plugins in the best order
        async.auto pluginList, (error, results) ->
          if error
            console.error error
            callback?(error)
          else
            console.log 'Done loading plugins.'
            callback?(null)
