// Print number 1 to 10

for(i=1;i<=10;i++)
{
    console.log(i);
};


// print number from 10 to 1

for(i=10; i>=1; i--)
{
    console.log(i);
    
};


// print even and odd numbers from 1- 20

for(i=1;i<=10; i++)
{
    if (i%2==0)
    {
        console.log(i, " Is an Even Number");
    }
    else
    {
        console.log(i, " Is an Odd Number");
        
    }
    };


    // print.stdout.write vs console.log()

for (let i = 0; i < 3; i++) {
  console.log("X");
}
/* 
Output:
X
X
X
*/

for (let i=0 ; i<3; i++)
{
    process.stdout.write("X");
}
/* 
Output:
XXX
*/