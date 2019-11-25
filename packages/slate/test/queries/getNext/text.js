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
  return Editor.next(editor, [0], 'text')
}

export const output = [<text>two</text>, [1, 0]]
