docopt = require('docopt').docopt
pkg = require '../package.json'
spawn = require('child_process').spawn
path = require 'path'

doc = """
  Usage:
    vtex login
    vtex logout
    vtex publish
    vtex watch [--webpack | --server] <sandbox>
    vtex --help
    vtex --version

  Commands:
    login         Log in with your VTEX credentials
    logout        Clear local authentication credentials
    publish       Publish this app to VTEX Gallery
    watch         Start a development sandbox

  Options:
    -h --help     Show this screen
    -v --version  Show version
    -w --webpack  Start with webpack
    -s --server   Start with webpack-dev-server

  Arguments:
    sandbox       The name of the sandbox you wish to work on

"""

options = docopt(doc, version: pkg.version)

command = ""
argv = []
childEnv = Object.create(process.env)
run = () ->
  baseDir = path.dirname(process.argv[1])
  args = ["#{baseDir}/#{command}"]
  args.push(arg) for arg in argv

  if process.platform isnt 'win32'
    proc = spawn('node', args, { stdio: 'inherit', customFds: [0, 1, 2], env: childEnv })
  else
    proc = spawn(process.execPath, args, { stdio: 'inherit', env: childEnv })

  proc.on('close', process.exit.bind(process))
  proc.on('error', (err) ->
    if err.code == "ENOENT"
      console.error('\n  %s(1) does not exist, try --help\n', bin)
    else if err.code == "EACCES"
      console.error('\n  %s(1) not executable. try chmod or run with root\n', bin)

    process.exit(1)
  )

if options.login
  command = "vtex-login"
else if options.logout
  command = "vtex-logout"
else if options.publish
  command = "vtex-publish"
else
  if options['--webpack'] or options['--server']
    command = "vtex-webpack"
    childEnv['NODE_ENV'] = 'hot' if options['--server']
  else
    command = "vtex-watch"

  argv = [
    options['--webpack'],
    options['--server'],
    options['<sandbox>']
  ]

run()

