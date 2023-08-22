function tribonacci(signature,n){
    //your code here
    const arr = [...signature]
    if(n == 0 )return []
  
    for(let i = arr.length - 3; i <= n ; i++){
      if(arr[i])arr.push(arr[i] + arr[i + 1] + arr[i + 2])
      if(arr.length === n ) return arr
    }
 
  }

  console.log(tribonacci([1,1,1], 10)) // output [1,1,1,3,5,9,17,31,57,105]
