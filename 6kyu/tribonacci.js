function tribonacci(signature,n){
  //your code here
    const arr = [...signature]
    const newArr = []
    if(n == 0 )return []

    for(let i = arr.length - 3; i < n ; i++){
      
      let next = arr[i] + arr[i + 1] + arr[i + 2]
      
      if(n < 4) newArr.push(signature[i])

      if(next === 0){
        arr.push(0)
      } else {
        arr.push(next)
      }
      
      if(arr[i] <= arr[i + 1] <= arr[i + 2] || next === 0){
        if(arr.length === n ) return arr
      } 
    }
  return newArr
}

  console.log(tribonacci([ 1,1,1], 10)) // output [1,1,1,3,5,9,17,31,57,105]
