define(function(require) {
    'use strict';
    var Block = require("Block");
    var block = new Block("Grand Parent");
    block.render(".module-container");
    return block;
});