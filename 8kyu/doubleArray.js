// Given an array of integers, return a new array with each value doubled.

function maps(x){
    return x.map(n => n * 2);
}

console.log(maps([1, 2, 3]))  // [1, 2, 3] --> [2, 4, 6]