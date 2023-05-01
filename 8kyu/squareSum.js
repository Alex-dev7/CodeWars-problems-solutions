// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 

function squareSum(numbers){
    let sum = 0
    numbers.forEach(n => sum += n ** 2 ) 
    return sum

}
console.log(squareSum([-19,2,4,0,-17,-5,13]))


// 864


