// Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
    return x.split(" ").join('')
    // or
    // return x.replace(/\s/g, '');
}

console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))