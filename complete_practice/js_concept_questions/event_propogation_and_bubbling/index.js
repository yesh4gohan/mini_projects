//true for propogation false or no 3rd param for bubbling
const topp = document.getElementById('top')
const mid = document.getElementById('mid')
const bottom = document.getElementById('bottom')

topp.addEventListener('click',()=>{
    console.log('top click')
},false)

mid.addEventListener('click',()=>{
    console.log('mid click')
},false)

bottom.addEventListener('click',()=>{
    console.log('bottom click')
},false)
