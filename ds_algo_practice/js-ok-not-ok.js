const OK_NOT_OK = str => {
    if(!str){
        return "NOT OK";//null check for string
    }
    let flag = false;
        for(let ch of str){
            if(!((ch.charCodeAt(0) >= "097" && ch.charCodeAt(0) <= "122") || (ch.charCodeAt(0) >= "065" && ch.charCodeAt(0) <= "090"))){
                return "NOT OK"
            }
        }
    return "OK"
}

console.log(OK_NOT_OK("dfsjdbjs"))