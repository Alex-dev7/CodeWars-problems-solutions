// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// 30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

function getDivisorsCnt(n){
    let divisorCount = 0

    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (i !== n / i) {
          divisorCount += 2
        } else {
          divisorCount++
        }
      }
    }
  
    return divisorCount
}

console.log(getDivisorsCnt(54))