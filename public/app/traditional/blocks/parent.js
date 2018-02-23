define(function(require) {
    'use strict';
    var parent = require("./grandParent");
    var Block = require("Block");
    var block = new Block("Parent");
    parent.children.push(block);
    block.render(parent);
    return block;
});