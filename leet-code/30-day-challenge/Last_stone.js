var lastStoneWeight = function(stones) {
    sortStones = () => {
        stones.sort((a,b)=>(b-a));
        stones.push(stones[0]-stones[1])
        stones.splice(0,2);
    }
    while(stones.length>1){
        sortStones()
    }
    return stones.length?stones[0]:0
};

lastStoneWeight([2,7,4,1,8,1])