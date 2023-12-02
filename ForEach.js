//Exmapl  forEach method first ek call-back input leta hai means ek function lega? current value index or array leta hai means hame currnt VALIBLE KA NAAM? foreach first parameter hemsa number fir index leta hai ye new array nhi deta hai
        //Exmpale 1? 
        let array1 = ['item1', 'item2', 'item3'];
        array1.forEach(function (index, value, array1) {  //inbulit function name index bhi print hora
        console.log("index-" + index + "  value-" + value + "    array1-" + array1)
        });

        // Exmpale 2 ForEach function declaretion? 
        const numbersa = [1, 2, 3, 4];
        function myFun(number, index) {  
            // console.log(`index of ${index} number: ${number}`);
        }
        // numbersa.forEach(myFun);        

        //function eynunemusjin ka kuch naaam nhi hota hai ?
        numbersa.forEach(function (number, index, value) {  //2 se multiplaye hora sub element?
            console.log(number * 2, index, value)  //hamre marzhi index value print karwana
        })

        // Exmpale 3 ForEach? 
        const users = [   //ek array hai us me kuch object strore hore
            { firstName: "Tausif", age: 23 },
            { firstName: "Qureshi", age: 21 },
            { firstName: "Rehamn", age: 22 },
            { firstName: "Abdul", age: 20 },
        ]
        users.forEach(function (user,index) {   // ye parameters hai?
            console.log(user.age,index); //parameter yaha se print hora
        });

        // users.forEach((user, index)=>{  //two parametares ye or arrow function hai ye?
        //     console.log(user.firstName, index);
        // })

        // for(let user of users){ //loop use?
        //     console.log(user.firstName);
        // }
