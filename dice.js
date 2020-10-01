// const sumOfDice = require("./sum");   
// const isYatzy = require("./yatzy");


const button = document.getElementById("btn");

button.addEventListener("click", function() {
    let thrownDice = document.createElement("div");
    let showThrow = document.getElementById("show_throw");
    showThrow.innerHTML = "";

    /*
    Section to extract how many dice user has chosen to throw
    */ 
    const quantityOfDice = document.getElementById("choose_dice").value;

    /*
    Below is the function that rolls the dice!
    */
    function rollDice(numberOfDice) {
        const dice = [];
        
        for (let count = 1; count <= numberOfDice; count++) {
            dice.push(' ' + Math.ceil(Math.random()*6));
        }

        // console.log(sumOfDice(dice))
        // console.log(isYatzy(dice));

        return dice;
    }
    
    thrownDice.innerHTML = rollDice(quantityOfDice);
    showThrow.appendChild(thrownDice); 

});