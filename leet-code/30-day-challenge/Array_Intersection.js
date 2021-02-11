var intersect = function (nums1, nums2) {
    const result = [];
    const myMap = new Map();
    for(let key of nums1){
        if(!myMap.has(key)){
            myMap.set(key,1)
        }
        else {
            myMap.set(key,myMap.get(key)+1)
        }
    }
    for(let key of nums2){
        if(myMap.has(key) && myMap.has(key)){
            result.push(key)
        }
    }
    return Array.from(new Set(result));
};

intersect(
    [4, 9, 5],
    [9, 4, 9, 8, 4]
)