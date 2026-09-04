//variables & functions declaration can be hoisted
// Initialisation cannot be hoisted 


// 1. Function Hoisting 
greet();                                           // Hi Bhawna
function greet(){
    console.log("Hi Bhawna");            
};

//2. Variable Hoisting with var
console.log(toy);                                  // undefined

var toy = "Bat";
console.log(toy);                                  // Bat

// 3. Variable Hoisting with let and const
console.log(fruit);                                // Cannot access 'fruit' before initialization
let fruit = "Apple";
console.log(fruit);                                  // Apple                       

console.log(stationary);                             //  Cannot access 'stationary' before initialization
const stationary = "Pen";
console.log(stationary);                             // Pen




