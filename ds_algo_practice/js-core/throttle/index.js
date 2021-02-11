document.addEventListener('scroll',function(){
    trottle(myAPICall,1000);
})

function myAPICall(){
    // Count++;
    // console.log({normalCount:Count})
    console.log(trottleCount)
}
let trottleCount = 0;
let Count = 0;

let withinInterval;
function trottle(func,delay){
    //console.log(withinInterval)
    if(withinInterval){
        return;
    }
    withinInterval = setTimeout(()=>{
        func();
        trottleCount++
        //console.log({trottleCount:trottleCount})
    },delay)
}