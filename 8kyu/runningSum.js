

var runningSum = function(nums) {
    const sum = []
    for(let n in nums){
        sum[sum.length - 1] ? sum.push(sum[sum.length - 1] + nums[n]) : sum.push(nums[n]) 
    }
    return sum

};

// console.log(runningSum([34,-13,12,-59,27,-63,1,94,84,54,9,57,53,11,85,-17,-78,-85,-84,5,43,-44,-48,-38]))

