var observableModule = require("data/observable");

var gData = new observableModule.Observable({
    move: 'Fogo',
    option1: 'Agua',
    option2: 'Gelo',
    option3: 'Vento',
    option4: 'Grama'
});

exports.pageLoaded = function(args) {
    var page = args.object;
    page.bindingContext = gData;
};

exports.checkAnswer = function(a) {
    console.log(a);
    alert("Oi ");
};