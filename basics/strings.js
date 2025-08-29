const name = "ananya"
const repoCount = 50
console.log(name+repoCount+"Value") // outdated syntax
//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String('Ananya-fc')

//string andar se object jaisa hota hai (using developer tools) and uski key:value pairs hoti hai 
console.log(gameName[0])
console.log(gameName.__proto__)// {} yeh object hai 
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('f'))

// last main dali hui value nahi include hoti
const newString = gameName.substring(0,4)
console.log(newString)

//slice negative values leta hai , substring nahi leta
const anostring = gameName.slice(-8,4)
console.log(anostring)

// trim extra spaces remove kar deta hai 
const newStringOne = "  ananya    "
console.log(newStringOne);
console.log(newStringOne.trim());

//replace 
const url = "https://ananya.com/ananya%20dwivedi"
console.log(url.replace('%20','-'))
console.log(url.includes('ananya'))

//change string to array
console.log(gameName.split('-'))

