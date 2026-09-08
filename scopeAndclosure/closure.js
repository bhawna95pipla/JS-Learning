// Closure is created by Inner function or the funciton inside another function

function outer(outerVariable){
    return function inner(innerVariable){
        console.log("outer: " + outerVariable, "inner: " + innerVariable);
    };
};
console.log(outer);                         // [Function: outer]
console.log(outer("Space"));                // [Function: inner]

let closure = outer("Space");              
// variable is just a pointer to a piece of data in memory,  the outer function handed back a live function
//  object that is stored inside the closure container.
// Whenever JavaScript sees a variable name followed by (), it doesn't care what the variable's name is. 
// It looks inside that variable's contain in memory. If it finds a function inside that container, 
// it executes it. If it finds anything else (like a string or a number), it throws an error 
// (TypeError: closure is not a function).

console.log(typeof closure);                // function
console.log(closure);                       // [Function: inner]
console.log(closure("World"));              // outer: Space inner: World


//Example 2:
function morningMessage(morningVar){
    return function nightMessage(nightVar){
       console.log(morningVar + nightVar);
    };
};

let greetings = morningMessage("Good Morning!!");
console.log(greetings(" & Now it's already night"));     // Good Morning!! & Now it's already night

