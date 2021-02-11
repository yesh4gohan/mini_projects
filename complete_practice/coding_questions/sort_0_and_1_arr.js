
const zeroOneSorter = input => {
    let left  = 0;
    let right = input.length-1;
    while(right>left){
        while(input[left] === 0 && right>left){
            left++;
        }
        while(input[right] === 1 && right>left){
            right--;
        }
        [input[left],input[right]] = [input[right],input[left]];
        left++;
        right--;
    }
    console.log(input)
}

zeroOneSorter([0,1,1,1,1,0])