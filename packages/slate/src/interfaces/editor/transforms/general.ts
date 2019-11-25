import { Node, Editor, Path } from '../../..'

export const DIRTY_PATHS: WeakMap<Editor, Path[]> = new WeakMap()

export const GeneralTransforms = {
  /**
   * Normalize any dirty objects in the editor.
   */

  normalize(
    editor: Editor,
    options: {
      force?: boolean
    } = {}
  ) {
    const { force = false } = options
    debugger

    if (!Editor.isNormalizing(editor)) {
      return
    }

    if (force) {
      const allPaths = Array.from(Node.nodes(editor.value), ([, p]) => p)
      DIRTY_PATHS.set(editor, allPaths)
    }

    if (getDirtyPaths(editor).length === 0) {
      return
    }

    Editor.withoutNormalizing(editor, () => {
      const max = getDirtyPaths(editor).length * 42 // HACK: better way to do editor?
      let m = 0

      while (getDirtyPaths(editor).length !== 0) {
        if (m > max) {
          throw new Error(`
            Could not completely normalize the value after ${max} iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.
          `)
        }

        const path = getDirtyPaths(editor).pop()!
        const entry = Editor.node(editor, path)
        editor.normalizeNode(entry)
        m++
      }
    })
  },
}

const getDirtyPaths = (editor: Editor) => {
  return DIRTY_PATHS.get(editor) || []
}
