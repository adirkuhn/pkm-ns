var viewModule = require("ui/core/view");
var mainViewModel = require("../../shared/viewModels/mainViewModel.js");
var vibrator = require("nativescript-vibrate");


var page;


var loadQuestion = function() {
    var move;
    //move
    move = viewModule.getViewById(page, "move");
    move.text = mainViewModel.gData.move.move.name;
    move.style.backgroundColor  = mainViewModel.gData.move.move.color;

    //options
    op1 = viewModule.getViewById(page, "op1");
    op1.text = mainViewModel.gData.option1.name;
    op1.style.backgroundColor  = mainViewModel.gData.option1.color;

    op2 = viewModule.getViewById(page, "op2");
    op2.text = mainViewModel.gData.option2.name;
    op2.style.backgroundColor  = mainViewModel.gData.option2.color;

    op3 = viewModule.getViewById(page, "op3");
    op3.text = mainViewModel.gData.option3.name;
    op3.style.backgroundColor  = mainViewModel.gData.option3.color;

    op4 = viewModule.getViewById(page, "op4");
    op4.text = mainViewModel.gData.option4.name;
    op4.style.backgroundColor  = mainViewModel.gData.option4.color;
}

exports.pageLoaded = function(args) {
    page = args.object;

    loadQuestion();
};

exports.checkAnswer = function(obj) {

    if (obj.object.text == mainViewModel.gData.answer) {
        alert("Parabéns você acertou!");
        vibrator.vibration(500);
    }
    else {
        alert("Você ERROU!");
    }

    //load new question
    mainViewModel.gData = mainViewModel.reload();

    loadQuestion();
};