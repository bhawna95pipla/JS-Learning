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


//5. Check Whether Two Strings Are Anagrams with other method


let str6 = "Bhawna Pipla";

//6. reversing whole string alos with changing word order

let reverse1= "";

for(let i=str6.length-1; i>=0 ; i--){
    reverse1 = reverse1 + str6[i];
}
console.log(reverse1);                // alpiP anwahB


//7. reverse the wordd order only

let newStr6 = str6.split(" ");

let temp = newStr6[0];
newStr6[0] = newStr6[1];
newStr6[1] =temp;

console.log(newStr6.join(" "));               // Pipla Bhawna


//8. revser only letters in word & not change words order
let word2 = str6.split(" ");
let reverseWord2= "";

for(let i=0; i< word2.length; i++){
    for(let j=word2[i].length-1; j>=0; j--){
           reverseWord2 = reverseWord2 + word2[i][j];
    } 
    reverseWord2 += " ";
}
console.log(reverseWord2);                    // anwahB alpiP 











