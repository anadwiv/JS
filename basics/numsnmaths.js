const score = 400

//new keyword maked a object jo ki number type ke hai
//new keyword ke through browser tell ki iski type kya hai
const balance = new Number(100)
console.log(balance);
console.log(score)

// console.log(balance.toString());
// console.log(typeof balance.toString());// string
// console.log(balance.toString().length);// length kya hai number ki
// console.log(balance.toFixed(2));//number ke baad kitne points

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3));// jitna toPrecision hoga uss number tak precise karega irrespective of the decimal

const hund = 1000000
console.log(hund.toLocaleString('en-IN'));// comma lage hue aate hai 

//++++++++++++++++++++ MATHS ++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-3));// absolute value
// console.log(Math.round(4.3));// round of acc-n
// console.log(Math.round(4.6));// round off acc-n
// console.log(Math.ceil(4.3));// agar zara se bhi no se bada hai toh next bada number dega
// console.log(Math.floor(3.5));// varna chota no
// console.log(Math.min(2,3,4,5));// minimum no 
// console.log(Math.max(4,2,6,5));// maximum no

console.log(Math.floor(Math.random()*10)+1); // hmesha btw 0-1
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min);
















