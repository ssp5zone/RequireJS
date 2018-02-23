define(function(require) {
    'use strict';
    var parent = require("./parent");
    var Block = require("Block");
    var block = new Block("Child");
    parent.children.push(block);
    block.render(parent);
});