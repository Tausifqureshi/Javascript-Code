// AJAX Ye serevr ko call karne ke liye use hota hai is ka fullform hai asynchoronus javascript and XML?
      //XMLHTTP Request = Ye old tarika hai is formet ko itna use nhi karte fetch and json ko karte hai server ko request karne ke liye
      //
    //   const URL ="https://jsonplaceholder.typicode.com/posts";
    //   const xhr = new XMLHttpRequest(); //promies return karta hai ye
    //   console.log(xhr);
    // xhr.open("GET",URL);    //two method leta hai ye 



    //Fetch API USE
    // const URL ="https://jsonplaceholder.typicode.com/posts";  // fetch ek promiees retun karta hai 

    //  fetch (URL)
    // .then(response=>{
    //     return (response.json())   //promies return hoga 
    // }) 
    // .then(data =>{
    //     console.log(data);   //data mile ga string me
    // })

 
// Fetch Asyn await using
// const URL ="https://jsonplaceholder.typicode.com/postss"; //yaha pe kuch bhi change posts ke sat error aye ga
//  async function getpost(){
    // const response = await fetch(URL);  // fetch call hora hai yaha se promies reuturn hora hai
    // if(!response.ok){ // respons is ka nhi sahi to error ara hai us se hi handler kar re hai
        // throw new Error("Someting Error");         //error handler hora yaha se run hoga catch wala code
    // }
//    const data = await response.json()    //promies retun karta hai ye json bhi data mile ga 
    // console.log(response); 
    // console.log(data)       //data mil ra hai is se
    // return data;   //data nhi promis return hora pura

//  }
//  getpost()
//  .then(myData=>{
//     console.log(myData)  //data mile ga is se
//  }).catch(error=>{
    // console.log("Error Handling Now This Appliction"); //Jab error ye ga tab catch wala code execute hoga
    // console.log(error)
//  })


// const returned = getpost()  // function call hora yaha se upper wala
// console.log(returned)

