const sec_arr = ["Hi","bye","Go","Come"]

const secretCount = str => {
    let count = 0;
    for(let i = 0; i <= sec_arr.length;i++){        
        let index = str.indexOf(sec_arr[i]);
        if(index !== -1){
            index++;
            count++;
            while(index<str.length){
                let newIndex = str.indexOf(sec_arr[i],index);
                if(newIndex !== -1){
                    index = newIndex+1;
                    count++;
                }
                else {
                    break;
                }
            }
        }
    }
    return count;
}

console.log(secretCount("Hi be"))