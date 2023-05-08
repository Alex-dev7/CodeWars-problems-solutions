// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.


function disemvowel(str) {

    const newstr = str.split('');
    const vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < newstr.length; i++) {
        for (let j = 0; j < vowels.length; j++){
            if(vowels[j] === newstr[i] || vowels[j].toUpperCase() === newstr[i]) {
                newstr[i] = newstr[" "]   
            }
        }
    }
    return newstr.join('');
  }

  console.log(disemvowel("This website is for losers LOL!"))


// another option 
function disemVowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }