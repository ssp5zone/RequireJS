define(function(require) {
    'use strict';

    var $ = require("jquery");
    var template = require("text!template/sidebar.html");

    // loading and injecting as a template ensures that the content is DOM ready
    // for its own use and other callers.
    // COOL: This solves the problem of Async HTML load
    $("#sidebar-wrapper").html(template);
    
    // Since we have not includes the global export, exporting like this
    var exports = {};
    exports.path = location.pathname.split("/").pop();
    return exports;
});