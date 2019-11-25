/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <value>
    <block>one</block>
  </value>
)

export const run = editor => {
  return Editor.range(editor, {
    anchor: { path: [0, 0], offset: 2 },
    focus: { path: [0, 0], offset: 1 },
  })
}

export const output = {
  anchor: { path: [0, 0], offset: 2 },
  focus: { path: [0, 0], offset: 1 },
}
