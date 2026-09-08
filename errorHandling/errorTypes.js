// // Types of error in JS 

// // 1. Syntax error(grammtic error)
// //Example 1
// console.log("Hello World";                          // SyntaxError: missing ) after argument list

// //Example 2
// if (true{
//     console.log("hi");
// }                                                   // SyntaxError: Unexpected token '{'    


// // 2. ReferenceError (Missing Object)
// // Example 1
// console.log(text);                                  // ReferenceError: text is not defined

// // Example 2 
// hello();                                           // ReferenceError: hello is not defined


// //3. TypeError (Impossible Action)

// //Example 1
// let age =25;
// age();                                        // TypeError: age is not a function

// // Example 2
// const toy = "car";
// toy = "bat";                                     // TypeError: Assignment to constant variable.
// console.log(toy);      


// // 4. RangeError (Out of Bounds)
// let arr = new Array(-1);                               // RangeError: Invalid array length  
