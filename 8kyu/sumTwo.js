var twoSum = function(nums, target) {
    const sum = []
    for (i = 0; i < nums.length; i += 1){
        const firstIndex = i;
        for(j = 0 ; j < nums.length; j += 1){
            if(nums[firstIndex] + nums[j] === target && j !== firstIndex){
                sum.push(firstIndex, j)
                return sum
            }
        }
        console.log(i)
    }
   
}


// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

console.log(twoSum([3,2,4], 6))