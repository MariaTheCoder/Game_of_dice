

function rollDice(numberOfDice) {

    for (let count = 1; count <= numberOfDice; count++) {
        console.log(Math.ceil(Math.random()*6));
    }
}

rollDice(6);