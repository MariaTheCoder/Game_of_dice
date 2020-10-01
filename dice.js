
let showThrow = document.getElementById("show_throw");

function rollDice(numberOfDice) {
    const dice = [];

    for (let count = 1; count <= numberOfDice; count++) {
        dice.push(Math.ceil(Math.random()*6));
    }

    return dice;
}

// console.log(rollDice(5));

let thrownDice = document.createElement("div");
thrownDice.innerText = rollDice(5);
showThrow.appendChild(thrownDice);