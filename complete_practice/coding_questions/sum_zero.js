//Creating pointers or values that correspond to an index or position and move towards the beginning,
//end or middle based on a certain condition.

//Very efficient for solving problems with minimal Space as well.

const sumZero = arr => {
    let len = arr.length-1
    for(let i = 0,j=len;i<j;){
        let sum = arr[i]+arr[j];
        if(sum === 0){
            return [arr[i],arr[j]]
        }
        else if(sum>0){
            j--;
        }
        else {
            i++;
        }
    }
    return null
}

console.log(sumZero([-2, 0, 1, 3]));