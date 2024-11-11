const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// converts the number into string data type
// console.log(balance.toString())
// console.log(balance);

//the typeof will come as objects
// console.log(typeof balance);

//will give the length of the string
// console.log(balance.toString().length)

//will give precision upto the number passed
//usually used in e-commerce websites
// console.log(balance.toFixed(2));

// give a precision limited string
const othernum = 123.4567;
// console.log(othernum.toPrecision(3))

// jab bht saare zeros hote hai toh toLocaleString (,) laga dega
const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));


//                          MATHS
// console.log(Math)
// console.log(Math.abs(-5))
// console.log(Math.round(9.4))
// console.log(Math.ceil(9.4))
// console.log(Math.floor(9.4))
// console.log(Math.min(9,3,47,546))
// console.log(Math.max(9,3,47,546))
console.log(Math.random())

// value agar aise aa jae (0.04) tab usse nipatne ke liye +1
console.log(Math.floor(Math.random()*10)+1)

const min =10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min))
