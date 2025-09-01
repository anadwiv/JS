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

// unshift se front main add ho jata hai
myArray.unshift(0)
console.log(myArray);
myArray.unshift(9)
console.log(myArray);

// shift aage se number ko remove karta hau 
myArray.shift()
console.log(myArray);

// true/false ofc
console.log(myArray.includes(1));
// -1 if not present in case of index
console.log(myArray.indexOf(9))

// join -> array ke elements ko string main add kar deta hai
const newArr = myArray.join()
console.log(myArray);
console.log(newArr); // agar typeof karke dekhoge toh string aega

// slice , splice 
console.log("A",myArr);
const mynew = myArr.slice(1,3)
console.log(mynew);
console.log("B", myArr);

//splice operation
const mynew2 = myArr.splice(1,3)
console.log("C",myArr);
console.log(mynew2);

// slice original array ko change nahi karta
//splice changes the original array

const m_heroes = ["Thor","Ironman","spiderman"]
const dc_heroes = ["batman","flash","superman"]
