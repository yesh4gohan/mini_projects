let timerId = "";
document.addEventListener('input',function(e){
    let val = e.target.value
    //makeAPICall(val)
    deBounce(()=>{makeAPICall(val)},300);
})

function makeAPICall(val){
    // let count = (document.getElementById('show-api-call-count').innerHTML || 0)
    // count++;   
    // console.log(val)
    // document.getElementById('show-api-call-count').innerHTML = count+val;
    var oReq = new XMLHttpRequest();
    oReq.responseType = "json"
    oReq.open("GET", `https://demo.dataverse.org/api/search?q=${val}`);
    oReq.send();
    oReq.onreadystatechange = function(){
        if(oReq.readyState == XMLHttpRequest.DONE){
           let ull =  document.getElementById('hi')
            ull.innerHTML = ''
            oReq.response.data.items.map((each)=>{
                let list = document.createElement('li')
                list.innerHTML = each.name;
                ull.append(list)
            })
        }
    }
}
function deBounce(func,delay){
    if(timerId !== ""){
        clearInterval(timerId)
    }
    timerId = setTimeout(()=>{
        let debounceCount = (document.getElementById('debounce-count').innerHTML || 0)
        debounceCount++;
        document.getElementById('debounce-count').innerHTML = debounceCount;
        func()
    },delay)
}