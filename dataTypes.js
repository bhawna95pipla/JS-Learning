// DATA TYPES 


// number
let x1 = 25;
console.log(x1);
console.log("Type of x1",typeof x1);



// string
let x2= "Bhawna";
console.log(x2);
console.log("Type of x2",typeof x2);



// boolean
let x3= true;
console.log(x3);
console.log("Type of x3",typeof x3);



// BigInt : for big integer values 
let x4= BigInt(1234567890);
console.log(x4);
console.log("Type of x4",typeof x4);



// null  : null is a special object representing the intentional absence of a value
let x5= null;
console.log(x5);
console.log("Type of x5",typeof x5);



// undefined : undefined signifies that a variable has been declared but not assigned a value
let x6;
console.log(x6);
console.log("Type of x6",typeof x6);



// For NUll & Undefined, Despite their similar purpose, they are not strictly equal (===) to each other.



//In JavaScript, there is no specific "date" data type. Instead, dates are handled using a 
// built-in Date object. Under the hood, this object stores the date as a single number representing 
// the milliseconds elapsed since January 1, 1970

const today = new Date();
console.log(today);       // Result : 2026-08-18T14:43:41.008Z

const dateOnly = new Date();
dateOnly.setHours(0, 0, 0, 0);
console.log(dateOnly);
