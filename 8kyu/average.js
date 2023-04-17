function findAverage(array) {
    // your code here
    let sum = 0
    if(array.length){ 
        array.forEach( n => sum += n)
        return sum / array.length
    } 
    return 0    
  }

 console.log(findAverage([1,2,3,4,5,6,7,8,9,10]))