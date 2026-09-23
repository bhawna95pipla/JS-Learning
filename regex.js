//Regular Expression is a sequence of characters that forms a search pattern.Regex is a common shorthand for a regular expression.
//JS RegExp is an Object for handling Regular Expressions.
//RegExp are used for:Text searching, Text replacing, Text validation

//Regex Syntax
//const a = /pattern/modifierflags;

// Regex Flags
//  /g 	Performs a global match (find all)
//  /i 	Performs case-insensitive matching
//  /u 	Enables Unicode support (new 2015)


// Regular expressions are often used with the string methods:

const textOne = "Hello good mornning hello good evening bye";

//A.) match(regex) : Returns an Array of results
const matchRegex = textOne.match(/hello/);
console.log(matchRegex);
/*
[
  'hello',
  index: 20,
  input: 'Hello good mornning hello good evening bye',
  groups: undefined
]
*/

// (Unnamed) Capturing Groups
const unnamedGroups = textOne.match(/(good)/gi);
console.log(unnamedGroups);                             // [ 'good', 'good' ]

// named Capturing Groups (Populating groups)
const namedGroups =textOne.match(/(?<greet>good)/);
console.log(namedGroups);
/*
[
  'good',           //This is Complete Match,represents total string found by your entire regex pattern.
  'good',           // This is Captured Group,represents specific text caught inside parentheses (?<greet>good).
  index: 6,
  input: 'Hello good mornning hello good evening bye',
  groups: [Object: null prototype] { greet: 'good' }
]
*/

// Alternation (OR) : matches any of the alternatives separated with |
const alt = textOne.match(/evening|bye|good/g);
console.log(alt);                                     // [ 'good', 'good', 'evening', 'bye' ]



// B.) replace(regex): Returns a new String

const textTwo = "I like grapes, grapes tastes great";

//A.) Without the g flag (Replaces only the FIRST match)
const newText = textTwo.replace(/grapes/, "Mango");
console.log(newText);                                    // I like Mango, grapes tastes great

// B.)  With the g flag (Replaces ALL matches)
const newTwo = textTwo.replace(/grapes/g, "Pineapple");
console.log(newTwo);                                     // I like Pineapple, Pineapple tastes great


//C.) search(regex) : Returns the index of the first match work like indexOf()
const position = textTwo.search(/\w{6}/);                  // looking for 6 character word
console.log(position);                                     // 7


//  /u 	Enables Unicode support (new 2015)

const equation = "4 + 3 × 2  = 11";                       
const mathSymbols = equation.match(/\p{Math}/gu);

console.log(mathSymbols);
// Q: multi sign replace with * gives o/p + = but * not included 





