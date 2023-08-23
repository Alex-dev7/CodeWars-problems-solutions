function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let total = 0;
    marks.forEach( i => {
        total += i
    })
    return  Math.floor( total  / marks.length)
  }

  console.log(getAverage([1,2,3,4,5,])) //3