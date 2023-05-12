// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.


function century(year) {
    // Finish this :)
    if (year < 100) return 1
    return year % 100 > 0 ? parseInt((year / 100)) + 1  : year / 100

    //   The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number.
    // V2
    // return Math.ceil(year/ 100) 
  }


  console.log(century(8470900))


