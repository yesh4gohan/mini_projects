
document.addEventListener('DOMContentLoaded',()=>{
    document.getElementsByClassName('list-group') && 
    document.getElementsByClassName('list-group')[0]
    .addEventListener('click',(event)=> {
        if(event.target.classList.contains('list-group-item')){
            console.log(event.target.innerText)
        }
    })
})