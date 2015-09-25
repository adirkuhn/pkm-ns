var observableModule = require("data/observable");

var moves = {
    0: { name: "Normal", color: "#A8A878" },
    1: { name: "Fogo", color: "#F08030" },
    2: { name: "Lutador", color: "#C03028" },
    3: { name: "Água", color: "#6890F0" },
    4: { name: "Voador", color: "#A890F0" },
    5: { name: "Grama", color: "#78C850" },
    6: { name: "Venenoso", color: "#A040A0" },
    7: { name: "Elétrico", color: "#F8D030" },
    8: { name: "Terra", color: "#E0C068" },
    9: { name: "Psíquico", color: "#F85888" },
    10: { name: "Rocha", color: "#B8A038" },
    11: { name: "Gelo", color: "#98D8D8" },
    12: { name: "Inseto", color: "#A8B820" },
    13: { name: "Dragão", color: "#7038F8" },
    14: { name: "Fantasma", color: "#705898" },
    15: { name: "Noturno", color: "#705848" },
    16: { name: "Metal", color: "#B8B8D0" },
    17: { name: "Fada", color: "#EE99AC" }
};

var strongAgainst = {
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  }
};

var weakAgainst = {
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  },
    0: {  }
};

var getRandomMove = function() {
    var randomChoice = Math.floor(Math.random() * 18);
    return moves[randomChoice];
}

var data = {
    move: getRandomMove(),
}

var gData = new observableModule.Observable({
    move: data.move,
    option1: 'Agua',
    option2: 'Gelo',
    option3: 'Vento',
    option4: 'Grama'
});

exports.gData = gData;