const srtRev = str => {
    let arr = str.split('');
    let len = arr.length;
    let mid = Math.floor(arr.length/2);
    for(let i = 0;i<mid;i++){
        let temp = arr[i];
        arr[i] = arr[len-i];
        arr[len-i] = temp;
    }
    return arr.join('')
}

console.log(srtRev('abcdef'))