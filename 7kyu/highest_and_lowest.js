// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
 
    const numArray = numbers.split(" ").sort((a, b) => a-b)
    return `${numArray[numArray.length -1]} ${numArray[0]}`
  }


 console.log(highAndLow("1 2 3 4 5"));  // return "5 1"