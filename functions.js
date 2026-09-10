// Function without arguments 
function message(){
    console.log(" Learning about Functions");
};
message();
//Output :  Learning about Functions


// Function with parameters & arguments
function arguments(firstName, lastName){
console.log("Hi " + firstName + " " + lastName +"!!" );
};
arguments("Bhawna", "Pipla");
//Output without arguments : Hi undefined undefined!!
// Output with arguments : Hi Bhawna Pipla!!

arguments("bhawna");
//Output with only argument: Hi bhawna undefined!!

arguments(100, 500);
//Output with argument data type number: Hi 100 500!!

arguments(100, "500");
//Output with argument datatype number & number as string  : Hi 100 500!!

arguments("John", "Wick", "Perry");
//Output with extar agrument comapered to defined parameter:  Hi John Wick!!


//with Parameters
function sum(num1, num2){
    console.log(num1 + num2);
};
sum(10,20);
//Output with all required arguments : 30

sum(10,);      // here 10+ undefined passed to function
// Output : Nan  


// Default paraments
function addition(op1, op2=0){            //here op2 has default value 0 
    console.log(op1 + op2);
};
addition(20);
//Output : 20 

addition(20, 30);                // now 30 value will be pass to y in functions
//Output : 50


// Function with return 
function add(a,b){
    return a + b ;
}
let result = add (20,40);
console.log(result);
// Output : 60


// Function returning another function
function fx1(x){
    function fx2(y){
        return x * y;
    }
    return fx2;
};

let finalValue=fx1(5);
console.log(finalValue(5));             // Output : 25
console.log(finalValue(10));            // Outout : 50

// Example with strings

function wordOne(firstWord){
    function wordTwo(secondWord){
         return firstWord + secondWord ; 
    }
    return wordTwo;
};

let buildString = wordOne("Hello ");

console.log(buildString("Java Script"));           // Hello Java Script
console.log(buildString("Bhawna"));                // Hello Bhawna
console.log(buildString(500));                     // Hello 500
console.log(buildString("500"));                   // Hello 500


// Function with return & with argument 
function multiply(num1 , num2){
    return num1 * num2;
}
let multiplyResult = multiply(5, 10);
console.log(multiplyResult);                             // 50 


// Function with return & without argument 
function greet(){
    return "Hello";
}

let greetMessage = greet();
console.log(greetMessage);                                // Hello


// Function without return & with argument 
function morningCall(username){
    console.log("Good Morning!!" + username + ", wake up");       // Good Morning!!Bhawna, wake up
};

morningCall("Bhawna");


//Function without return & with argument 

function battery(){
    console.log("Battery is Low, Plug in Charger now!!!!");       // Battery is Low, Plug in Charger now!!!!
};
battery();















