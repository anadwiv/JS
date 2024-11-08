"use strict" // use newer version of javascript

// alert("hello")
// alert(3+3)     --> we are using node.js not browser

let name="Ananya"
let age= 27
let isLogged= false // let is used bcoz it has scope

// bigint
// string
//boolean
//null
//undefined
//symbol
//object

// console.log (typeof "hey")
// console.log (typeof age)
// console.log (typeof null)
// console.log (typeof undefined)

//              SUMMARY AND NOTES
//Primitive data type -> 7to
//Non-Primitive -> array , objects , functions
const score = 100
//  JS is a dynamically typed language

const id = Symbol("123")
const anotherId= Symbol("123")
// console.log(id)
// console.log(anotherId)
// console.log(id===anotherId)

// BigInt karne ke liye bas "n" laga do end main
const bigNum= 689237n

//  non-primitive --> typeof-> objects

// array
const heros=["spiderman","ironman","ironfist"]

// objects
let myObj={
    name:"Ananya",
    age:21,
}

// functions
const myfunc = function(){
    console.log("hello");
}

//               STACK AND HEAP

// stack -> primitive --> copy milta hai variable ka

// heap -> non-primitive --> reference milta hai original value ka --> matlb original vale change hoti hai

let myName = "Ananya.com"
let mynewname = myName
console.log(mynewname);
mynewname= "Arishi"
console.log(mynewname);

let userOne = {
    email:"ananya@gmail.com"
}

let userTwo = userOne;
userTwo.email="tanya@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

