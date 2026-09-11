//arrow functions () => {} is the modern & shorter way to write functions in JS , we cna skip function keyword
// Arrow functions are always expressions and must be assigned to a variable.
// return & curly can be skipped when function has only one statement to return 
// If a function has only one parameter, you can omit/remove the parentheses:


// 1: Arrow function No parameter
const text= ()=> {
    console.log("Hello");
};
text();                                                // Hello

// Shorter way for arrow function NO parameter with return 
const helloOne = () => {return "Hello, One!!"};
console.log(helloOne());                                  // Hello, One!!

// arrow function NO parameter NO return
const helloTwo = () => "Hello, Two!!";
console.log(helloTwo());                                 // Hello, Two!!


// 2: Arrow Functions with One Parameter

//with paranthesis with return 
const doubleOne = (num1) => {return num1*2};
console.log(doubleOne(5));                                   // 10

// with paranthesis NO return
const doubleTwo = (num1) => num1*2;
console.log(doubleTwo(10));                                  // 20

// NO paranthesis with return 
const doubleThree= num1 => {return num1*2};
console.log(doubleThree(15));                                // 30

// NO paranthessis & NO return 
const doubleFour = num1 => num1*2;
console.log(doubleFour(20));                                 // 40 


// 3. Arrow Function with more than one Parameters : 
// !! Paranthesis can't be removed with multiple arguments
// !! can remove the curly braces {} and the return statement for multiple arguments if the function fits on a single line. This is called an implicit return.

// With long way retune statement & braces
const addOne = (num1, num2)=>{
    return num1 + num2;
};
console.log(addOne(10, 25));                                     // 35

// With short way in one line with return & curly braces
const addTwo = (num1, num2) => {return num1 + num2};
console.log(addTwo(30,50));                                     // 80

// with short way one line NO return , NO Curly braces 
const addThree = (num1, num2) => num1 + num2;
console.log(addThree(50, 60));                                  // 110


// functions with this keyword 
const user = {
  name: "John",
  age : 30,
  userName: function() {
    return this.name;
  }
};
console.log(user.userName());                                   // John


// arrow functione with this keyword : Arrow functions do not have their own this value.
// They inherit this from the surrounding code.
const user2 = {
  name: "John",
  age : 30,
  userName: ()=> {
    return this.name;
  }
};
console.log(user2.userName());                                   // undefined


// Arrow function with return & argument combo
// Arrow Function with return & with argument 
const multiply=(num1 , num2)=> num1 * num2
console.log(multiply(5,10));                             // 50 


// Arrow Function with return & without argument 
const greet = () => "Welcome";
console.log(greet());                                    // Welcome


// Arrow Function without return & with argument 
const morningCall= username => console.log("Good Morning!!" + username + ", wake up");
morningCall("Bhawna");                                    // Good Morning!!Bhawna, wake up


// Arrow Function without return & with argument 
const battery= () => console.log("Battery is Low, Plug in Charger now!!!!");
battery();                                                // Battery is Low, Plug in Charger now!!!!

// Arrow function with multiple statement in one line then we have use return statement & curly braces
const addition = (a,b,c) => {const result= a+b+c; return result};
console.log(addition(10,20,30));                          // 60

// mutliple code lines in one line 
//const addition = (a,b,c) => const result= a+b+c; return result;
//console.log(addition(10,20,30));                          // Syntax error: Identifier 'addition' has already been declared




