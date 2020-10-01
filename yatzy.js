module.exports = isYatzy;

const isYatzy = arr => arr.every(v => v === arr[0]);

// console.log(isYatzy([1, 1, 2, 1]));