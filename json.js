// console.log("tausif")
let store = `{
    "name":"tausif",
    "age": 24,
    "student": true,                                        
    "lang": ["javascript","html","css"],                
    "address":{
        "city" : "Mumbai",
        "pincode" : 226008
    }
    }`;
     const add = JSON.parse(store);   // string se objet me conveart ye hora hai json.parse se
     console.log(add);
    console.log('tausif')

    //JSON Ye data store karne me kam ata hai XML se fast hai JSON?Json string hai 
// let store = `{
//   "name" : "Tausif",
//     "age" : 24,
//     "student" : true,                                        
//     "lang" : ["javascript","html","css"],                    
//     "address":{
//         "city" : "Mumbai",
//         "pincode" : 226008
//     }
//   }`;
// let object= JSON.parse(store);    // string se objet me conveart ye hora hai json.parse se
// console.log(object["age"])
      