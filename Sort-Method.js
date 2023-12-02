// sort method ? 
// ASCII TABLE 
//char : ascii value

//string me number ki ye position hoti hai?
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

// sort Method ?ye method origan array ko change karta hai meuted means change karna hota hai?ek callback function bhi leta hai ye sort method?
 
// [5,9,3000,1200,400]
//3000, 1200, 400, 9, 5 // desending sort bolte hai is se?
// 5,9,400, 1200, 3000     //asending sort bolte hai us se?


//Number Sort Example
//js me jab ham sort method use karte tu js us se number samaj ke sort nhi karta hai string samaj ke sort karta hai?
// const number =[5,9,1200, 400, 3000]
// number.sort()
// console.log(number)

//["5", "9", "1200", "400", "3000"]    //js first sub element ko aisa string me karta hai?string ko sort karne ke liye js ACSII use karta hai google search karo? agar 1200 hai tu js 1200 nhi dheka ga only 1 dheyke ga us ke ACSII code jo hoga o print hoke aye ga?


//Charachter Sort Example? is me jo first ata hai word us se first rahkta hai example? cde or bca but ye sort method first bca ko rahke ga fir cde ko?
//agar capital letter ho ga firt o aye ga q ke ACSII code me ciptal letter kam number ke position kam hote hai?
// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

const nam = ['cde','bca']
console.log(nam.sort())



//expected output example in sort method in numbers?
const numbers = [5,9,1200, 410, 3000];
numbers.sort((a,b)=>{
    //return a-b //asendin me sort ye
    return b-a; //desending me sort ye
});
numbers.sort((a,b)=>a-b);
// console.log(numbers);
//agar positive ata hai answer tu hame phele b ko rahkna hai nagitive me first a ko rahkna hai?
// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 




// Real use case? Example jab ham ecommerce website pe jate hai tu ham opetion ata hai kam price ya low price wale?
// price lowToHigh HighToLow 
const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{//slice use kaha se hame apni value start karna hai clone ke liye use?
    return a.price-b.price     //kam price wale ke liye use
});

const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price;    //jayda price wale ke liye use
});
// console.log(products) // slic use se produts clone hoge is se pure products upper nice nhi hoge jais hai line bye line ayeb ge



//sort method charachter example? jo word first ata hai us se phle rahke ga jaise garima first aye ga q ke teble me g ki position jaldi ati hai is liye garima jaldi aye ga us baad harshit aise hi word two word work kare ge?
const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20},
]


users.sort((a,b)=>{
    if(a.firstName > b.firstName){
        return 1;
    }else{
        return -1;
    }
});

console.log(users); 