"use strict";
// alert("hello")
// alert node.js main nahi chalta
let name = "ananya"
let age = 18
let isLogged = true;
// number , bigint , string , boolean , null , undefined , object , symbol 
console.log(typeof age)
console.log(typeof null) // typeof-> object
console.log(typeof undefined) // typeof ->undefined

// data types do ways main divided hote ->
// 1) data kaise store hota hai 
// 2) data ko access kaise karte hai
// 2 types -> Primitive & Non-primitives
// primitives - (call by value-copied values) - string , number , boolean , null , undefined , symbol , object , bigInt

// const pe define karne ki zarurat nahi ki kis type ki value milegi 
// const id = 123 
// const name = "ananya"
// const userEmail ; // khali bhi chodh sakte

// symbol unique banat hai at any cost chahe value bhi same pass kiya gaya ho 
let id = Symbol("123")
let anoId = Symbol("123")
console.log( id===anoId )

//non-primitive -(call by refernce) 
// array , objects , functions
const heros = ["shaktiman","nagraj","doga"] // array

// objects -> {}(curly braces)-> main key:value pairs
let obj = {
    name:"ananya",
    age:22,
}

// Functions
const myFunc = function(){
    console.log("ananya");
}

// [Stack(Primitive)->copy] and [Heap(Non-Primitive)->reference] memory

// Using primitive data types
// Call by value chal raha
let myname = "ananyadwivedi@gmail.com"
let anotherName = myname
anotherName = "tanya@dwivedi.com"
console.log(myname)
console.log(anotherName)

// heap ke anadar jaega kyuki yeh non-primitive hai
let userOne = {
    email:"ananya@dwivedi.com",
    upi: "anadwiv"
}

let userTwo = userOne
userTwo.email = "ananya@google.com"
// dono main same value hogi kyuki inhe heap main same reference mil raha aur dono change ho jaega
console.log(userOne)
console.log(userTwo)