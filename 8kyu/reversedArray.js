// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
    //code here 
    const reverse = n.toString().split("").reverse();
    const reversedArray = []
  for(let i = reverse.length - 1; i >= 0; i--) {
     reversedArray.push(parseInt(reverse[i]))
  }
    return reversedArray

    // v2
    // return String(n).split('').map(Number).reverse()
  }


  console.log(digitize(5435521))