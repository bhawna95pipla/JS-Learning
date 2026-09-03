//1. Comparing Strings

// a. === (Strict Equality)The === operator checks if two strings are an exact match, character for character, including capital letters.
let word1 = "hello";
let word2 = "hello";
let word3 = "Hello";
 
console.log(word1 === word2);                                 // true
console.log(word1 === word3);                                 // false 

// b.localeCompare()This method compares strings based on alphabetical order. It returns a number
 let string1 = "apple";
 let string2 = "mango";

 console.log(string1.localeCompare(string2));              //-1 : The first string comes before the second
 console.log(string2.localeCompare(string1));              // 1 : The first string comes after the second.
 console.log(string1.localeCompare("apple"));              // 0 : The strings are identical.
 console.log(string1.localeCompare("Apple"));              // -1 


 //2. Case-Insensitive Comparison : To compare two strings without worrying about capitalization, convert both to lowercase first using .toLowerCase()
 let text1 = "Hello, How Are You??";
 let text2 = "hello, how are you??";
 
 let compare = text1.toLowerCase() === text2.toLowerCase();
 console.log(compare);                                     // true 


 //3. Replacing Substrings (replace()) : searches a string for a specific piece of text and exchanges it for a new one.By default, it only replaces the first match it finds.
 let text3 = "I like color blue and blue";
 let newText1 = text3.replace("blue", "purple");
 console.log(newText1);                                     // I like color purple and blue

 //replaceAll() :  to replace all matches 
let newText2 = text3.replaceAll("blue", "green");
console.log(newText2);                                      // I like color green and green


// 4. Concatenating StringsConcatenation simply means adding strings together
 let firstName = "John";
 let lastName = "Wick";

// a. Using + Operator
let fullName = firstName+ " " + lastName;
console.log(fullName);                                       // John Wick

// b. Using Template Literals : wrap the text in backticks (`) and insert variables inside ${}
let newName = `Hi ${firstName} ${lastName}`;
console.log(newName);                                        // Hi John Wick


//5. Modifying Strings : strings are immutable, means once a string is made, it cannot be changed directly. Every time we"modify" a string, JavaScript actually leaves the original alone and creates a brand-new string.
let greeting = "Hello";

//does NOT change the original 'greeting' variable
greeting.toLowerCase();
console.log(greeting);                                       // Hello

//To change it overwrite the old one
greeting = greeting.toUpperCase();
console.log(greeting);                                       // HELLO

//OR save it to a new variable 
let message = greeting.toLowerCase();
console.log(message);                                        // hello 








 
 
 
 

