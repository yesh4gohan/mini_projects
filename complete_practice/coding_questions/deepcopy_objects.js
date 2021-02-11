deepCopy = function(destination, source) {
    for (var property in source) {
      if (typeof source[property] === "object" && source[property] !== null) 
       {
         destination[property] = destination[property] || {};
         deepCopy(destination[property], source[property]);
       } else {
         destination[property] = source[property];
       }
    }
    return destination;
   };

console.log(deepCopy({},
    { 
        "shipment_id": "k1um6vtd",
        "receive_call_from_chc": false,
        "response_textQuestion": "something",
        "showReceiveCall": true,
        "response_data": [
          {
            "class": "delivery",
            "feedback_id": "5da41bd74dc9823c1a39ae0b",
            "response_rateRange": 5,
            "attributes": [
              {
                "option_id": "5da830a51445425a83941ee4",
                "value": true
              },
              {
                "option_id": "5da830a51445425a83941ee3",
                "value": true
              },
              {
                "option_id": "5da830a51445425a83941ee2",
                "value": false
              },
              {
                "option_id": "5da830a51445425a83941ee1",
                "value": false
              }
            ]
          },
          {
            "class": "products",
            "feedback_id": "5da41bd74dc9823c1a39ae0c",
            "product_data": [
              {
                "product_id": "pr_590f2bc508b4a",
                "response_rateRange": 1,
                "attributes": [
                  {
                    "option_id": "5da70804f97aa40a5403e935",
                    "value": false
                  },
                  {
                    "option_id": "5da70804f97aa40a5403e934",
                    "value": true
                  },
                  {
                    "option_id": "5da70804f97aa40a5403e933",
                    "value": false
                  }
                ]
              }
            ]
          }
        ]
      }
))


const deepCopy = (des,src)=>{
  for(let val in src){
    if(typeof src[val] === "object" && src[val] !== null){
      des[val] = des[val] || {};
      return deepCopy(des[val],src[val])
    }
  }
  return des
}

