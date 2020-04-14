import { flags as oclifFlags } from '@oclif/command'

import { CustomCommand } from '../../oclif/CustomCommand'
import workspaceDepsList from '../../modules/deps/list'

export default class DepsList extends CustomCommand {
  static aliases = ['deps:ls']

  static description = 'List your workspace dependencies'

  static examples = ['vtex deps list', 'vtex deps ls']

  static flags = {
    keys: oclifFlags.boolean({ char: 'k', description: 'Show only keys', default: false }),
    npm: oclifFlags.boolean({ char: 'n', description: 'Include deps from npm registry', default: false }),
  }

  static args = []

  async run() {
    const {
      flags: { keys, npm },
    } = this.parse(DepsList)

    await workspaceDepsList({ keys, k: keys, npm, n: npm })
  }
}
