"use strict";

// Callback functions 
//Example : single callback function
function display(result){
console.log(result);                                     // 25 after the callback is completed
};

function add(num1, num2, myCallback){
    let sum = num1 + num2;
    console.log("Sum is: ", sum);                         // 25
    console.log(myCallback);                              // [Function: display] referring to fucntion display
    myCallback(sum);                                      // 25
    console.log(myCallback);                              //[Function: display]
};

add(10, 15, display);
//add(10, 15, display());                                   // TypeError: myCallback is not a function          


// Example : with 2 different callback functions 

function email(message){
    console.log("You have an Email : " + message);
};

function sms(message){
    console.log("You have a SMS : " + message);
};

function balance(amount, notification){
    if(amount < 100){
        notification("Low Balance Recharge");
    }
    else{
        notification("User Balance is enough to call");
    }
};

balance(50,email);                                      // You have an Email : Low Balance Recharge
balance(50, sms);                                       // You have a SMS : Low Balance Recharge
balance(100,email);                                     // You have an Email : User Balance is enough to call


// Why callback is needed ??: JS usually runs code from top to bottom, instantly. But some tasks—like loading 
// an image, downloading data from a server, or waiting for a timer—takes time. 
// Callbacks ensure code doesn't freeze while waiting
// The built-in setTimeout function tells JavaScript to wait a specific amount of time before running a callback

//Example :
function timeUp(){
    console.log("Timer will be up in 3secs");      // runs after 3 secs : Timer will be up in 3secs
};

setTimeout(timeUp, 3000);
 console.log("This will run 1st before timeUp");    //  runs 1st : his will run 1st before timeUp


//1. Callback function with return & with argument
function Minus(op1, op2){
    return op1 - op2;
};

function calculation(num1 , num2, minusCallback){
    let result = minusCallback(num1, num2);
    console.log("Result is : ", result );                               // 10 
};
calculation(20, 10, Minus);           


//2.  Callfunction with return & without argument
function greet(){
    return "Hello, Hi!!";
};

function firstGreet(greetCallback){
    let call = greetCallback();
    console.log(call);                                            // Hello, Hi!!
};

firstGreet(greet);


//3. Callfunction without return & with argument
function morningCall(username){
    console.log("Hello " + username + ", Breakfast is ready!!");     // Hello John Wick, Breakfast is ready!!
};

function morningMessage(name,callback){
    let reminder = callback(name);
};
morningMessage("John Wick",morningCall);


//4. Callfunction without return & withpout argument
function warning(){
    console.log("Balance Low!!, Recharge now");               // Balance Low!!, Recharge now
};

function accountBalance(callback){
    let message = callback();
};
accountBalance(warning);


// Callback with arrow functions : arrow functions () => {} is the modern & shorter way to write functions in JS

// Example : Arrow function
const text= ()=> {
    console.log("Hey, How you doin");
};
text();                                        // Hey, How you doin


// Arrow funciton with callback without parameters
setTimeout(()=>{
    console.log("Let me run in 5 seconds");
},5000);                                        // Let me run in 5 seconds


// Arrow Functions with callback with Parameters

const color = ["yellow", "green", "red", "blue"];

color.forEach((element)=>{
    console.log("I now like color : ", element);
});
/*
I now like color :  yellow
I now like color :  green
I now like color :  red
I now like color :  blue
*/


// Synchronous Callbacks : Executs right away
function concert(){
    console.log("You can enter after showing tikcet");
};

console.log("Start");
concert();
console.log("Concert ended");
/*
Start
You can enter after showing tikcet
Concert ended
*/


// Asynchronous Callbacks : Executs later
console.log("Start");
setTimeout(()=>{
    console.log("Pizza will be ready in 6 seconds");
}, 6000);
console.log("Ended");
/*
Start
Ended
Pizza will be ready in 6 seconds
*/









 