// Ways to create strings 
// String with single quotes
let greeting = 'Hello!!';
console.log(greeting);                                  // Hello!!

// String wtih double quotes
let message = "Welcome to JS";
console.log(message);                                   // Welcome to JS

// Strings with Template Literals / Backticks (` `) : can inject variables directly into the string using the ${variable} syntax

let name = "Sam";
let text = `Hello!! ${name}`;
console.log(text);                                       // Hello!! Sam

//Example2
let multiLine= `This is line 1
This is line 2`;
console.log(multiLine);
/* Output
This is line 1
This is line 2
*/

//new String() Constructor 
let objectString= new String("Name is Tim");
console.log(String);                                         // [Function: String] Reason : Here, asked to log the standard built-in String object constructor, which is inherently a function. Therefore, the console prints its identity:

console.log(objectString);                                   // [String: 'Name is Tim']


let sentence= "Hello World Bye";

//1. Finding Characters in string
// charAt(index) : find character at specific location
console.log(sentence.charAt(1));                               // e

//charCodeAt(index): Returns the Unicode (UTF-16) number of the character at the specified index
console.log(sentence.charCodeAt(4));                           // 111


// 2. Changing case
//uppercase
console.log(sentence.toUpperCase());                           // HELLO WORLD BYE

// lowercase 
console.log(sentence.toLowerCase());                           // hello world bye


// 3. Searching for Text
//indexOf() :Finds the position of the first time a specific word or letter appears. If it cannot find it, it returns -1
console.log(sentence.indexOf("o"));                             // 4

//lastIndexOf() : Finds the position of the last time a specific word or letter appears, searching from the end back to the start.
console.log(sentence.lastIndexOf("o"));                          // 7


// 4.Extracting Parts of a String
//slice(start, end) : Cuts out string from start index up to but not including end index. It accepts negative numbers to count backward from the end of the string
console.log(sentence.slice(4,8));                                // o Wo
console.log(sentence.slice(-5));                                 // d Bye

// substring(start, end): similar to slice()extracts text between two indices,does not accept -ve numbers (-ve numbers are treated as 0)
console.log(sentence.substring(7,10));                           // orl
console.log(sentence.substring(-5));                             // Hello World Bye

// substr(start, length): Extracts a part of a string starting at a specific index and stretching out for a set number of characters (the length)
console.log(sentence.substr(3, 5));                              // lo Wo


//5. Splitting and Cleaning
//split(separator)Chops a string up into a collection of smaller strings based on a "separator" character you pick, and places them into an Array (a list)
console.log(sentence.split(" "));                               // [ 'Hello', 'World', 'Bye' ]

let stringList = " Apple, Mango, Cheery ";
let list = stringList.split(","); 
console.log(list);                                             // [ 'Apple', 'Mango', 'Cheery' ]

//trim()Removes all invisible whitespace (spaces, tabs, newlines) from both the beginning and the end of a string. It does not touch spaces in the middle.
let stringTwo= "  Remove  the  spacing  ";
console.log(stringTwo.trim());                                  //"Remove  the  spacing"

//trimStart()Removes whitespace only from the beginning (left side) of a string
console.log(stringTwo.trimStart());                             //"Remove  the  spacing  "

//trimEnd()Removes whitespace only from the end (right side) of a string.
console.log(stringTwo.trimEnd());                             //"  Remove  the  spacing"












 