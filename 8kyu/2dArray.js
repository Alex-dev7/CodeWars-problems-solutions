var maximumWealth = function(accounts) {
    const wealth = [] 
    for(let n in accounts){
        let res = 0
        for(let i in accounts[n]){
            res = res + accounts[n][i]
        }
       wealth.push(res)
    }
    return wealth.reduce((a, b) => {
       if( a < b ){
        return b
       } else {
        return a
       }
    })

};



const accounts = [[2,8,7],[7,1,3],[1,9,5]]

console.log(maximumWealth(accounts))