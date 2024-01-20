// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade(s1, s2, s3) {
    const s = (s1 + s2 + s3) / 3
    if(s >= 90 && s <= 100 ){
      return "A"
    } else if (s >= 80 && s <= 90 ){
      return "B"
    } else if(s >= 70 && s <= 80 ) {
      return "C"
    } else if(s >= 60 && s <= 70 ){
      return "D"
    } else if (s >= 0 && s <= 60 ) {
      return "F"
    } 
}