/*
 * pub-pkg-highlight.js
 *
 * browserify entry point - mainly to initialize highlight.js
 * also supports pub-generator 'update-view' events
 *
 * copyright 2015, Jurgen Leschner - github.com/jldec - MIT license
 *
 * for highlight.js please see included static/js/LICENSE-HIGHLIGHT
 * or visit https://github.com/isagalaev/highlight.js
 */

hljs.initHighlightingOnLoad();

window.onGenerator = function(generator) {
  generator.on('update-view', function() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  });
};