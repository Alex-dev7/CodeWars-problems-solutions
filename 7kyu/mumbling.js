// This time no story, no theory. The examples below show you how to write function accum:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	// your code
    const arr = []
    s.split("").forEach( (el, i) => {
        const joinArr = []
        for( let n = 0; n <= i; n++){
            n === 0 ? joinArr.push(el.toUpperCase()) : joinArr.push(el.toLowerCase())  
        }
        arr.push([...joinArr].join(""))
    })
    return arr.join("-")
}

console.log(accum("abcd"))