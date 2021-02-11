


const prom1 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("prom1 done")
            resolve('prom1')
        }, 2000);
        
    })
}
    
const prom2 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("prom2 done")
            resolve('prom2')
        }, 1000);
    })
}

const prom3 = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("prom3 done")
            resolve('prom3')
        }, 3000);
    })
}

const promArr = new Array(prom1,prom2,prom3)

const prooAsync = () => {
    Promise.all(promArr)
    .then((responses)=>{
        responses.map((response)=>response())
    })
}

 async function prooSync(){
    for(const func of promArr){
        await func()
    }
}
let arr = []

function prooSync1(){
    if(!promArr.length){
        console.log(arr)
        return arr;
    }
    promArr[0]()
    .then((res)=>{
        
        arr.push(res)
        promArr.shift();
        prooSync1()
    })
}

prooSync1()

// function count(n){
//     var res = []
//     for (var x = 0; x < n; x++) {
//       res.push(x)
//     }
//     return res
//   }
  
//   for (var x of count(5)) {
//     console.log(x)
//   }

