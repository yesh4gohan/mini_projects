const NumFind = str => {
    let count = 0;
    for(let ch of str){
        if(!isNaN(ch)){
            count++
        }
    }
    console.log(count);
}
NumFind("cbccbxbcx1")