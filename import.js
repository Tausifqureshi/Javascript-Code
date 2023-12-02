// lexical scope ? value 59 commaint hai agar ham myfun2 ke function me myvar print karwaye ge to value one print hoga q ke javascript fisrt apne function me dhake ga us me value mile gi to print kare ga warna js apne lexical scope means globle scope me se value peint kare ga Example Myvar globle scope me hai?
// const myVar = "value1";    //ye ek variable hai
// function myApp(){

//     function myFunc(){
//         // const myVar = "value59"; //variabl hai ek ye
//         const myFunc2 = () =>{
//             console.log("inside myFunc", myVar);
//         }
//         myFunc2();
//     }

//     console.log(myVar);
//     myFunc();
// }

// myApp();


//Dom Start ?
// console.log(window.document);
// console.log(window) //ais abhi check kar sakte hai
// console.dir(window.document) //js object me checking now

//getElementById use
// const element = document.getElementById("one");//.innerhtml="Come"
// console.log(typeof telement.outerHTML); //innerhtml and inner text and outerhtml and outertext Cheking

//querySelector use
// const quer = document.querySelector("#one");//.innerHTMLH="Hello "
// console.log(typeof quer); //outerhtml and innerhtml checking

//chang textcontent property
// let chg =  document.getElementById("one");
// chg.textContent = 'Mange Youre Taks';
// console.log(chg)

//chang element style in javascript?
// let select = document.getElementById("one");
// console.log(select);
// select.style.color = 'green';
// select.style.backgroundColor = 'orange';
// console.log(select);

//let div = document.querySelector("div.car #one"); //aisa bhi select kar sakte hai
// console.log(divv);

//getter and setter attribute ?
// const link = document.querySelector("#li");
// //console.log(link.getAttribute("href"))
// link.setAttribute("href","https://www.amazon.in"); // set property
// console.log(link.getAttribute("href"))

// let li = document.querySelector("a")
// console.log(li.getAttribute("href").slice(0)); //slice karne se #ye nhi aye ga

//multiple element using by getelement class name?
// const nav = document.getElementsByClassName('nave');
// console.log(nav[1]); //HTML Collection return arrayb like object means is pe ham indexing kar skate hai array ke sahre method nhi hoge is me is pe ham for loop and for of loop using

// const nav = document.querySelectorAll('.nave');
// console.log(nav[1]); //node lis return kare ga ye indexing kar sakte hai ye bhi array like obkject hai

//innerHtml?
// const ul = document.querySelector(".upper");
// console.log(ul.innerHTML);
// ul.innerHTML += '<li>Card</li>';
// ul.innerHTML += '<li>Contect</li>'//is se first wala bhi rehta hai or dusri bhi property ati hai
// console.log(ul);

// Dom trevars?
// let rootnode =  document.getRootNode();
// console.log(rootnode.childNodes[1]) //html and doc ko return kare ga ye indexing kar sakte array like object

//HTML Ke child checking method ?
// let rootnode =  document.getRootNode();
// console.log(rootnode.childNodes[1]); //HTML Return indexing se

//let html = rootnode.childNodes[1]//First HTML return hoga nodelist return array like object indexing kar sakte hai
// console.log(html.childNodes)//HTML Child Retrun Nodelist aye gi array like object indexing bhi jo chil chahiye[0] kar sakte

//HTML KE Child Head Tak Puchne ka Traika ?
// let rootnode =  document.getRootNode();
// let html = rootnode.childNodes[1];
// // console.log(html.childNodes);
// let headNode = html.childNodes[0];
// let text = html . childNodes[1];
// // let body = html . childNodes[2];
// console.log(headNode)
// console.log(headNode.parentNode) //parent and child cheking method
// console.log(headNode.childNodes); //NodeList return indexing bhi kar sakte hai

//Sibling Relation?
// let rootnode =  document.getRootNode();
// let html = rootnode.childNodes[1];
// console.log(html.childNodes);
// console.log(headNode.nextSibling)
// console.log(headNode.nextElementSibling) //text nhi aya ga is se

//Child Se Parent Tak Puchna And After Styling Apply?
// let h = document.querySelector("h1");
// console.log(h.parentElement);
// let div = h.parentElement;
// div.style.backgroundColor = 'gray';
// div.style.color = 'blak';

// let body = document.body; //Change Body Styling
// body.style.backgroundColor = 'gray';
// body.style.color = 'blak';

//Head Ke Ander Bhi QurerySelector using?
// let header = document.querySelector("head");
// console.log(header);
// let title = document.querySelector("title")
// console.log(title);

//Childern  Property se only Elemnet Aye ge?
// let conta = document.querySelector(".car");
// console.log(conta.children);

