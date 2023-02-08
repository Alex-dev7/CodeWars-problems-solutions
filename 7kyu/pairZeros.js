// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.




function pairZeros(arr) {
     // Initialize an empty array "result" to store the output of a new array with paired zeros
    const result = [];
     // Initialize a variable "count" to keep track of the number of zeros in the input array, in which if the count is equal to 1 we will push a 0 to the array and if the count is equal to two we will reset the count and start from beginning skipping over the second 0 
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        count++
        if (count === 1){
            result.push(0);
        } 
      }
       else {
        result.push(arr[i]);
      }
      if (count === 2) {
        count = 0
      } 
    }

    return result;
  }

 console.log(pairZeros([1,0,1,0,2,0,0,3,0]))
 