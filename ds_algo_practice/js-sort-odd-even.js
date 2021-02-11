const Sorter = arr => {
    const sorted = arr.sort((a,b)=>(a>b));//sort array in asc order
    const even_arr = [];//make odd array
    const odd_arr = [];////make even array
    for(let i = 0;i<sorted.length;i++){
        if(sorted[i]%2){
            odd_arr.push(sorted[i]);//if odd push to odd array
        }
        else {
            even_arr.push(sorted[i])//push to even array
        }
    }
    console.log(even_arr.concat(odd_arr));//merge even and odd array

}

Sorter([2,23,5,44,11,6,72,105,99])