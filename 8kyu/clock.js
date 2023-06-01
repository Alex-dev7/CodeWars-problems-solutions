// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    //#Happy Coding! ^_^

    return (((h * 60) + m) * 60 + s) * 1000
  }

  console.log(past(0,1,1))


// h = 0
// m = 1
// s = 1