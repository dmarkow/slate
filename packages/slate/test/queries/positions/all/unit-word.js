/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const input = (
  <value>
    <block>one two three</block>
    <block>four five six</block>
  </value>
)

export const run = editor => {
  return Array.from(Editor.positions(editor, { at: [], unit: 'word' }))
}

export const output = [
  { path: [0, 0], offset: 0 },
  { path: [0, 0], offset: 3 },
  { path: [0, 0], offset: 7 },
  { path: [0, 0], offset: 13 },
  { path: [1, 0], offset: 0 },
  { path: [1, 0], offset: 4 },
  { path: [1, 0], offset: 9 },
  { path: [1, 0], offset: 13 },
]
