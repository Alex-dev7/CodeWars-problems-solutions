// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.



function convertHashToArray(hash){
  //your code here - sort the keys!
  const sorted = []
 for( let key in hash){
   sorted.push([key, hash[key]])
 }

  return sorted.sort()
 
}

// or a shorter version of this function
// const convertHashToArray = o => Object.entries(o).sort();

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))
