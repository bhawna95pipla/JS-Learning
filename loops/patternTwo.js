// triangle Pattern with increasing numbers 
let n=3;
let num =1;
for(let i=1; i<=n; i++){
    for (let j=1; j<=n-i; j++){
         process.stdout.write(" ");
    }
    for (let j=1; j<= 2*i-1; j++){                           // j loop decide how many time number will be printed 
     //process.stdout.write(String(num));                    //only accepts text (strings) or binary data (Buffers). It does not accept plain numbers.
     process.stdout.write(num + "");                         // Concatenating with an empty string converts it automatically
         num++ ;                                             // num++ deicde what number comes next
    }
    console.log();
}; 

// Daimond Pattern with number 
let rows=4;
let number =1;
for(let i=1; i<=rows; i++){
    for (let j=1; j<=rows-i; j++){
         process.stdout.write(" ");
    }
    for (let j=1; j<= 2*i-1; j++){          
     process.stdout.write(number % 10 + "");                         
         number++ ;                                             
    }
    console.log();
}; 

for( let i=rows-1; i>=1; i--){
     for (let j=1; j<=rows-i; j++){
         process.stdout.write(" ");
    }
    for (let j=1; j<= 2*i-1; j++){          
     process.stdout.write(number % 10 + "");                         
         number++ ;                                             
    }
    console.log();
}; 



// trinagle pattern with given string

let string = "helloworld";
let s=0;

for(let i=1; i<=4; i++){
    for (let j=1; j<=4-i; j++){
         process.stdout.write(" ");
    }
    for (let j=1; j<=i; j++){          
     process.stdout.write(string[s]+ " ");                         
         s++ ;                                             
    }
    console.log();
};
// try with split 
