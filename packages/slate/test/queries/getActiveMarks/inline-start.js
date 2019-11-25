/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../..'

export const input = (
  <value>
    <block>
      <mark key="a">one</mark>
      <inline>
        <cursor />
        two
      </inline>
      three
    </block>
  </value>
)

export const run = editor => {
  return Array.from(Editor.activeMarks(editor))
}

export const output = []
