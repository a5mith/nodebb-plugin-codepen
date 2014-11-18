(function(module) {
    "use strict";

    var codepen = {},
        embed = '<p data-height="268" data-theme-id="0" data-slug-hash="$2" data-default-tab="result" data-user="$1" class=\'codepen\'></p><script async src="//codepen.io/assets/embed/ei.js"></script>';
    var pen = /<a href="(?:http?:\/\/)?(codepen)\.io\/.+\/pen\/([\w\-_]+)">.+<\/a>/g;

    codepen.parse = function(data, callback) {
        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(pen)) {
            data.postData.content = data.postData.content.replace(pen, embed);
        }

        callback(null, data);
    };

    module.exports = codepen;
}(module));