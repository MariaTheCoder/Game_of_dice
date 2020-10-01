
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    let showThrow = document.getElementById("show_throw");

    function rollDice(numberOfDice) {
        const dice = [];

        for (let count = 1; count <= numberOfDice; count++) {
            dice.push(Math.ceil(Math.random()*6));
        }

        return dice;
    }

    let thrownDice = document.createElement("div");
    thrownDice.innerText = rollDice(5);
    showThrow.appendChild(thrownDice);

});

