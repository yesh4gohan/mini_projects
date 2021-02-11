const countPrimes = n => {
    let count = 0;
    let arr = new Array(n);
    for(let i = 2;i<n;i++){
        if(!arr[i]){
            for(let j = i;i*j<n;j++){
                arr[i*j] = true;
            }
        }
    }
    for(let i=2;i<n;i++){
        if(!arr[i]){
            count++;
        }
    }
    console.log(count);
}

countPrimes(10);