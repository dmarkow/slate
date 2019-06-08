import AtRange from '../../commands/at-range'
import ByPath from '../../commands/by-path'
import Commands from '../commands'
import OnHistory from '../../commands/on-history'
import OnSelection from '../../commands/on-selection'
import OnValue from '../../commands/on-value'
import WithIntent from '../../commands/with-intent'

/**
 * A plugin that defines the core Slate commands.
 *
 * @return {Object}
 */

function CoreCommandsPlugin() {
  return Commands({
    ...AtRange,
    ...ByPath,
    ...OnHistory,
    ...OnSelection,
    ...OnValue,
    ...WithIntent,
  })
}

/**
 * Export.
 *
 * @type {Object}
 */

export default CoreCommandsPlugin