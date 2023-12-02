//promies Example?
// const pro = new Promise((resolve, reject) => {
// let x = 12;
//if(x==14){
// resolve("ok")
//}else{
//reject('error')
//}
// }).then(
//(value =>{console.log(value)}),  //yaha se value wala chale ga
//(error=>{console.log(error)})  //yaha se error wala chale ga
// )


//Normal promies Example 2?
// const pro = new Promise((resolve, reject) => {
//     let t = "45";
//     let n = 45;
//     if( t===n ){
//         resolve("Value Equal Two Same")
//     }else{
//         reject("Please Enter Your Same Value And Error");
//     }
// })
// .then(
//       (value =>{console.log(value);}), //arrow function
//       (error =>{console.log(error);}),
// )

//Function Return Promies ?
// console.log("Start")
// function getName(name){
//     return new Promise((resolve, _reject) => {
//         setTimeout( ()=>{
//             console.log("Inside Call Functio");
//             resolve(name)
//         },2000);
//     })
// }
// function getHobbies(){
//     return new Promise((resolve, _reject) => {
//         setTimeout(() => {
//             console.log("Inside Hobbies settimeout");
//             resolve(['circket', 'football', 'music'])
//         },1000)
//     })
// }
// // getName('tausif')
// // .then(nm => getHobbies (nm))
// // .then(hobby => getHobbies (hobby))

// //same async await use .then ki jaga
// async function showhobby(){
//    const name = await getName("Tausif");
//    const hobby = await getHobbies(name);
//    console.log(hobby);
// }
// showhobby();

// Promies Error Handling catch ?
// const handling = new Promise((resolve, reject) => {
//     let b = "45";
//     let c = 45;
//     if( b === c ){
//         reject("Yes Value And Types Same");
//     }else{
//         reject("Please Errorr Involing Your Code");
//     }
// }).then(
//     (value => {console.log(value)}),
//     // (error => {console.log(error)})
// )
// .catch(
//     (error => {console.log(error)})
// )

//Promies Chaining ?
const chaining = new Promise((resolve, reject) => {
     let b = 20;
     resolve(b)

}).then(
    (value => {console.log(value);
        return value +10;

    })

).then(
    (value => {console.log(value)})
)
