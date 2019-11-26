/** @jsx jsx */

import { jsx } from '../..'

export const run = editor => {
  editor.exec({ type: 'delete_backward' })
}

export const input = (
  <value>
    <block>Hello</block>
    <block>
      <cursor />
      world!
    </block>
  </value>
)

export const output = (
  <value>
    <block>Hello</block>
    <block>
      <cursor />
      world!
    </block>
  </value>
)