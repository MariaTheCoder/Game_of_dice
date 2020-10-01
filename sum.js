module.exports = sumOfDice;

function sumOfDice(array) {
    let sum = 0;
    
    array.forEach(element => {
        sum += element;
    });

    return console.log(sum);
}

// sumOfDice([1, 1, 1])
