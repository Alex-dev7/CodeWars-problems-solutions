// This series of katas will introduce you to basics of doing geometry with computers.

// Point objects have attributes x and y.

// Write a function calculating distance between Point a and Point b.

// Tests compare expected result and actual answer with tolerance of 1e-6.


function distanceBetweenPoints(a, b) {
    //The distance between two points can be calculated using the Pythagorean theorem. d = √((b.x - a.x)^2 + (b.y - a.y)^2)
     const dx = b.x - a.x
     const dy = b.y - a.y
     return Math.sqrt(dx * dx + dy * dy)
   }

 