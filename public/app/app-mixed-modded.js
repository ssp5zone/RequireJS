requirejs.config({
    paths: {
        "Block": 'mixed/block',
        "jquery": "../../node_modules/jquery/dist/jquery",
        "bootstrap": "../../node_modules/bootstrap/dist/js/bootstrap",
        "prism": "../../node_modules/prismjs/prism",
        "prism-remove-whitespace": "../../node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace",
    },

    // shims are required for those packages which
    // do not define() things in AMD format inside them.
    // Eg. Bootstrap, Backbone, Underscore etc.
    // Just for demo. Shimming makes sense when you have to return (export something) or bundle the modules,
    // otherwise you can directly use the Non-AMD modules (only for lazy-loading) as well
    shim: {
        "bootstrap": {
            deps: ["jquery"],
            exports: "$",   // useless here, useful for lodash or Underscore where you can export the window._ as "_"
        },
        "prism": {
            deps: [],
            exports: "window",  // IMPORTANT: Without exports the shims are not created as there is no return.
        },
        "prism-remove-whitespace": {
            deps: ["prism"],
            exports: "window", // IMPORTANT: Remove this and check with enforceDefine: true.
        },
    },

    map: {
        '*': {
            // To solve absolute path issue with rjs
            // Without this map the r.js confuses base path to "C:\"
            "/node_modules": "../../node_modules",
        }
    },

    // Giving CSS and Text Loader plugins as package instead of map 
    // solves a lot of build issue (absolute path, internal dependencies, module-id generation)
    // Refer: https://github.com/requirejs/r.js/issues/289
    packages: [{
        name: 'css',
        location: '../../node_modules/require-css/',
        main: 'css.min'
    }, {
        name: 'text',
        location: '../../node_modules/text/',
        main: 'text'
    }],
    

    // Enabling this a great way to check for correct shims
    // When enabling, give this file in define as well
    // enforceDefine: true,

    // This is for bundling thing into seperate bundles
    // bundles: {
    //     "prism-with-plugins": ["prism", "prism-remove-whitespace"],
    // }
});

require([
    "prism-remove-whitespace", // This automatically loads prism as well.
    "css!/node_modules/prismjs/themes/prism-coy",
    "css!../stylesheets/simple-sidebar",
    "css!/node_modules/bootstrap/dist/css/bootstrap.min",   
    'mixed/child',
    'mixed/sidebar/initSidebar',
], function() {
    Prism.highlightAll();   // Known bug for prism: https://github.com/PrismJS/prism/issues/903
});
