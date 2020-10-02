
function sumOfDice(array) {
    let sum = 0;
    
    if(array.length === 0) return "";

    array.forEach(element => {
        sum += element;
    });

    return sum;
}

