(function(module) {
    "use strict";

    var codepen = {},
        embed = '<p data-height="268" data-theme-id="0" data-slug-hash="$1" data-default-tab="result"></p><script async src="//codepen.io/assets/embed/ei.js"></script>';


    codepen.parse = function(postContent, callback) {
        postContent = postContent.replace(/\[codepen_embed slug_hash=([\s\S]*?)&[\s\S]*?\]/g, embed);
        callback(null, postContent);
    };

    module.exports = codepen;
}(module));