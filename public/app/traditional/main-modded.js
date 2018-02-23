// Only the global configs are given here. The rest are distributed as on need.
requirejs.config({
    // paths are loaction independent. Use them to alias global dir/mod instead of map
    paths: {
        "jquery": "../../../node_modules/jquery/dist/jquery",
        "bootstrap": "../../../node_modules/bootstrap/dist/js/bootstrap",
        "prism": "../../../node_modules/prismjs/prism",
        "prism-remove-whitespace": "../../../node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace",
        "node_modules": "../../../node_modules",    // added to fix CSS build issue. See **1**
    },
    
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "$",
        },
    },

    map: {
        '*': {
            "stylesheets": "../../stylesheets", // alias path name. Better give in paths.
        },
        // SEE: You can give configurations for specific modules too
        "sidebar": {
            "template": "../../../template", // alias path name. Better give in paths.
        },
        // **1** Sounds good. Doesn't work. Some issue with CSS loader plugin.
        // Generates different ID's in built 
        // "coder": {
        //     "node_modules": "../../../../node_modules"
        // }
    },

    // it will look for -> baseUrl/package-name/main.js
    packages: ["blocks", "coder", "sidebar", {
        name: 'css',
        location: '../../../node_modules/require-css/',
        main: 'css.min'
    }, {
        name: 'text',
        location: '../../../node_modules/text/',
        main: 'text'
    }],

    // Enabling this a great way to check for correct shims
    // enforceDefine: true,
});

// Global imports
require([
    "css!stylesheets/simple-sidebar",
    "css!node_modules/bootstrap/dist/css/bootstrap.min",
]);
// Load the packages
require(["blocks", "coder", "sidebar"]);