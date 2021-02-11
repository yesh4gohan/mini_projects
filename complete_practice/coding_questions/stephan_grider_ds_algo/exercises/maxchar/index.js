// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let obj = {};
    for(let ch of str){
        if(obj[ch]){
            obj[ch]++
        }
        else {
            obj[ch]=1;
        }
    }
    let max = Number.MIN_SAFE_INTEGER;
    for(let val in obj){
        if(obj[val]>max){
            max = val;
        }
    }
    return max
}

module.exports = maxChar;
