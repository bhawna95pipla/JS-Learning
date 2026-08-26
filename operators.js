// Airthemetic operators 

let a=5;
let b=2;

console.log("a =", a, "& b =", b);
console.log("a+b=", a+b);  //7
console.log("a-b=", a-b);  //3

console.log("a*b=", a*b);  //10
console.log("a/b=", a/b);  //2.5

console.log("a%b=", a%b);  //1
console.log("a**b=", a**b); // 25

console.log("++a=", ++a);   // 6
console.log("--a=", --a);   // 5

// Addition can also be used to concatenate strings , strings & numbers

let x1 = "Hello";
let x2 = "How are you";
let x3 = 25;

console.log("New Message!!", x1 +','+ x2);
console.log("String & Number", x2 +'? '+ x3);
console.log("New Message Again!!", x1 += x2);


// Comparison Operators 

let y1=5;
let y2=2;
 
console.log ("a == b", a == b);       // Equals to [==] :  false 
console.log ("a === b", a === b);     // Strict Equals to[===] : false

console.log ("a != b", a != b);       // Not Equals to [!=] : true
console.log ("a !== b", a !== b);     // Strict Not Equals To [!==] : true

console.log("a > b", a > b);          // Gretaer than >  : true
console.log("a >= b", a >= b);        // Greater than equal to >=  : true

console.log("a < b", a < b);          // Less than < : false 
console.log("a <= b", a <= b);        // Less than equal to <= : false 


// Comparing Different types 

console.log(2 < 12);                     // true
console.log(2 < "12");                   // true

console.log(5 < "Hello");                // false
console.log(5 > "Hello");                // false

console.log(5 == "Hello");                // false
console.log("2" < "12");                // false : tring are compared character by character & here 2 is greater than 1

console.log("2" > "12");                // true : here 2 is greater than 1 so result is true 
console.log("2" == "12");                // false : becuase 2 is not equals to 1 


// Logical Operators 

let z1=6;
let z2=5;  

console.log(z1 < 10 && z2 > 1);           // AND[&&] : true 
console.log(z1 < 10 || z2 < 1);           // OR[||] : true
console.log(!a > b);                      // NOT[!] : false



// 19 Aug 2026
// Operator Precedence  BODMAS

// Multiplication over Addition
let result1 = 10 + 5 * 2;
console.log("Result is ", result1);            // Result 20


// Overriding Precedence with Parentheses
let result2 = (10 + 5) * 2;
console.log("Result is ", result2);            // Result : 30 


// Handling Same Precedence (Left-to-Right Associativity)
let result3 = 30 / 5 * 2; 
console.log("Result is ", result3);            // Result : 12


//Exponentiation Special Behavior (Right-to-Left Associativity)
let result4 =  2 ** 3 ** 2;                    // 3 * 3 then 9 times 2 
console.log("Result is ", result4);            // Result : 512

//Complex Mixed Expression
let result5 =  10 + 20 / 2 ** 2 - 1;                
console.log("Result is ", result5);                     // Result : 14
// Step 1: 2 ** 2 = 4       (Exponentiation runs first)
// Step 2: 20 / 4 = 5       (Division runs next)
// Step 3: 10 + 5 = 15      (Addition runs left-to-right)
// Step 4: 15 - 1 = 14      (Subtraction completes the equation)  


// Examples
let op1 = 100 + 50 - 3;
console.log("Final Value of op1 is ", op1);    // Result : 147 

let op2 = 100 / 50 * 3;
console.log("Final Value of op1 is ", op1);    // Result : 6

let op3 = (10 * (5 - 2));
console.log("Final Value of op3 is ", op3);      // Result : 30 

let op4 = (100 / (5 + 3 -(2 * 2)));
console.log("Final Value of op4 is ", op4);       // Result : 25


// Assignment operators 

let n1 = 10;

n1 += 2;
console.log("Value of n1 is ", n1);          // 12

let n2 = 10;
n2 -= 2;
console.log("Value of n2 is ", n2);          // 8

let n3 = 10;
n3 *= 2;
console.log("Value of n3 is ", n3);          // 20

let n4 = 10;
n4 /= 2;
console.log("Value of n4 is ", n4);          //5

let n5 = 10;
n5 **= 2;
console.log("Value of n5 is ", n5);          //100

let n6 = 10;
n6 %= 2;
console.log("Value of n6 is ", n6);          //0

let n7 = 10;
n7 :;
console.log("Value of n7 is ", n7);          //0


// Logical Assignment Operators

// Logical OR Assignment (||=) assign right hand value to left  only if the left-hand variable is falsy

let theme = "";                            // Empty string is a falsy value, assign light 
theme ||= "light"; 
console.log(theme);                        // Output: "light" assign light 

