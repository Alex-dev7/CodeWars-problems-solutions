// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// ex:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

function getMiddle(s){
    const arr = s.split("")
    let middle = arr.length / 2 - 1
    if(s.length % 2 === 0) {
        return `${arr[middle] + arr[middle + 1]}`
    } else {
        return arr[Math.floor(middle) + 1]
    }
    
}

console.log(getMiddle("testing"))