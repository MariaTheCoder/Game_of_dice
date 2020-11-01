const button = document.getElementById("btn");
/*
    Below is the function that rolls the dice!
    */

// /**
//  * rollDice function to roll six-sided dice
//  * @param {number} numberOfDice sdfasdfasdfasdfasdfasdf
//  * @returns {array} 
//  */
function rollDice(numberOfDice) {
  const dice = [];

  for (let count = 1; count <= numberOfDice; count++) {
    dice.push(Math.ceil(Math.random() * 6));
  }

  return dice;
}
function playSound() {
  let sound = new Audio('./audio_file/diceRoll.mp3'); 
  sound.play();
}


button.addEventListener("click", function () {

    /*
    Section to extract how many dice user has chosen to throw
    */
  const quantityOfDice = document.getElementById("choose_dice").value;


    if(quantityOfDice > 0) {
        playSound();
    }

  let displayThrow = document.getElementById("show_throw");
  let thrownDice = document.createElement("div");
  displayThrow.innerHTML = "";

  let displaySum = document.getElementById("show_sum");
  let shownSum = document.createElement("div");
  displaySum.innerHTML = "";

  let displayProbOfYahtzee = document.getElementById("show_probOfYatzy");
  let shownProbOfYahtzee = document.createElement("div");
  displayProbOfYahtzee.innerHTML = "";

  
  /*
    Let's define the roll as we want to use it multiple times 
    */

  const roll = rollDice(quantityOfDice);



  /*
    Below is the code to display the result of our roll in the Live Server
    */
  thrownDice.innerHTML = roll.join(", ");

  if(isYahtzee(roll)) {
      thrownDice.innerHTML += " YAHTZEE!!";
      thrownDice.classList.add("yahtzee");
  }
  displayThrow.appendChild(thrownDice);

  shownSum.innerHTML = sumOfDice(roll);
  displaySum.appendChild(shownSum);

  shownProbOfYahtzee.innerHTML = probOfYahtzee(roll);
  displayProbOfYahtzee.appendChild(shownProbOfYahtzee);
});
