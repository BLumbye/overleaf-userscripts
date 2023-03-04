// ==UserScript==
// @name         Overleaf - Additional Keymaps
// @namespace    https://github.com/BLumbye/overleaf-userscripts
// @version      0.1
// @description  Adds new keybindings to Overleaf
// @author       Benjamin Lumbye
// @match        https://www.overleaf.com/project/*
// @grant        none
// ==/UserScript==

'use strict';

/**
 * Puts some text before and after what is currently selected
 * @param {string} before The text to put before the selection
 * @param {string} after The text to put after the selection
 */
function wrapSelection(CodeMirror, view, before, after) {
  view.dispatch(
    view.state.changeByRange((range) => ({
      changes: [
        { from: range.from, insert: before },
        { from: range.to, insert: after },
      ],
      range: CodeMirror.EditorSelection.range(range.from + before.length, range.to + before.length),
    })),
  );
}

(function () {
  window.addEventListener('UNSTABLE_editor:extensions', (event) => {
    const { CodeMirror, CodeMirrorVim, extensions } = event.detail;
    extensions.push(
      CodeMirror.keymap.of([
        {
          key: 'Ctrl-m',
          run(view) {
            wrapSelection(CodeMirror, view, '\\texttt{', '}');
            return true;
          },
        },
      ]),
    );
  });
})();
