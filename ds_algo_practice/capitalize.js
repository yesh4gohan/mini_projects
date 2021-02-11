
const capitalize = str => {
 const words = str.split(' ');
 words.forEach((element,index) => {
    element[0].toUpperCase()
    words[index] = element;
});   
return words.join(' ')
}
console.log(capitalize("i am jp"))