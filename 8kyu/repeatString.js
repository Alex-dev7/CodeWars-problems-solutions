function repeatStr (n, s) {
    let res = ''
    for(let i = 0; i < n; i += 1){
        res += s
    }
    return res
  }


console.log(repeatStr(5, "Hello"))