// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

const validAnagram = (str1,str2) => {
    if(str1.length !== str2.length) return false;
    const strObj1 = objectCreator(str1)
    const strObj2 = objectCreator(str2)
    for(let key in strObj1){
        if(!strObj2[key] || strObj1[key] !== strObj2[key]){
            return false;
        }
    }
    return true;
}

const objectCreator = str => {
    const strObj = {};
    for(let ch of str){
        strObj[ch]?strObj[ch]+=1:strObj[ch]=1;
    }
    return strObj;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom'))// false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext'))// true