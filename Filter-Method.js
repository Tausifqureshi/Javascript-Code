// filter method ? ye function bhi ek call-back function leta hai? ye bhi new array deta haim har elemenet ka?

const numbers = [1,2,3,4,5,6,7,8,9,10];



const evenNumbers = numbers.filter((number)=>{  //arrow function ye?
    return number % 2 === 0;
});
console.log(evenNumbers);z