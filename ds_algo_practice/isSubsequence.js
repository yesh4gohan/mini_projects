// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

    // isSubsequence('hello', 'hello world'); // true
    // isSubsequence('sing', 'sting'); // true
    // isSubsequence('abc', 'abracadabra'); // true
    // isSubsequence('abc', 'acb'); // false (order matters)

    const isSubsequence = (sub,sup) => {
        // let i = 0;
        // let j = 0;
        // while(j<sup.length){
        //     if(sub[i] === sup[j]) i++;
        //     if(i === sub.length) return true;
        //     j++;
        // }
        // return false;
        let i = 0;
        let j = 0;
        while(i<sup.length){
            if(sup[i] === sub[j]) j++;
            if(j === sub.length) return true;
            i++;
        }
        return false;
    }

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))



