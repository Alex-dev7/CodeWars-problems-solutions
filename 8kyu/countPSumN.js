// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.


function countPositivesSumNegatives(input) {
  // your code here
  const results = [0, 0]

  if(input === null || input.length === 0){
    return []
  } else {
     for(let n of input){
        if(n > 0){
          results[0] = results[0] + 1
        } else if(n < 0){
            results[1] = results[1] + n 
        } 
      }
  }
  return results
  }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] //should return [10, -65]

console.log(countPositivesSumNegatives(arr))

