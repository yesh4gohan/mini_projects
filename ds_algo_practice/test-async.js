const fun = () => {    
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(100);
        }, 2000);
    });
}

console.log(fun().then((data)=>console.log(data)));