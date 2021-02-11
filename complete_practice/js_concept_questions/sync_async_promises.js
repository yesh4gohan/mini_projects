const prom1 = Promise.resolve('hello')
const prom2 = Promise.resolve('hi')
const prom3 = Promise.resolve('err')

const handlePromAsync = async prom_arr => {
    for(let prom of prom_arr){
        const data = await prom();
        console.log({data})
    }
}

handlePromAsync([prom1,prom2,prom3])