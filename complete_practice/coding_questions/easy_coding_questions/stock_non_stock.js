const data = [
    {id:1,stock:"OOS"},
    {id:2,stock:"In stock"},
    {id:3,stock:"OOS"},
    {id:4,stock:"In stock"},
    {id:5,stock:"OOS"},
    {id:6,stock:"In stock"},
    {id:7,stock:"In stock"},
    {id:8,stock:"OOS"}
];

let left = 0;
let right = data.length-1;
while(left < right){
    while(data[left].stock === "In stock" && left < right){
        left++;
    } 
    while(data[right].stock === "OOS" && left < right){
        right--;
    } 
    [data[left],data[right]] = [data[right],data[left]];
    left++;
    right--;
}

console.log(data)