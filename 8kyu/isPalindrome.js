function isPalindrome(x) {
    // your code here
   let lettersArray = x.split("").reverse().join("").toUpperCase()

    if(lettersArray === x.toUpperCase() || x === "" ) {
      return true
    } else {
      return false
    }
  }

  console.log(isPalindrome("Abba"))

