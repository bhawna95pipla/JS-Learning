//1. find the longest word in the string 

let string1 = "Hello Welcome to javascript world";
let newString1 = string1.split(" ");
let biggestString = "";

for(let i=0; i< newString1.length; i++){
    if(newString1[i].length > biggestString.length){
    biggestString = newString1[i];
    }
}
console.log(biggestString);


//2. Reverse Each Word in a String

let str2= "Hello Welcome Back";
let word = str2.split(" ");
console.log(word);
let reverseWord= "";

for(let i=0; i< word.length; i++){
    for(let j=word[i].length-1; j>=0; j--){
           reverseWord = reverseWord + word[i][j];
    } 
    reverseWord += " ";
}
console.log(reverseWord);


//3. Find the First Non-Repeating Character

let str3 = "aabbbcdeee";


for(let i=0; i < str3.length; i++){
    let count = 0;
    for(let j=0 ; j< str3.length; j++){
        if(str3[i] === str3[j])
            count++ ;
        }
        if(count === 1)
            console.log(str3[i]);
    }


//4. Check Whether Two Strings Are Anagrams

let str4 = "race";
let str5 = "care";

console.log(str4.length === str5.length);

let newStr4 =str4.split("").sort().join("");
let newStr5 =str5.split("").sort().join("");

if(newStr4 === newStr5){
    console.log("Strings are anagrams");
}
else{
    console.log("Strings are not anagrams");
}


