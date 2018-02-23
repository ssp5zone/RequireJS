/**
 * Prism Package for prism realted coding
 */

// require was given outside to ensure that the configs are updated before the deps are required
requirejs.config({
        shim: {
            "prism": {
                deps: [],
                exports: "window",  // IMPORTANT: Without exports the shims are not created as there is no return or export
            },
            "prism-remove-whitespace": {
                deps: ["prism"],
                exports: "window", // IMPORTANT: Remove this and check with enforceDefine: true.
            },
        },
});

/**
 * If the file contains a requirejs local config
 * the whole file is shimmed with an outer define.
 * Hence the inner defined will not be executed
 */
// define(function(require) {
//    'use strict';
        require([
            "prism-remove-whitespace", // This automatically loads prism as well.
            "css!node_modules/prismjs/themes/prism-coy",
        ], function() {
            Prism.highlightAll(); // Known bug for prism: https://github.com/PrismJS/prism/issues/903
        });      
// });
