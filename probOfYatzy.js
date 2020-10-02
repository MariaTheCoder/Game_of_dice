
function probOfYatzy(array) {
    let probFirstDie = 1;
    let probNextDie = (6/(Math.pow(6, array.length))).toFixed(9);

    if(array.length < 2) {
        return probFirstDie + "00 % chance of Yatzy";
    }
    
    return probNextDie + " % chance of Yatzy";
}