
const steps = n => {
    let str = ""
    for(let i = 0;i<n;i++){
        for(j = 0;j<n;j++){
            if(j<=i){
                str += "#  "
            }
            else {
                str += "   "
            }
        }
        str += "\n";
    }
    return str
}

console.log(steps(4))