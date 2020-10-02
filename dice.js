const button = document.getElementById("btn");
/*
    Below is the function that rolls the dice!
    */
function rollDice(numberOfDice) {
  const dice = [];

  for (let count = 1; count <= numberOfDice; count++) {
    dice.push(Math.ceil(Math.random() * 6));
  }

  return dice;
}

button.addEventListener("click", function () {

    /*
    Section to extract how many dice user has chosen to throw
    */
  const quantityOfDice = document.getElementById("choose_dice").value;


    // if(quantityOfDice.value.length == 0) {
    //     alert("message");
    //     return;
    // }

  let displayThrow = document.getElementById("show_throw");
  let thrownDice = document.createElement("div");
  displayThrow.innerHTML = "";

  let displaySum = document.getElementById("show_sum");
  let shownSum = document.createElement("div");
  displaySum.innerHTML = "";

  let displayProbOfYatzy = document.getElementById("show_probOfYatzy");
  let shownProbOfYatzy = document.createElement("div");
  displayProbOfYatzy.innerHTML = "";

  
  /*
    Let's define the roll as we want to use it multiple times 
    */

  const roll = rollDice(quantityOfDice);



  /*
    Below is the code to display the result of our roll in the Live Server
    */
  thrownDice.innerHTML = roll.join(", ");

  if(isYatzy(roll)) {
      thrownDice.innerHTML += " YATZY!!";
      thrownDice.classList.add("yatzy");
  }
  displayThrow.appendChild(thrownDice);

  shownSum.innerHTML = sumOfDice(roll);
  displaySum.appendChild(shownSum);

  shownProbOfYatzy.innerHTML = probOfYatzy(roll);
  displayProbOfYatzy.appendChild(shownProbOfYatzy);
});
