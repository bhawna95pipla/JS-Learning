// String Conversions (Turning things into Text) : convert a value (like a number or boolean) and turn it into readable text.
let age =30;
let isAdult = true;

// a.  String() Function: most direct way to convert any value into a string
let textAge = String(age);
console.log(typeof age);                                         // number
console.log(textAge);                                            // 30
console.log(typeof textAge);                                     // string

// .toString(): Most data types have a built-in method you can call directly on the variable.
let textisAdult= isAdult.toString();
console.log(typeof isAdult);                                     // boolean 
console.log(textisAdult);                                        // true
console.log(typeof textisAdult);                                 // string 


//2. Converting to Numbers
let scoreString = "95";
let tempString  = "36.5";
let sizeString  = "50px";

//a. Number(value): standard way to convert a string to number. If the string contains letters, it results in NaN 
console.log(Number(scoreString));                                // 95 
console.log(Number(tempString));                                 //36.5
console.log(Number(sizeString));                                 //Nan

//b. parseInt(value): Extracts the first whole number (integer) it finds in a string.
console.log(parseInt(tempString));                                // 36
console.log(parseInt(sizeString));                                // 50

//c. parseFloat(value): Extracts numbers with decimals.
console.log(parseFloat(tempString));                                // 36.5
console.log(parseFloat(sizeString));                                // 50 

//d. The Unary Plus (+): Putting a + right before a string tells JavaScript to convert it to a number.
let newScoreString = +scoreString;
console.log(newScoreString);                                        // 95 


//3. Converting to Arrays: If you have a string, you can split it apart into an array using the .split() method.
let string1 = "Hello,Hi,Bye";
let string2 = "Hello Welcome back to VS";
let string3 = "coding";

// a. Split by a comma
let splitString1 = string1.split(",");
console.log("Split by commas: ", splitString1);                 // Split by commas:  [ 'Hello', 'Hi', 'Bye' ]

//b. Split by a space
let splitSring2 = string2.split(" ");
console.log("Split by spaces: ", splitSring2);                  // Split by spaces:  [ 'Hello', 'Welcome', 'back', 'to', 'VS' ]

//c.Split by empty quotes (splits every single character)
let splitString3 = string3.split("");
console.log("Split with empty quotes: ", splitString3);          // Split with empty quotes:  [ 'c', 'o', 'd', 'i', 'n', 'g' ]


// 4. The Plus (+) and Minus (-) Operations

//a.  Plus Operator (+) = "Text Glue" (Concatenation) : If either side of a + sign is a string, JavaScript stops doing math. Instead, it converts the other side into text and glues them together.
console.log( 10 + 10);                                           // 20
console.log("10" + 10);                                          // 1010
console.log(10 + "10");                                          // 1010
console.log("Ten" + 10);                                         // Ten10
console.log("Ten" + " 10");                                      // Ten 10
console.log(true + 10);                                          // 11
console.log(false + 10);                                         // 10
console.log(true + "10");                                        // true10
console.log(false + "10");                                       // false10

// b. Minus Operator (-) = Pure Math : The minus sign only works with numbers. If you try to subtract a string, JS will automatically attempt to convert that string into a number first to complete the math.
console.log(10 - 5);                                        // 5     (Normal Math)
console.log("10" - 5);                                      // 5     (JS converts "10" to 10 then do math)
console.log(10 - "5");                                      // 5     (JS converts "5" to 5)
console.log("10" - "5");                                    // 5     (Both are converted to numbers)
console.log("Ten" - 5);                                     // Nan   (text can't be converted to number)
console.log(10 - true);                                     // 9
console.log(10 - "true");                                   // Nan
console.log(true - 10);                                     // -9 
console.log(10 - false);                                    // 10-0= 10
console.log(10 - "false");                                  // Nan
console.log(false - 10);                                    // -10



















