var strStr = function(haystack, needle) {
    if(needle === haystack) return 0;
    if(needle.length>haystack.length) return -1;
    if(!!needle){
        for(let i = 0;i<haystack.length-needle.length;i++){
            let j;
            for(j = 0;j<needle.length;j++){
                if(needle[j] !== haystack[i+j]){
                    break;
                }

            }
            if(j === needle.length){
                return i;
            }
        }  
        return -1;
    }
    return 0;
};

console.log(strStr("mississippi","pi"))