// classList ,add and remove, ?
// const adding = document.querySelector(".text");
//console.log(adding.classList);
//  adding.classList.add("bg-dark")
//  adding .classList.remove("text");
//  console.log(adding.classList);
// adding.classList.toggle("bg-dark") //class hai to remove warna add

//Add HTML element using JavaScript?
// let ul = document.querySelector(".upper");
// // console.log(ul);
// ul . innerHTML += '<li>Contect</li>';
// ul . innerHTML += '<li>Card</li>';
// console.log(ul.innerHTML)

//is tarike se hi sub developer add karte hai javascript adding Element ?
//append,  last me add karta hai
//prepend, start me add karta hai
//remove, delete karne ke liye kam ata hai ye
//before, jaha se ul start hora us ke upper add hoga ye
//after jaha pe ul complete hora hai waha pe add hoga ye

// let ul = document.querySelector(".upper");
// console.log(ul)
// let ul2 = document.createElement("li");
// ul2.textContent = 'Contect';
// ul.append(ul2);
// let ul3= document.createTextNode = 'contect';  // aisa bhi add kar sakte hai
// document.querySelector(".upper").append(ul3)
// console.log(ul)
// const boom = document.querySelector("body")
// console.log(boom)

// insertAdjacentHTML ye bhi add karne ko kam ata hai js se element ko?

//beforebegin jaha pe ul start hora waha pe add kare ga ye
//afterbegin ul ke ander start me add hoga ye
//beforeend  ul ka last me add  hoga ye
//afterend   ul jaha complete hota hai us ke bher add kare ga ye
// let ul = document.querySelector(".upper")
// ul.insertAdjacentHTML('afterend','<li>Crad</li>');
// console.log(ul);
// const boom = document.querySelector("body")
// console.log(boom)

// element checking type vale and nodename return?
//    let ele = document.querySelector(".text");
//    console.log(ele.nodeName);
//    console.log(ele.nodeValue);
//    console.log(ele.nodeType);

//clone node is js means copy karna ?
// const ul = document.querySelector(".upper");
// console.log(ul)
// const li2 = document.createElement("li")
// li2.textContent = 'Crad';
// const li3 = li2.cloneNode(true);
// const li4 = li3.cloneNode(true)
// ul.append(li2)
// ul.prepend(li3);
// ul.before(li4)
//Some Old method to  support internet Expoler js se element add karne ka traika ye bhisame hi hai
//appendChild, insertBefore, replaceChild, removeChild

//static list vs live list?
// const ul = document.querySelectorAll(".upper li");
// // console.log(ul);
// const add = document.createElement("li");
// add.textContent = "contect";

// const ul2 = document.querySelector(".upper");
// ul2.append(add)
// console.log(ul) //3 ki hi ye nodelist aye gi i se static list bolte hai getelemnetbyid use queryselector ki jaga to live list aye gi

// How to get the dimensions of an element means koi element ki heigth width hona ke liye use ?
// const t = document.querySelector(".text");
// // console.log(t)
// const info = t.getBoundingClientRect();
// console.log(info)

//JS Event ?
// const btn = document.querySelector("button")
// console.log(btn)

// btn.onclick = function(){
//     console.log("Call Me Now")
// }

// addEventListener add Event?
// const but = document.querySelector(".btn");

//  but.addEventListener('click', function(){
// console.log('Call Aboute Tomorrow')
//  })

//Arrow Function?
//  but.addEventListener('click', ()=> console.log('Call Aboute Tomorrow')
//  )

//Create bobject ke ander multiple function ek function me or function banana ?
// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing: function(){
//         return 'toon na na na la la ';
//     }
// }
// function createUser(firstName, lastName, email, age, address){
// const user = Object.create(userMethods);// {} empty object create ye kitne bhi function banye ge is lihe se call hoga chaing bhi create kar ri hai ye line --proto-- property ki value set kar ri hai upper walw function ka reference ?
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }
// const user1 = createUser('harshit', 'vashsith', 'harshit@gmail.com', 9, "my address");
// const user2 = createUser('harsh', 'vashsith', 'harshit@gmail.com', 19, "my address");
// const user3 = createUser('mohit', 'vashsitha', 'harshit@gmail.com', 17, "my address");
// // console.log(user1);
// console.log(user1.about());  //koi bhi user call kar sakte hai
// // console.log(user3.sing());

//Same upper wale ka dusra example ye ?
// const obj1 ={
//    key1 : "value1",
//    key2 : "value2"
// }
 //empty object creating method now
// const obj2 = Object.create(obj1)   //obj1 ki property  use hogi is se
//console.log(obj2) //or empty object bhi hai ye
// obj2.key3 = "value3";  //obj2 me add hora alag se ye

// console.log(obj2.key1)

// console.log(obj2)

