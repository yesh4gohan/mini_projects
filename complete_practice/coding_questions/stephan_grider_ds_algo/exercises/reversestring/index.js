// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str1) {
    let str = str1.split('');
    for(let i = 0;i<=Math.floor((str.length-1)/2);i++){
        let temp = str[i];
        str[i] = str[str.length-1-i];
        str[str.length-1-i] = temp;
    }
    return str.join('');
}

module.exports = reverse;
