// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    // TODO: complete
    const a = []
    for(let i  = str.length - 1; i >= str.length - ending.length; i--){
        a.push(str[i])
    }
    return ending === a.reverse().join("")

    // option 2
    // return str.slice(0 - ending.length) === ending;

    // option 3 
    // return str.endsWith(ending);
  }

console.log(solution('samurai', 'ai'))