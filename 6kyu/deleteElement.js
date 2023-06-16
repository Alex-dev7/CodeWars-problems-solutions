// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr,n){
    // ...
    const result = [];
    const count = {};
  
    for (const num of arr) {
      if (count[num]) {
        if (count[num] < n) {
          result.push(num);
          count[num]++;
        }
      } else {
        result.push(num);
        count[num] = 1;
      }
    }
    return result
  }

  console.log(deleteNth([19,6,38,1,39,19,39,19,1,6,39,38,1,6,2,38,39,39,6,2,19,2,6,2,5,2,6,2,39,2,5,1,1,6,1,19,2,19,6,5,6,19,6,1,2,2,5,38], 1)) // [ 19, 6, 38, 1, 39, 2, 5 ]