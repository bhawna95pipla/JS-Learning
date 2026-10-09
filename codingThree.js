// Strings


// reverse the string having a sentence
let str = "Hello & welcome back";
let reverse = "";

for(let i=str.length-1; i>=0 ; i--){
    reverse = reverse + str[i];
}

console.log(reverse);                            // kcab emoclew & olleH [revrser string & every word in string also]


// reverse the string with single word
let string = "Hello";
let reverseStr = "";

for(let i=string.length-1; i>=0 ; i--){
    reverseStr = reverseStr + string[i];
}

console.log(reverseStr);                                  // olleH


// Simple method to reverse the string 

let str2 = "Morning";
let reverse2 = str2.split("").reverse().join("");
console.log(reverse2);                                    // gninroM


// reverse 1-2 character in as string

let str3 = "bhawna";
let newStr = str3.split("");

let temp = newStr[0];
newStr[0] = newStr[5];
newStr[5] = temp;

console.log(newStr.join(""));                       //  ahawnb


// reverse 2 words in a string 

let strNew = "Hello & welcome back";
let newStr2 = strNew.split(" ");

let temp2 = newStr2[0];
newStr2[0] = newStr2[3];
newStr2[3] = temp2;

console.log(newStr2.join(" "));                         // back & welcome Hello


// make 1st and last letter of every word in string as Uppercase 

let str4 = "hello world from javascript";
let newStr4 = str4.split(" ").map(word =>{
   return word[0].toUpperCase() + word.slice(1,-1) + word.at(-1).toUpperCase()
    }).join(" ");

console.log(newStr4);                             // HellO WorlD FroM JavascripT


// Palidrome : word that read same from start and end EX level, racecar, mam , madam, 1221

let word = "level";
let revWord = "";

for (let i=word.length-1; i>=0 ; i--){
    revWord += word[i];
}
if(word === revWord){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}                                                                 // Palindrome

// another way to find Palindrome

let word2= "racecar";
let revWord2 = word2.split("").reverse().join("");
console.log(word2===revWord2);                                    // true


// count total no of vowels in a string

let line = "Let's go for shopping";
let count = 0;

for (let c of line){
    if("aeiou". includes(c.toLowerCase()))
        count++;
}
 console.log(count);                                        // 5


// count total consonants in a string

let line2 = "Let's go for shopping";
let count2 = 0;

for (let c of line2){
    if(/[a-z]/i.test(c) && !"aeiou".includes(c.toLowerCase()))
        count2++;
}
 console.log(count2);                                        // 12


 // total no of letters in a string 

let line3 = "Let's go for shopping";
let count3 = 0;

for (let c of line3){
    if(/[a-z]/i.test(c))
        count3++;
}
 console.log(count3);                                        // 17 
 

 // occurance of a particular letter in a string 

 let line4 = "Let's go for shopping";
let count4 = 0;

for (let c of line4){
    if(c === "g")
    count4++;
}
console.log(count4);


// Validating if a number is Armstrong number : 153 : 1+27+125 =153

const num =153;
let temp5 = num;
let sum = 0;

while(temp5>0){
   digit = temp5%10;
   sum += digit**3;
   temp5 = Math.floor(temp5/10); 
}
console.log(sum === num);                                  // true 


// generate random number : be default JS generate random numver between 0 not including 1
const numb = Math.random();
console.log(numb);                                      // 0.05783569065758476

// generate number 0- 20 with decimal
const randomNum = Math.random()*20;
console.log(randomNum);                                // 19.813306591814616


// generate number 0- 20 excluding decimal value we use Math.floor()
const abc = Math.floor(Math.random()*15);
console.log(abc);                                          // 10


let value = "$ 199.09"
let parsenum = Number(value.replace("$",""))
console.log(parsenum);                                      //199.99


// current date 
let date = new Date();
console.log(date);                         // 2026-10-07T14:44:05.525Z



// current date wihtout time in more readable format

let date2 = new Date();
console.log(date2.toDateString());            // Wed Oct 07 2026