// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    const bmI = weight / height ** 2
    if(bmI <= 18.5) return "Underweight"
    if(bmI <= 25.0) return "Normal"
    if(bmI <= 30.0) return "Overweight"
    if(bmI > 30) return "Obese"
  }

  console.log(bmi(80, 1.80))