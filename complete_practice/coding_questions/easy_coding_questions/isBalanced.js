const isBalanced = str => {
    const bracketMap = {
        '{':'}',
        '[':']',
        '(':')'
    }
    let open_bracket_str = "{(["
    let closed_bracket_str = "})]"
    let arr = []
    for(let ch of str){
        if(open_bracket_str.split('').includes(ch)){
            arr.push(ch)
        }
        else if(closed_bracket_str.split('').includes(ch)){
            let ele = arr.pop()
            if(ch !== bracketMap[ele]){
                return false;
            }
        }
    }
    if(!arr.length){
        return true;
    }
    return false;
}

console.log(isBalanced("}foo{"))