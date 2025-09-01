// array
const myArr = [0,1,2,3,4,5, true , "ananya"] // any types of values and dynamic in nature 
console.log(myArr[1]);
// jab array copy operation karenge toh SHALLOW COPIES banengi
// SHALLOW COPIES -> share the same reference point -> original values change hoti hai 
// DEEP COPIES-> do not share -> copied values change hoti hai 
const myHeros = ["wolf", "spiderman"]

const myArray = new Array(1,2,3,4,5)
console.log(myArr[2])
console.log(myArray[3]);

myArr.push(6)
console.log(myArr);
myArray.push(7)
console.log(myArray);
myArray.pop()
console.log(myArray)
