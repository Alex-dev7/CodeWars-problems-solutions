
// function that takes in a positive number and return a shhep count string

var countSheep = function (num){
    //your code here
    let murmur = ""
    for( let n = 1; n <= num; n++){
      murmur += `${n} sheep ...`
    }
    return murmur
  }

  console.log(countSheep(100))