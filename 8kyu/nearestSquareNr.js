// Your task is to find the nearest square number, nearest_sq(n) or nearestSq(n), of a positive integer n.

// For example, if n = 111, then nearest\_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

// If the n is already the perfect square (e.g. n = 144, n = 81, etc.), you need to just return n.



function nearestSq(n){
    // your code
    // you take the square root of the integer, round it to the nearest number, and then square that. That should give you the closest square number.
  let nextNearestNr = Math.round(Math.sqrt(n)) ** 2

  console.log(nextNearestNr)
}

nearestSq(111) // output 121