let age = 25;                     
age ||= 50; 
console.log(age);                          // 25 is a truthy value , so does nothing 

//  Logical AND Assignment (&&=) assigns right-hand value to the leftonly if the left variable is truthy

let isOnline = true;
isOnline &&= "Hello, Hi";
console.log(isOnline);                //Hello, Hi

let loginAccess = false;
loginAccess &&= "You can login now!!";
console.log(loginAccess);                  // false because the initial value was falsy

// Nullish Coalescing Assignment (??=) assigns the right value to left only if the left variable is exactly 
// null or undefined. It completely ignores other falsy values  

let score = 0;
score ??= "Cannot qualify";
console.log(score);                       // 0


let t;
t ??=  "hello";
console.log(t);                          // hello


// String Assignment operators 

// = Operator
let greetings = "hello";

// += Operator
greetings += ", Nice to meet you!!";

console.log(greetings);                   // hello, Nice to meet you!!


//Unary Operators

// Unary Plus (+) : Converts strings or booleans into numbers

let age1 = "25";
console.log(+age1);                        // Output: 25 (as a number)

console.log(+true);                        // Output: 1

//  Unary Negation (-) : Converts the value to a number and changes its sign (+ to - or vice versa)
let speed = "60";
console.log(-speed);                       // Output: -60

//Increment (++) & Decrement (--) : Adds or subtracts 1 from a variable

let step = 5;
console.log(step++);                       // Output: 5 (prints first, then increase value to 6)
console.log(step);                        // 6

console.log(++step);                       // 7

console.log(step--);                       // 7 then decrease to 6

console.log(--step);                       // 5

// Logical Not(!) : everse the result from actual result 
let t1 = !(5 === 5);
console.log(t1);                    // false


let t2 = !(5 === 8);
console.log(t2);                    // true 

// typeof : Tells you the data type of a value
console.log(typeof step);                // number 

// delete : Removes a property from an object
let car = { brand: "Toyota", year: 2025 };
delete car.year;
console.log(car);                            // Output: { brand: "Toyota" }


// Ternary Operator :  is a shorthand for conditional statements. It takes three operands.

let ageOfPerson = 20;
let status = (ageOfPerson >= 18) ? "Can vote" : "Too young";
console.log(status);                              // Output: "Can vote"


// Bitwise Operators : treat their operands as a sequence of 32 bits (zeroes and ones) rather than decimal 
// numbers. They perform operations at the binary level, modifying data directly in memory
let p1 = 5;                                   // Binary: 0101
let p2 = 3;                                   // Binary: 0011

//Bitwise AND (&)Compares each bit of two numbers. It returns 1 only if both bits are 1
// 0101 & 0011 = 0001 (Decimal 1)
console.log(p1 & p2);                          // Output: 1


// Bitwise OR (|) : Compares each bit. It returns 1 if at least one bit is 1
// 0101 | 0011 = 0111 (Decimal 7)
console.log(p1 | p2);                                // Output: 7

// Bitwise XOR (^)Compares each bit. It returns 1 if the bits are different (one is 0, the other is 1)
// 0101 ^ 0011 = 0110 (Decimal 6)
console.log(p1 ^ p2);                                // Output: 6

//Bitwise NOT (~)Inverts all the bits of a single operand (0 becomes 1, and 1 becomes 0). 
// Due to how computers handle signed numbers, this always yields -(x + 1)

// ~5 turns into a binary representation of -6
console.log(~p1);                                      // Output: -6   

// Left Shift (<<)Shifts bits to the left by filling 0s on the right. This effectively multiplies the number
//  by 2 for every shift position

// 0101 shifted left by 2 becomes 010100 (Decimal 20)
console.log(p1 << 2);                                  // Output: 20

// Sign-Preserving Right Shift (>>)Shifts bits to the right, discarding the bits that fall off. Copies the 
// furthest-left bit (the sign bit) into the new positions, preserving the negative or positive sign

let p3 = 20; // Binary: 10100

// 10100 shifted right by 2 becomes 101 (Decimal 5)
console.log(p3 >> 2);                                   // Output: 5

// Zero-Fill Right Shift (>>>)Shifts bits to the right, but always fills the empty spaces on the left with 0s. 
// This converts negative numbers into massive positive numbers because the sign bit is wiped out

console.log(-5 >>> 2);                                  // Output: 1073741822 (Sign bit becomes zero)



//Practice 

let q1=2;
let q2= q1++ + ++q1;        // here 2nd ++ works 2+3=5
console.log(q2);            // 1 will be added at this point for1st q1++ from above so q2=6
q2=--q1 + q1--;             // here q1 now has value 4 , 1st -- value gives 3 + value4    q2=7
console.log(q2);            // here 2nd -- will work so final value q2 =6

























 