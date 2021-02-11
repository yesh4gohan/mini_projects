function sameFrequency(num1,num2){
    // good luck. Add any arguments you deem necessary.
    console.log(num1.toString().length)
    console.log(num2.toString().length)

    if(num1.toString().length !== num2.toString().length){
        return false;
    }
    const strObj1=objCreator(num1.toString())
    const strObj2=objCreator(num2.toString())
      for(let key in strObj1){
          if(!strObj2[key] || strObj1[key] !== strObj2[key]){
              return false;
          }
      }    
      return true;
  }
  function objCreator(str){
      const obj = {};
      for(let ch of str){
          obj[ch]?obj[ch]++:obj[ch]=1;
      }
      return obj;
  }

  console.log(sameFrequency(34,14))