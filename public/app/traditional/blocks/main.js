/**
 * Blocks Package for Blocks realted coding
 */

// require was given outside to ensure that the configs are updated before the deps are required
requirejs.config({
    paths: {
        "Block": 'blocks/block',        
    }
});

define(function(require) {
    'use strict';
    // Bootstrapping child is enough to start
    // giving require("child") does not work because the base path is ../ from here
    require('./child');    
});
