// Closure is created by Inner function or the funciton inside another function

function outer(outerVariable){
    return function inner(innerVariable){
        console.log("outer: " + outerVariable, "inner: " + innerVariable);
    };
};

let closure = outer("Space");
console.log(closure("World"));              // outer: Space inner: World


//Example 2:
function morningMessage(morningVar){
    return function nightMessage(nightVar){
       console.log(morningVar + nightVar);
    };
};

let greetings = morningMessage("Good Morning!!");
console.log(greetings(" & Now it's already night"));     // Good Morning!! & Now it's already night

