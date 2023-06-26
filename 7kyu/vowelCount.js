// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u" ]
    let count = 0
    str.split("").forEach(l => {
        vowels.forEach(v => {
            l === v ? count += 1 : "" 
        })
    })
    return count

    //option 2
    // return (str.match(/[aeiou]/ig)||[]).length;
  }

  console.log(getCount("abracadabra"))