const strStr = (haystack,needle) => {
    if(needle === haystack) return 0;
    if(needle.length>haystack.length) return -1;
    let l1 = haystack.length;
    let l2 = needle.length;
    for(let i = 0;i<l1-l2;i++){
        let j;
        for(j = 0;j<l2;){
            if(haystack[i+j] !== needle[j]){
                break;
            }
            j++;
        }
        if(j === l2){
            return i;
        }
    }
    return -1;
}

console.log(strStr("hello","he"));

