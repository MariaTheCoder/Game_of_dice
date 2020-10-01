
const button = document.getElementById("btn");

button.addEventListener("click", function() {
    let thrownDice = document.createElement("div");
    let showThrow = document.getElementById("show_throw");
    showThrow.innerHTML = "";

    /*
    Section to extract how many dice user has chosen to throw
    */ 
    const quantifyOfDice = document.getElementById("choose_dice").value;

    /*
    Below is the function that rolls the dice!
    */
    function rollDice(numberOfDice) {
        const dice = [];
        
        for (let count = 1; count <= numberOfDice; count++) {
            dice.push(Math.ceil(Math.random()*6));
        }

        return dice;
    }
    
    thrownDice.innerHTML = rollDice(quantifyOfDice);
    showThrow.appendChild(thrownDice); 
});