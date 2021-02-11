
const pyramid = n => {
    let str = ""
    let mid = Math.floor(((2*n)-1)/2);
    for(let i = 0; i < n; i++){
        for(let j = 0; j < ((2 * n) - 1); j++){
            if(j<mid-i || j> mid+i){
                str += "   "
            }
            else {
                str += "#  "
            }
        }
        str += "\n"
    }
    return str;
}

console.log(pyramid(3))



