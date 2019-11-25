/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const input = (
  <value>
    <block>one</block>
    <block>two</block>
    <block>three</block>
  </value>
)

export const run = editor => {
  return Array.from(
    Editor.matches(editor, { at: [], match: ([, p]) => p.length === 1 })
  )
}

export const output = [
  [<block>one</block>, [0]],
  [<block>two</block>, [1]],
  [<block>three</block>, [2]],
]
