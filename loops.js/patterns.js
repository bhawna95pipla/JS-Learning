
// right angle triangle star pattern 
let n = 5; // Size of the pattern

for (let i = 1; i <= n; i++) {                   // outer loop controls no of rows
    let row = "";
    for (let j = 1; j <= i; j++) {               // inner loop controls no of star in each rows 
        row += "* ";
    }
    console.log(row);
};



//inverted right angle triangle star pattern 
console.log("new pattern");


for(let i=5; i>=1; i--)
{
    let row= "";
    for(let j=1; j<=i; j++)
    {
        row += "* ";
    }
    console.log(row);    
};


