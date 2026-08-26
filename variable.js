// var can be Redeclared & Reassigned 


//redeclaration 
var a =10;
console.log("Value of a",a);               // Result : 10
var a=20;
console.log("Value of a now is ", a);      // Result : 20



// reassignment
 var color= "green";
 color ="blue";
 console.log("Final value of color is", color);        // Result :  blue
 





// let cannot be redecalared but can be reassigned, It is Blocked Scope 

// redeclaration  in same bloxk or no block 
let b =30;
console.log("Value of b",b);          // Result : 30
let b=40;
console.log("Value of b now is",b);   // Result : will give error Identifier 'b' has already been declared



// But can be redecalred if declared in different blocks
let c =50;
console.log("Value of c out of Block",c);      // Result : 50
{
let c=60;
console.log("Value of c inside Block ",c);     // Result : 60 
}    



// reassignment  allowed 
let age= 25;
age=35;
console.log("Final value of age is", age);       // Result : 35






// const cannot be redeclared or reassigned, , Block scoped 

// redeclaration in same or no block
const d =50;
console.log("Value of d is ",d);     // Result : 50 
const d=60;
console.log("Value of d is ",d);   // error Identifier 'd' has already been declared


// redeclaration in different blocks is allowed 

const e =70;
console.log("Value of e outside Block is",e);         // Result : 70
{
const e=80;
console.log("Value of e inside Block is",e);          // Result : 80 
}  


// reassignment  not allowed 
const name= "Sam";
name = "Rim";
console.log("Final value of name is", name);          // Result : Reassignment throws an Error: Assignment to constant variable








