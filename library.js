(function(module) {
    "use strict";

    var codepen = {},
        embed = '<p data-height="268" data-theme-id="0" data-slug-hash="$2" data-default-tab="result" data-user="$1" class="codepen"></p><script async src="//codepen.io/assets/embed/ei.js"></script>';


    codepen.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:http?:\/\/)?(codepen\.)io\/([\w\-_]+)\/pen\/([\w\-_]+)">([\w\-_]+)<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = codepen;
}(module));