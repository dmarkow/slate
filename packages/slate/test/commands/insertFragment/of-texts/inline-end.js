/** @jsx jsx */

import { jsx } from '../../../helpers'

export const run = editor => {
  editor.insertFragment(<fragment>fragment</fragment>)
}

export const input = (
  <value>
    <block>
      <text />
      <inline>
        word
        <cursor />
      </inline>
      <text />
    </block>
  </value>
)

// TODO: argument to made that fragment should go into the inline
export const output = (
  <value>
    <block>
      <text />
      <inline>word</inline>
      fragment
      <cursor />
    </block>
  </value>
)