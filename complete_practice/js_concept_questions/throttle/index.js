const normal_div = document.getElementById('normal_count');
const throttle_div = document.getElementById('throttle_count');
const searchBar = document.getElementById('search');
let normal_count = 0;
let throttle_count = 0;
const mockAPICall = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(console.log("api call done"));
        }, 500);
    })
}

const throttle = (cb,delay) => {
    let flag = true;
    return function(){
        const context = this,args = arguments;
        if(flag){
            throttle_count++;
            throttle_div.innerHTML = throttle_count;
            cb.apply(context,args);
            flag = false;
        }
        setTimeout(() => {
            flag = true;
        }, delay);
    }
}

const throttler = throttle(mockAPICall,3000);
searchBar.addEventListener('click',e=>{
    normal_count++;
    normal_div.innerHTML = normal_count;
    throttler();
})

