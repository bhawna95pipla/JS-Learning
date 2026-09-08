"use strict";
// tryCatch: Try a piece of code and if error occurs log that error 

console.log("Statement1");                   // Statement1
console.log("Statement2");                   // Statement2
try{
    console.log(Bhawna);
}
catch(err){
    console.log(err);                      // It will print error :Bhawna is not defined & wihtout sttoping execution move to nextline
};

console.log("Statement 3");   


// 1. Catching a "Missing Variable" Error
try{
    console.log("Find my toy Car");                          // Find my toy Car
    console.log(car);
    console.log("Found the Car");                           // ReferenceError: car is not defined
}
catch(error){
    console.log(error + "No Car found!!");                  // No Car found!!
};
console.log("Continue code, Find other toys");              // Continue code, Find other toys


// 2. Using the error Object to See What Happened : The catch block gives you an object (usually named error or err) that contains details about exactly what went wrong
try {
    const text = "Hello";
    text = "Hi"
}
catch(err){
    console.log(err);                                          // Assignment to constant variable.
    console.log("Error Name : ", err.name);                   //  TypeError
    console.log("Error Message : ", err.message);             // Assignment to constant variable
};


// 3. Creating Your Own Custom Error (throw)

let age = 16;
try{
    if(age<18){
        throw new Error("Age must be at least 18 to Vote");    // It creates and "throws" a new custom Error object with the message
    }
    console.log("Age is eligible to VOTE");                    // because of error this will be skipped
}
catch(error){                                                  // The error variable inside the parentheses holds the Error object that we just threw.
     console.log("Not Eligible : ", error.message);            // Not Eligible :  Age must ne at least 18 to Vote
};

// 4. Example with try catch throw finally

function checkAge(age){
    try{
        console.log("Age confirmation....");

        if(age < 0)
        {
            throw new Error("Age cannot be negative");
        }
        else if(age <12)
        {
            console.log("You are too young for this ride");
        }
        else{
            console.log("Welcome & Enjoy your ride");
        }}
        catch(err)
        {
            console.log("An error was caught " , err.message);
        }
        finally
        {
            console.log("Visit again!!");
            
        }
}
checkAge(-1);
/*Output 
Age confirmation....
An error was caught  Age cannot be negative
Visit again!!
*/

checkAge(5);
/*
Output
Age confirmation....
You are too young for this ride
Visit again!!
*/

checkAge(40);
/*
Output
Age confirmation....
Welcome & Enjoy your ride
Visit again!!
*/



//JS allows only one try, one catch, and one finally per block
// However, you can easily handle different types of errors or run multiple steps by using two common strategies:
// conditional error checking inside a single catch, or nesting multiple try...catch blocks inside each other.

// 1. One catch Block with instanceof : We use instanceof inside a catch block to identify the specific type of error that occurred.

try {
  console.log(hello); 
} 
catch (error) {
  if (error instanceof ReferenceError) {
    console.log("ReferenceError: variable isn't defined.");
  } else if (error instanceof TypeError) {
    console.log("TypeError: Invalid operation tried on a data type.");
  } else {
    console.log("general error: " + error.message);
  }
} 
finally {
  console.log("This will run in whether code fails or pass");
}
/*
ReferenceError: variable isn't defined.
This will run in whether code fails or pass
*/


// 2: Nesting try...catch Blocks

try {
  console.log("outer try");
  try {
    console.log("inner try");
    console.log(jumping); 
  } 
  catch (innerError) {
    console.log("Inner Catch");
  }
  console.log(guests); 
} 
catch (outerError) {
  console.log("Outer Catch");
}
finally
{
    console.log("End of Try & Catch");
    
};
/*
outer try
inner try
Inner Catch
Outer Catch
End of Try & Catch
*/















