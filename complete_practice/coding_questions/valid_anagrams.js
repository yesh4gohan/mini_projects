const validAnagram = (s1,s2) => {
    return s1.split('').sort().join('') === s2.split('').sort().join('')
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom'))// false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext'))// true