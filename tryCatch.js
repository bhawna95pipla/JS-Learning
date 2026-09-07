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