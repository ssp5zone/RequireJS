// Only the global configs are given here. The rest are distributed as on need.
requirejs.config({
    paths: {
        "jquery": "/node_modules/jquery/dist/jquery",
        "bootstrap": "/node_modules/bootstrap/dist/js/bootstrap",
        "prism": "/node_modules/prismjs/prism",
        "prism-remove-whitespace": "/node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace",
        "node_modules": "../../../node_modules",
    },
    
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "$",
        },
    },

    map: {
        '*': {
            "text": "/node_modules/text/text.js",
            "css": "/node_modules/require-css/css.js",
            "template": "/public/template", // alias path name
            "stylesheets": "/public/stylesheets", // alias path name
        }
    },

    // it will look for -> baseUrl/package-name/main.js
    packages: ["blocks", "coder", "sidebar"],

    // Enabling this a great way to check for correct shims
    // enforceDefine: true,
});

define(function(require) {
    'use strict';
    // Global imports
    require([
        "css!stylesheets/simple-sidebar",
        "css!/node_modules/bootstrap/dist/css/bootstrap.min",
    ]);
    // Load the packages
    require(["blocks", "coder", "sidebar"]);
});