//1. Sum of All Elements in an Array

let arr= [10,20,30,40,50,60];
let sum =0;

for(let i=0; i <arr.length; i++)
{
    sum += arr[i];
}
console.log("Sum :" , sum);


// 2. Finding largest element in array

let arrTwo =[12,30,15,110,70];
let largest = arr[0];

for(let i=1; i<arrTwo.length; i++){
    if(arrTwo[i] > largest){
        largest = arrTwo[i];
    }
}
console.log("largets number :", largest);


//3. Reverse the array [1, 2, 3, 4, 5] without using reverse()


let arrThree = [1,2,3,4,5,6]
let reverse = [];

for(let i=arrThree.length-1; i>=0; i--){
    reverse.push(arrThree[i]);
}
console.log("Reverse Array: ", reverse);


//4. Smallest element in array

let arrFour =[25, 10, 45, 5, 30];
let smallest = arr[0];

for(let i=1; i<arrFour.length; i++){
    if(arrFour[i] < smallest){
        smallest = arrFour[i];
    }
}
console.log("Smallest number :", smallest);


// 5. Count element without using length

let arr_Five = [10, 20, 30, 40, 50, 60, 70];
 
let count = 0;
for(let element of arr_Five){
    count++;
}
console.log(count);


//6. search element in an array

let search = 50;
let found = false;

for(let i =0 ; i < arr_Five.length; i++){
    if (arr_Five[i] == search){
        found = true;
        break;
    }
}
 if(found){
    console.log("Element found : ", search);
 }
 else{
    console.log("Element not found");
    
 }

