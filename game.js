var choices = ["rock","paper","scissors","lizard","spock"],

    // 0 - rock , 1 - paper, 2 - scissors, 3 - lizard, 4 - spock
    outcomes = 
    [["tie", "lose", "win", "win", "lose"],
    ["win", "tie", "lose", "lose", "win"],
    ["lose", "win", "tie", "win", "lose"],
    ["lose", "win", "lose", "tie", "win"],
    ["win", "lose", "win", "lose", "tie"]],
    latestOutcome = "";

var wins = 0,
    losses = 0,
    ties = 0;

var game = function(choice){
    var won = false,
        opp = getRandomInt(0,4),
        outcome;

    outcome = outcomes[choices.indexOf(choice)][opp];

    switch (outcome){
        case "win":
            wins++;
            break;
        case "tie":
            ties++;
            break;
        case "lose":
            losses++;
            break;
    }

    latestOutcome = choice+" vs "+choices[opp]+", You "+outcome+"!";
    return ({outcome: outcome, wins: wins, losses: losses, ties: ties});
};

// Function acquired from MDN at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = game;
//module.exports = latestOutcome;