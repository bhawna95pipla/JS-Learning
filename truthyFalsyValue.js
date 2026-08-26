// There are only 8 Falsy Values

if(false)console.log("It is falsy value");       // The boolean itself
if(0)console.log("It is falsy value");           // Number zero

if(-0)console.log("It is falsy value");          // Negative zero
if(0n)console.log("It is falsy value");          // BigInt zero

if("")console.log("It is falsy value");          // Empty string
if(null)console.log("It is falsy value");        // The absence of any value

if(undefined)console.log("It is falsy value");   // Unassigned variable
if(NaN)console.log("It is falsy value");         // Not a Number : string/0

// Since all above code lines has false value , so there won't be any result in terminal because 
// if condition in if statement has false result, JS skips the code run


// Anything that is not on falsy list is true , few examples below 

if (true) console.log("It's a truthy value1");      // Boolean keyword
if ({}) console.log("It's a truthy value2");        // Empty object

if ([]) console.log("It's a truthy value3");        // Empty array
if ("0") console.log("It's a truthy value4");       // Non empty string containing zero

if ("false") console.log("It's a truthy value5");   // Non empty string containing false
if (-25.25) console.log("It's a truthy value6");    // Any number +ve or -ve other then 0

if (Infinity) console.log("It's a truthy value7");  // +ve or -ve infinity 
if ("!!hi") console.log("It's a truthy value8");    // JS forces to converts hi to boolean then apply ! twice 

if ("!!0") console.log("It's a truthy value9");     // JS apply !(not) twice to 0 
if ("!!true")console.log("It's a truthy value10");   // JS forces to converts hi to boolean then apply ! twice 



