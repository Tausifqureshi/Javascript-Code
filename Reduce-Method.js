// Reduce Method? ye method bhi ek callback function leta hai?

// const numbers = [1,2,3,4,5, 10];  
// // in sub ka  : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{//pure reduce me de ek value dera hai? sub ka sum dera hai ye reduce method

//     return accumulator + currentValue;
// }, 100);      //inital  value ye 100?means hamne apni taraf se value di us se bolte initial value?
// console.log(sum);

// accumulator , currentValue,  return //ab accumulator ki value hogi 100 first q q ka hamne 100 initial value de hai
// 100              1             101        ab current ki value 1 hogi 100 nhi?
// 101              2             103
// 103              3             106
// 106              4             110
// 110              5             115
// 115             10             125   total sum value 125 aye gi?




const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000},
]

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{ 
    return totalPrice + currentProduct.price;    //pure object se hame rif price chachiye or jo chahiye o retrun karwa sakte firstname product jo bhi?
}, 0)

console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000   //current value first time pura object hoga
// 12000            22000                34000
// 34000            15000                49000



