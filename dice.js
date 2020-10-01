
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    let thrownDice = document.createElement("div");
    let showThrow = document.getElementById("show_throw");
    showThrow.innerHTML = "";

    function rollDice(numberOfDice) {
        const dice = [];

        for (let count = 1; count <= numberOfDice; count++) {
            dice.push(Math.ceil(Math.random()*6));
        }

        return dice;
    }
    
    thrownDice.innerHTML = rollDice(5);
    showThrow.appendChild(thrownDice);
});

