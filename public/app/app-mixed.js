requirejs.config({
    paths: {
        "Block": 'mixed/block',
        "jquery": "../../node_modules/jquery/dist/jquery",
        "bootstrap": "../../node_modules/bootstrap/dist/js/bootstrap",
        "prism": "../../node_modules/prismjs/prism",
        "prism-remove-whitespace": "../../node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace"
    },

    // map is equivalent to resolve.alias and resolveLoader.alias of Webpack
    // if can map original and alias names for specific/all modules/packages/files.
    map: {
        // '*' imiplies all modules/packages
        // Hence these can be placed in paths as well
        // This was is just for showcasing
        '*': {
            "text": "/node_modules/text/text.js", // npm install requirejs/text --save,
            "css": "/node_modules/require-css/css.js", // npm install require-css --save,
        }
    },
});

require([
    // 'bootstrap', // Just for testing. Any module can call it before using
    "prism",
    "prism-remove-whitespace",
    "css!/node_modules/prismjs/themes/prism-coy",
    "css!../stylesheets/simple-sidebar",    // better load CSS in traditional way to avoid FOUC (Flash of Unstyled Content)
    "css!/node_modules/bootstrap/dist/css/bootstrap.min",   
    'mixed/child',
    'mixed/sidebar/initSidebar',
], function() {
    // Known bug for prism: https://github.com/PrismJS/prism/issues/903
    Prism.highlightAll();
});
