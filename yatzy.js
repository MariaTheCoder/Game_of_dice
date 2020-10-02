
const isYatzy = arr => {
    if(arr.length === 0) return;

    return arr.every(v => v === arr[0]);
} 

