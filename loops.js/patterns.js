// // right angle triangle star pattern 
// let t = 5; // Size of the pattern

// for (let i = 1; i <= t; i++) {                   // outer loop controls no of rows
//     let row = "";
//     for (let j = 1; j <= i; j++) {               // inner loop controls no of star in each rows 
//         row += "* ";
//     }
//     console.log(row);
// };



// //inverted right angle triangle star pattern 
// console.log("new pattern");


// for(let i=5; i>=1; i--)
// {
//     let row= "";
//     for(let j=1; j<=i; j++)
//     {
//         row += "* ";
//     }
//     console.log(row);    
// };



// diamond shape with stars
let z = 4;
for (let i = 1; i <= z; i++) {
    for (let j = 1; j <= z - i; j++) {
        process.stdout.write(" ");     //write is a  method used to send raw data directly into that output stream. In this case, it sends a string containing exactly one space
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        process.stdout.write("*");
    }
    console.log();
};

for (let i = z - 1; i >= 1; i--) {
    for (let j = 1; j <= z - i; j++) {
        process.stdout.write(" ");
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        process.stdout.write("*");
    }
    console.log();
};

// Diamond shapw with 5 lines 
let line = 5;
for(i=1; i<=line; i++)
{
    for(let j=1; j<=line-i; j++)
    {
       process.stdout.write(" ");   
    }
    for(let j=1; j<= 2*i-1; j++)
    {
        process.stdout.write("*");
    }
    console.log();   
}

for(let i=line-1; i>=1; i--)
{
    for(let j=1; j<=line-i; j++){
        process.stdout.write(" ");
    }
    for(let j=1; j<= 2*i-1; j++)
    {
        process.stdout.write("*");
    }
    console.log();  // this take to next line 
};







