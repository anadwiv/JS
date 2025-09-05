// console.log("hello world");
// let name = "ananya"
// let age = 23

// objects 
let obj = {
    fname : "Tanya",
    age : 22
};
console.log(obj);

// 2 ways to access value
// dot notation
obj.name = "hehe"
console.log(obj.name)
// bracket notation
obj['name']="omi pagal hai"
console.log(obj.name)

// all arrays are objects in js

let array = ['apple','orange']
console.log(array[0]);

let arr = ['pink' , 'blue' , 'white']
arr[3] = 'green'
console.log(arr);
// console.log(arr.length());

// functions to perform a task
function greet (name, lastname){ // parameter
    console.log("hello"+name+" "+lastname); 
}
greet('ananya','dwivedi'); // argument
greet('tanya')

// function to calculate a value 
function square(number){
    return number*number;
}
console.log(square(2));
