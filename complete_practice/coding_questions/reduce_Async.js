const reduceAsyc = (prom_arr) => {
    return new Promise(async (res,reject)=>{
        const data = await prom_arr.reduce(async (acc,each)=>{
            console.log({acc})
            const data = await each();
            acc.push(data);
            return acc;
        },[])
        res(data);
    })
}
let a = () => Promise.resolve('a')
let b = () => Promise.resolve('b')
let c = () => Promise.resolve('c')
reduceAsyc([a,b,c])
.then((data)=>{
    console.log({data})
})

// arr.reduce((acc,each)=>(acc+each),[])