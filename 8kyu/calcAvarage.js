// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!


function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let res = 0
    classPoints.forEach(points => res += points)
    return res / classPoints.length < yourPoints 
  }


  console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 45))