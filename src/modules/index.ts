import {help} from 'findhelp'

import apps from './apps'
import auth from './auth'
import init from './init'
import local from './local'
import infra from './infra'
import io from './io'
import {dirnameJoin} from '../file'
import workspace from './workspace'
import deps from './deps'
import {greeting} from '../greeting'
import * as pkg from '../../package.json'

export default {
  ...auth,
  ...apps,
  ...workspace,
  ...deps,
  ...local,
  ...init,
  ...infra,
  ...io,
  use: {
    module: dirnameJoin('modules/workspace/use'),
  },
  options: [
    {
      short: 'h',
      long: 'help',
      description: 'show help information',
      type: 'boolean',
    },
  ],
  handler (options) {
    if (options.h || options.help) {
      console.log(help(this, pkg))
    } else if (options.v || options.version) {
      console.log(pkg.version)
    } else {
      console.log(`  ${greeting.join('\n  ')}`)
      console.log(help(this, pkg))
    }
    return Promise.resolve()
  },
}
