/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <value>
    <block>one</block>
    <block>two</block>
  </value>
)

export const run = editor => {
  return Editor.previous(editor, [1], 'text')
}

export const output = [<text>one</text>, [0, 0]]
