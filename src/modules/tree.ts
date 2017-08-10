export default {
  link: {
    description: 'Send the files to the registry and watch for changes',
    options: [
      {
        short: 'c',
        long: 'clean',
        description: 'Clean builder cache',
        type: 'boolean',
      },
      {
        short: 'o',
        long: 'only',
        description: 'Link only this folder',
        type: 'string',
      },
    ],
    handler: './apps/link',
  },
  unlink: {
    optionalArgs: 'app',
    description: 'Unlink an app on the current directory or a specified one',
    handler: './apps/unlink',
  },
  add: {
    requiredArgs: 'app',
    description: 'Add an app to the manifest dependencies',
    handler: './apps/add',
  },
  publish: {
    description: 'Publish the current app or a path containing an app',
    optionalArgs: 'path',
    options: [
      {
        short: 't',
        long: 'tag',
        description: 'Apply a tag to the release',
        type: 'string',
      },
      {
        short: 'r',
        long: 'registry',
        description: 'Specify the registry for the app registry',
        type: 'string',
      },
    ],
    handler: './apps/publish',
  },
  install: {
    alias: 'i',
    optionalArgs: 'app',
    description: 'Install an app (defaults to the app in the current directory)',
    options: [
      {
        short: 'r',
        long: 'registry',
        description: 'Specify the registry for the app',
        type: 'string',
      },
    ],
    handler: './apps/install',
  },
  uninstall: {
    optionalArgs: 'app',
    description: 'Uninstall an app (defaults to the app in the current directory)',
    options: [
      {
        short: 'y',
        long: 'yes',
        description: 'Auto confirm prompts',
        type: 'boolean',
      },
    ],
    handler: './apps/uninstall',
  },
  list: {
    alias: 'ls',
    description: 'List your installed VTEX apps',
    handler: './apps/list',
  },
  settings: {
    description: 'Get app settings',
    requiredArgs: 'app',
    optionalArgs: 'fields',
    handler: './apps/settings',
    set: {
      description: 'Set a value',
      requiredArgs: ['app', 'fields', 'value'],
      handler: './apps/settings/set',
    },
    unset: {
      description: 'Unset a value',
      requiredArgs: ['app', 'fields'],
      handler: './apps/settings/unset',
    },
  },
  login: {
    description: 'Log into a VTEX account',
    options: [
      {
        short: 'a',
        long: 'account',
        description: 'Specify login account',
        type: 'string',
      },
      {
        short: 'w',
        long: 'workspace',
        description: 'Specify login workspace',
        type: 'string',
      },
    ],
    handler: './auth/login',
  },
  logout: {
    description: 'Logout of the current VTEX account',
    handler: './auth/logout',
  },
  switch: {
    requiredArgs: 'account',
    description: 'Switch to another VTEX account',
    options: [
      {
        short: 'w',
        long: 'workspace',
        description: 'Specify login workspace',
        type: 'string',
      },
    ],
    handler: './auth/switch',
  },
  whoami: {
    description: 'See your credentials current status',
    handler: './auth/whoami',
  },
  workspace: {
    list: {
      alias: 'ls',
      description: 'List workspaces on this account',
      handler: './workspace/list',
    },
    create: {
      requiredArgs: 'name',
      description: 'Create a new workspace with this name',
      handler: './workspace/create',
    },
    delete: {
      requiredArgs: 'name',
      description: 'Delete a single or various workspaces',
      options: [
        {
          short: 'y',
          long: 'yes',
          description: 'Auto confirm prompts',
          type: 'boolean',
        },
        {
          short: 'f',
          long: 'force',
          description: 'Ignore if you\'re currently using the workspace',
          type: 'boolean',
        },
      ],
      handler: './workspace/delete',
    },
    promote: {
      description: 'Promote this workspace to master',
      handler: './workspace/promote',
    },
    production: {
      optionalArgs: 'production',
      description: 'Set this workspace to production mode',
      handler: './workspace/production',
    },
    use: {
      requiredArgs: 'name',
      description: 'Use a workspace to perform operations',
      handler: './workspace/use',
    },
    reset: {
      optionalArgs: 'name',
      description: 'Delete and create a workspace',
      handler: './workspace/reset',
    },
  },
  deps: {
    list: {
      alias: 'ls',
      description: 'List your workspace dependencies',
      options: [
        {
          short: 'n',
          long: 'npm',
          description: 'Include deps from npm registry',
          type: 'boolean',
        },
        {
          short: 'k',
          long: 'keys',
          description: 'Show only keys',
          type: 'boolean',
        },
      ],
      handler: './deps/list',
    },
    update: {
      description: 'Update your workspace dependencies',
      handler: './deps/update',
    },
  },
  local: {
    eslint: {
      description: 'Setup a local eslint environment',
      options: [
        {
          short: 'y',
          long: 'yes',
          description: 'Auto confirm prompts',
          type: 'boolean',
        },
      ],
      handler: './local/update',
    },
    package: {
      description: 'Generate package.json from manifest',
      handler: './local/package',
    },
    manifest: {
      description: 'Generate manifest from package.json',
      handler: './local/manifest',
    },
    debug: {
      description: 'Run a Colossus function locally',
      handler: './local/debug',
    },
  },
  init: {
    description: 'Create basic files and folders for your VTEX app',
    handler: './init',
    render: {
      description: 'Create a new render bootstrap project',
      handler: './init/render',
    },
  },
  infra: {
    list: {
      alias: 'ls',
      optionalArgs: 'name',
      description: 'List installed services',
      options: [
        {
          short: 'a',
          long: 'available',
          description: 'List services available to install',
          type: 'bool',
        }, {
          short: 'f',
          long: 'filter',
          description: 'Only list versions containing this word',
          type: 'string',
        },
      ],
      handler: './infra/list',
    },
    install: {
      alias: 'i',
      requiredArgs: 'name',
      description: 'Install a service',
      handler: './infra/install',
    },
    update: {
      description: 'Update all installed services',
      handler: './infra/update',
    },
  },
  io: {
    list: {
      alias: 'ls',
      description: 'List VTEX IO versions available to install',
      options: [
        {
          short: 'a',
          long: 'available',
          description: 'List services available to install',
          type: 'bool',
        }, {
          short: 't',
          long: 'tag',
          description: 'Filter by tag',
          type: 'string',
        },
      ],
      handler: './io/list',
    },
    install: {
      alias: 'i',
      optionalArgs: 'version',
      description: 'Install VTEX IO Version',
      options: [
        {
          short: 't',
          long: 'tag',
          description: 'Install last version by Tag',
          type: 'string',
        },
      ],
      handler: './io/install',
    },
  },
  use: {
    requiredArgs: 'name',
    description: 'Use a workspace to perform operations',
    handler: './workspace/use',
  },
  options: [
    {
      short: 'h',
      long: 'help',
      description: 'show help information',
      type: 'boolean',
    },
  ],
  handler: './',
}