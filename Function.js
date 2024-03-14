//JS Function Declaretion?
//     function  twosum(){
//      console.log(2+4)

//     }
//  twosum()

//function retrun value?
// function twoSum(){
//     return 2+4;

// }
// let fun = twoSum()
// console.log(fun)

//white perameters retrun value function
// function sumAddThree(a,b,c){
//     return a+b+c;

// }
// console.log(sumAddThree(7,3,2))

//function Expresstion?
//white perameters function
// let sumAddThree = function(a,b,c){
//     return a+b+c;
// }
// console.log(sumAddThree(7,3,2))

//function retrun value?
// let twoSum = function(){
//     return 2+4;

// }
// let fun = twoSum()
// console.log(fun)

//Block And Function Scope
//Let and const block scope
//Var Function scope?
//  function myApp(){
//     if(true){
//     var firstName = 'Tausif';
//     // let firstName = 'Tausif';
//      console.log(firstName)
//     }
//     if(true){
//         console.log(firstName)
//     }
//     console.log(firstName)
//  }

//  myApp();

//function retuning function  or function bhut kuch return karta hai?
//  function myFun(){
//     // return [1,2,3];   //array  retrun
//     // return {name: 'tausif', age: 24};  //object retrun
//     function hello (){
//         console.log('I am returing the function ')
//     }
//     return hello;   //function return
//  }
//    const ans = myFun();
//    console.log(ans)
// ans();   //console nhi karne se ye use karne se i am returning pring hoga q ke ans ek function ban gaya hai ab ?

//function inside function defiend function ke ander function?
// function Main(){
//   const myFun =()=>{
//   console.log("hello From myFun");
//   }
//  const sum = (num1,num2)=>{
//     return num1+num2;
// }

//    const multi = (num3,num4)=>{
//     return num3**num4;
//    }

//    console.log("Hello I am main Function Calling Now");

// myFun();
// console.log(sum(5,5));
// console.log(multi(4,3));
//  }
// Main();

//default parameter function/
// function deflt(a, b = 1) {  //undefeind nhi aye ga default value is se bolte argumen me ham b ko kuch pass na kare tu?
//   return a + b;
// }
// const adding = (deflt(1,));
//  console.log(adding)

//function defien string ke kon  se index pe kya hai word?
// function firstchar(anystring) {
//   return anystring[2];
// }
// let retu = (firstchar('tausif'));
//  console.log(retu)

//Settimeout Function Example ?
//    console.log("First Execution");
//    setTimeout(
//        function fun(){
//            console.log("Code Waiting Asynchronous Execution")
//        },2000)
//        console.log("Last Execution");


//call apply bind  Method?
//Call Example Ye?
//function about(hobby,favourite){ //Aisa Bhi kar sakte hai
//console.log(this.name, this.perpartion, hobby,favourite)
// }

// let user1 ={
//       name: "Tausif",
//       age : 24,
//       perpartion : "Wab developer",
//      about:function(hobby,favourite){  //peramert pass
//         console.log(this.name, this.perpartion, hobby,favourite)  //peint hobby and favourite
// console.log(this.name)
//     }
// }

// let user2 ={
//     name: 'Qureshi',
//     age:24,
//     perpartion : "software engineering",

//     }

//console.log(user1.name)   //this se scop tak hi print hoga  or user1 se kahai bhi console kar sakte hai
//user1.about.call() //undefind aye ga interview question hai ye

//user1.about.call(user2,"Cricket","Food") // user1 bhi kart sakte haI jo bhi object se value hona //call ek function ko duser function ke property ko use karne ke liye work karta hai

//about.call(user2,"Cricket","Food"); // about ki value koi bhi object set kar sakte hai

//Apply Method Example ? ye bhi call ki tara hai ye bhi call ko hi used karta hai or ye list me leta hai argument means Array me leta hai ?
// function about(hobby,favourite){
//   console.log(this.name,this.age,hobby,favourite)}

// let user1 = {
//   name: "Tausif",
//   age : 24,
//   perpartion : "Software Industry"

// }
//   let user2 = {
//     name: "Qureshi",
//     age : 24,
//     perpartion : "Software Developer"
//   }
// about.apply(user2, ["Cricket", "Food"]);  //Array me liya apply argument inta hi difference hai call and apply me

//Bind Method Example ? Ye Ek Function Return Krat hai ?
// function about(hobby,favourite){
//   console.log(this.name,this.age,hobby,favourite)}

// let user1 = {
//   name: "Tausif",
//   age : 24,
//   perpartion : "Software Industry"

// }
//   let user2 = {
//     name: "Qureshi",
//     age : 24,
//     perpartion : "Software Developer"
//   }

// let fun = about.bind(user1,"Cricket", "Food");
// console.log(fun)   // pura function retrun hoga is tarike se?
//fun()   // Function Call Hora hai user1 and 2 kisi ke liye bhi kar sakte hai? Console kar ke bhi print kar sakta hai value ko

//Arrow Function This Keyword Nots Suppot Output get Undefind ? Arrow function ka this nhi hota hai arrow function jo this leta hai o serounding se leta hai means window se leta hai or arrow function ke this ko ham change nhi kar sakte hai?

let user1 = {
  name : "Tausif",
  age : 24,
  perpertion : "Software Engineering",

// about:function(){
//   console.log(this.name, this.perpertion) // but this anonymus function
// }

  about: ()=>{
    console.log(this)   //arrow function ka this window hota hai
//    console.log(this.name, this.perpertion)  //Arrow Function Me This Ki value Undefind Ati hai
  }
}
user1.about()

//Short Method  function banane ka tarika  ?
//  let useer1 = {
//   name: "Tausif",
//   age : 24,
//   perpartion : "Software Engineer",
//   about(){
//     console.log(this.name,this.perpartion)  //sort method ye function aise bhi valid hai ye
//   }
//  }
//  useer1.about()
