// Break Statement : instantly stops the loop and jumps straight to the code written directly below the loop


// example 1
for(let i=1;i<=10;i++)
{
    console.log(i);
   if(i==5){
    break;
}  
};
 console.log("Loop stopped because it found out i=5");

//output : 1,2,3,4,5 ... Loop stopped because it found out i=5


// example 2
for( i=1;i<=10;i++)
{
    console.log(i);
   if(i == 11){
    break;
    console.log("loop broke");
     } 
};
console.log("value of i is", i );
// output : i=11


// Continue Statement :  It aborts only the current turn of the loop, skips any remaining lines of code 
// below it for this specific turn, and jumps straight to the next iteration

// example 1 : missing number 
for(let i=1;i<=5;i++)
{
    console.log(i);
   if(i == 2){
    continue;              // will skip the iteration for i =2 value & will move to next iteration 
   }
 console.log("i value is ", i);
   
};

/*
output:
1
i value is  1
2
3
i value is  3
4
i value is  4
5
i value is  5
*/


// example 2 :  Odd Numbers Only

for(let i=1;i<=10;i++)
{
    if(i%2 == 0)
    {
        continue;
    }
console.log("Odd value", i);
};

/*output
Odd value 1
Odd value 3
Odd value 5
Odd value 7
Odd value 9
*/


// return Statment :  It stops the loop, skips any code below the loop, and passes a final value back to whoever called 
// the function.


// Example 1: 
// for(let i=1;i<=10;i++)
// {
//     console.log(i);
//    if(i==4){
//     return;
//     console.log("Current value of i");
//     }
// console.log("i value", i );
// };
// console.log("loop exit after i", i);

 
// example 2: 

function testStatus(){
    console.log("hello before return");
    return "Stop here & exit";
    console.log("hello ater return");
}

console.log(testStatus());




// example 3

function addition(a, b){
    return a + b;
}
let calculate = addition(10,15);
console.log(calculate);


// Example 4 : strict keyword 

function addNumbers(num1, num2) {      // this line does 2 thing declare fcuntion and initalize also , so it recognize when called in log console 

    return num1 + num2; 
}
console.log(addNumbers(15, 25));

