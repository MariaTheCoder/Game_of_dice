// const sumOfDice = require("./sum");   
// const isYatzy = require("./yatzy");


const button = document.getElementById("btn");

button.addEventListener("click", function() {
    let displayThrow = document.getElementById("show_throw");
    let thrownDice = document.createElement("div");
    displayThrow.innerHTML = "";

    // let displaySum = document.getElementById("show_sum");
    // let shownSum = document.createElement("div");
    // displaySum.innerHTML = "";

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
    // Let's define the roll as we want to use it multiple times
    const roll = rollDice(quantityOfDice);

    // Below is the code to display the result of our roll in the Live Server
    thrownDice.innerHTML = roll;
    displayThrow.appendChild(thrownDice); 


    // shownSum.innerHTML = sumOfDice(dice);
    // displaySum.appendChild(shownSum);



});