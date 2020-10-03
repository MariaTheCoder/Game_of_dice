
function probOfYatzy(array) {
    let probFirstDie = 1;
    let probNextDie = (6/(Math.pow(6, array.length)));

    if(array.length === 0) {
        alert("Please insert a positive whole number of dice")
        return "";
    }

    if(array.length === 1) {
        return probFirstDie + "00 % chance of Yatzy";
    }
    
    return (probNextDie * 100) + " % chance of Yatzy";
}