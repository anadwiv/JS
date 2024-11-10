const name = "ananya"
const rep = 5
// console.log(name+rep)
// back-ticks are used for string interpolation 
// console.log(`my name is ${name} and my repo count is ${rep}`);

// string declaration
const gameName = new String("PubG")
// console.log(gameName);// for printing
// console.log(gameName[0]);//for accessing keys of the string 
// console.log(gameName.__proto__);// for accessing the object
// console.log(gameName.length);// lenght of the object
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("u"));

//cannot give negative values
const newString = gameName.substring(0,2)
// console.log(newString);

//can give negative values
const nString = gameName.slice(-2,0)
// console.log(nString);

const uname = "ananya-dwi-tanya";
console.log(uname);
// trim-> removes extra spaces
console.log(uname.trim());

const url = "https://ananya.com/ananya%20dwivedi";

console.log(url.replace("%20", "-"))

console.log(url.includes("ananya"))

console.log(uname.split("-"))
