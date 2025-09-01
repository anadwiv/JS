let myDate = new Date()
console.log(myDate);//vaise ajeeb sa date aata hai 
// to string convert karke better aata hai 
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);// date ek object hota hai

// jab hm aise random nos dete hai toh jan-0 se start hota hai
let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString())
//agar sahi se likh kar dete hai toh jan-1
let fdate = new Date("01-10-2016")
console.log(fdate.toLocaleDateString())

//dono values miliseconds main hai
let myTime = Date.now()
console.log(myTime);
console.log(myDate.getTime());

// seconds main convert karne ke liye
// decimals hatane ke liye Math.floor()
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);

`${newDate.getDay()}`









