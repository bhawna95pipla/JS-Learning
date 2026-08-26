// UserINput on VS code 

// Exmaple 1
// 1. Load the built-in 'readline' tool to talk to the keyboard and terminal
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2. Ask the question and wait for the user to type an answer
readline.question("What is your favorite color? ", (color) => {
  
  // 3. Print the answer back to the terminal
  console.log("Wow, " + color + " is a great color!");
  
  // 4. Close the tool so the program stops running safely
  readline.close();
});


// Example 2
const readline1 = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline1.question("What is your age? ", (age)=>{
    console.log("OK", + age + "people are eligible to VOTE!!");
    readline1.close();
});



// UserInput on Browser   == Preferred way 

// example1
let userName = prompt("What is your name?");
alert("Hello, " + userName + "! Welcome to Google Chrome.");


// example2
let password= prompt("What is the secret password!");
if(password=== "magic")
{
    alert("Access Granted!!, You can enter now.");
}
else if(password=== "newbiee")
{
    alert("Access Granted!!, But Newbiee has limited access");
}
else{
    alert("Access Not Granted!!");
};