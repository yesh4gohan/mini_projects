const add = (...args) => {

    const adder = (arr,index) => {
        if(!index){
            index = 0;
        }
        if(!arr[index]){
            return 0;   
        }   
        var sum = arr[index];
        index++;
        if(sum && !isNaN(sum)){
            sum += adder(arr,index);
        }
        else {
            sum = 0;
        }
        return sum;
    }
    return adder(args)
}

console.log(add(1,2,3,4,5));