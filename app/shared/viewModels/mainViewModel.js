var observableModule = require("data/observable");

var moves = {
    0: { name: "Normal", color: "#A8A878" },
    1: { name: "Lutador", color: "#C03028" },
    2: { name: "Voador", color: "#A890F0" },
    3: { name: "Venenoso", color: "#A040A0" },
    4: { name: "Terra", color: "#E0C068" },
    5: { name: "Rocha", color: "#B8A038" },
    6: { name: "Inseto", color: "#A8B820" },
    7: { name: "Fantasma", color: "#705898" },
    8: { name: "Metal", color: "#B8B8D0" },
    9: { name: "Fogo", color: "#F08030" },
    10: { name: "Água", color: "#6890F0" },
    11: { name: "Grama", color: "#78C850" },
    12: { name: "Elétrico", color: "#F8D030" },
    13: { name: "Psíquico", color: "#F85888" },
    14: { name: "Gelo", color: "#98D8D8" },
    15: { name: "Dragão", color: "#7038F8" },
    16: { name: "Noturno", color: "#705848" },
    17: { name: "Fada", color: "#EE99AC" }
};

var strongAgainst = {
    1: [ 0, 5, 8, 14, 16 ],
    2: [ 1, 6, 11 ],
    3: [ 11, 17 ],
    4: [ 3, 5, 8, 9, 12 ],
    5: [ 2, 6, 9, 14 ],
    6: [ 11, 13, 16 ],
    7: [ 7, 13 ],
    8: [ 5, 14, 17 ],
    9: [ 6, 8, 11, 14 ],
    10: [ 4, 5, 9 ],
    11: [ 4, 5, 10 ],
    12: [ 2, 10 ],
    13: [ 1, 3 ],
    14: [ 2, 4, 11, 15 ],
    15: [ 15 ],
    16: [ 7, 13 ],
    17: [ 1, 15, 16 ]
};

var weakAgainst = {
    0: [ 5, 7, 8 ],
    1: [ 2, 3, 5, 6, 13, 17 ],
    2: [ 5, 8, 12 ],
    3: [ 3, 4, 5, 7, 8 ],
    4: [ 2, 6, 11 ],
    5: [ 1, 4, 8,  ],
    6: [ 1, 2, 3, 7, 8, 9, 17 ],
    7: [ 0, 15, 1 ],
    8: [ 8, 9, 10, 12 ],
    9: [ 5, 9, 10, 15 ],
    10: [ 10, 11, 17 ],
    11: [ 2, 3, 6, 8, 9, 11, 15 ],
    12: [ 4, 11, 12, 15 ],
    13: [ 8, 13, 16 ],
    14: [ 8, 9, 10, 14 ],
    15: [ 8, 17, 1 ],
    16: [ 1, 16, 17 ],
    17: [ 3, 8, 9 ]
};

var getRandomMove = function() {
    var randomChoice = Math.floor(Math.random() * 17) + 1; // 1 a 17 (tipo normal nao tem golpe fortes)
    return { id: randomChoice, move: moves[randomChoice] };
}

var getStrongAgainst = function(type) {
    var len = strongAgainst[type].length;
    var i = Math.floor(Math.random() * len);
    return strongAgainst[type][i];
}

var getWeaksAgaints = function(type) {
    var len = weakAgainst[type].length;

    if (len == 3) {
        return weakAgainst[type];
    }

    return weakAgainst[type].sort(function() {
        return .5 - Math.random();
    })
    .slice(0, 3);
}

var getOptions = function(type) {
    //one strong and three weak
    var ops = [];

    //get strong
    var strong = getStrongAgainst(type);
    var answer = moves[strong].name

    ops[0] = {
        'name': answer,
        'color': moves[strong].color,
    };

    //get weaks
    var weaks = getWeaksAgaints(type);
    var i = 1;
    for (item in weaks) {
        ops[i++] = {
            'name': moves[weaks[item]].name,
            'color': moves[weaks[item]].color,
        }
    }

    var res = ops.sort(function() {
        return .5 - Math.random();
    });

    res['answer'] = answer;

    return res;
}

var getData = function() {

    var randomMove = getRandomMove();

    return {
        move: randomMove,
        options: getOptions(randomMove.id)
    };
}

var getGData = function() {
    var data = getData();

    var gData = new observableModule.Observable({
        move: data.move,
        option1: data.options[0],
        option2: data.options[1],
        option3: data.options[2],
        option4: data.options[3],
        answer: data.options['answer']
    });

    return gData;
}

var reload = function() {
    return getGData();
}

var gData = getGData();

exports.gData = gData;
exports.reload = reload;