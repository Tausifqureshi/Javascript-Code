//Map Method Example? ye bhi ek call back function leta hai ?Map function hemasa new array banta hai?agar ham retrun nhi karte hai console karte hai number* print hoga but ham kuch retrun nhi karate undefind ayega?

//Map Method Function Expresstion use?
const numbers = [3, 4, 6, 1, 8];
const square = function (number,index,value) {    //Sub Array ke har element ka Square kar ra hai ye function? ye function bher defiend hai
return `index: ${index},'number'${number * number},'value'${value}` ;       //return karna zaruri hai  Map me
} 
//console.log(number*number) }       // console use retrun nhi use tu defind aye ga line 57me?
// const squareNumber = numbers.map(square)
// console.log(squareNumber)
console.log( numbers.map(square))   // aise bhi print kar sakte 



//Map method example Eynunemus function use?
//  const numbers = [3, 4, 6, 1, 8];
//  const square2 = numbers.map(function(number){
//      return number*number;
//  })
//  console.log(square2)


//Map Method Function declretion Use?
// const numbers = [3, 4, 6, 1, 8];
// function myFun(number){
//     // console.log(number*number);
//        return number*number
// }
// numbers.map(myFun); //console se aisa bhi print karawa sakte hai 
//   const adding = numbers.map(myFun);
//   console.log(adding)



//Map Method Arrow Function use?
// const numbers = [3, 4, 6, 1, 8];
// const squareNumber = numbers.map((number, index) => { // ye function ander defiend hai arrow function hai ye same work kar ra hai upper wale ki tara
//     return `index: ${index},${number * number}`;
// });
// console.log(squareNumber);





//Example 2 Real life Use Map?
// const users = [
//   { firstName: "Tausif", age: 23 },
//   { firstName: "Qureshi ", age: 21 },
//   { firstName: "nitish", age: 22 },
//   { firstName: "garima", age: 20 },
// ];

// const userNames = users.map((user) => {   //ye users store hora username me q ke retrun value store hi hoti hai?
//   return user.firstName;
// });

// console.log(userNames);

