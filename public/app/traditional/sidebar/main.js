/**
 * Sidebar package for sidebar related codings
 */

// This package does not have a local requirejs.config
// Hence, it will not be shimmed. Define is required here or 
// else the dependencies are not loaded in r.js build
define(function (require) {
    "use strict";
    require("./initSidebar");
});
