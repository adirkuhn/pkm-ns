var viewModule = require("ui/core/view");
var mainViewModel = require("../../shared/viewModels/mainViewModel.js");


var move;

exports.pageLoaded = function(args) {
    var page = args.object;
    
    move = viewModule.getViewById(page, "move");
    move.text = mainViewModel.gData.move.name;
    move.style.backgroundColor  = mainViewModel.gData.move.color;
};

exports.checkAnswer = function(a) {
    //code
};