//get JSON String 
//Check if it is string
//else check if it is Array 
//else check if it is Obj

// const JSONParser = (JSONstr) => {
//     if(typeof JSONstr === "string"){
//         return JSONstr
//     }
//     else if(typeof JSONstr === "boolean"){
//         return JSONstr
//     }
//     else if(typeof JSONstr === 'number'){
//         return JSONstr
//     }
//     else if(Array.isArray(JSONstr)){
//         return JSONstr.map((each)=>{
//             return JSONParser(each)
//         })
//     }
//     else if(typeof JSONstr === 'object' && JSONstr instanceof Date){
//         console.log("called")
//         return new Date(JSONstr)
//     }
//     else if(typeof JSONstr === 'object' && JSONstr !== null && Object.keys(JSONstr).length>0){
//         return Object.keys(JSONstr).reduce((Obj,each)=>{
//             Obj[each] = JSONParser(JSONstr[each])
//             return Obj;
//         },{})
//     }
// }

const JSONParser = jsonObj  => {
    if(typeof jsonObj === "string"){
        return jsonObj;
    }
    if(typeof jsonObj === "boolean"){
        return jsonObj;
    }
    if(typeof jsonObj === "number"){
        return jsonObj;
    }
    if(Array.isArray(jsonObj) && jsonObj.length){
        return jsonObj.map((each)=>{
            return JSONParser(each);
        })
    }
    if(typeof jsonObj === "object" && jsonObj !== null && Object.keys(jsonObj).length){
        return Object.keys(jsonObj).reduce((acc,curr)=>{
            acc[curr] = JSONParser(jsonObj[curr]);
            return acc;
        },{})
    }
}

console.log(JSONParser(
    {
        "shipment_id": "k1q8txrk",
        "customer_key": "c_jznwtbl7",
        "receive_call_from_chc": false,
        "response_textQuestion": "",
        "showReceiveCall": false,
        "myDate":"Thu Jan 23 2020 11:22:58 GMT+0530",
        "response_data": [
            {
                "class": "delivery",
                "feedback_id": "5da41bd74dc9823c1a39ae0b",
                "response_rateRange": 5,
                "attributes": [
                    {
                        "option_id": "5da41bd74dc9823c1a39adf2",
                        "value": false
                    },
                    {
                        "option_id": "5da41bd74dc9823c1a39adf1",
                        "value": false
                    },
                    {
                        "option_id": "5da41bd74dc9823c1a39adf0",
                        "value": false
                    },
                    {
                        "option_id": "5da41bd74dc9823c1a39adef",
                        "value": false
                    }
                ]
            },
            {
                "class": "products",
                "feedback_id": "5da41bd74dc9823c1a39ae0c",
                "product_data": [
                    {
                        "product_id": "pr_572358fc1c7c3",
                        "response_rateRange": 5,
                        "attributes": [
                            {
                                "option_id": "5da41bae4dc9823c1a39a524",
                                "value": false
                            },
                            {
                                "option_id": "5da41bae4dc9823c1a39a523",
                                "value": false
                            },
                            {
                                "option_id": "5da41bae4dc9823c1a39a522",
                                "value": false
                            },
                            {
                                "option_id": "5da41bae4dc9823c1a39a521",
                                "value": false
                            }
                        ]
                    }
                ]
            }
        ]
    }
))