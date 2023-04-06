// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// using for loop

function sum (numbers) {
    "use strict";
    let res = 0
    if(numbers.length){
        for(let n in numbers) {
            res += numbers[n]
            }         
        }
    return res
};
    


console.log(sum([]))


// using reduce
function sumTwo(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }


console.log(sumTwo([1, 5.2, 4, 0, -1]))

