// for in loop read key for a property 

//Example 1: 
const user ={
    name: "Sam",
    age: 30,
    city: "delhi"
};

for(let property in user)
{
    console.log("Key : ", property);
    console.log("Key Value : ", user[property]);
};


//Example : 2

const toy= {
    type: "car",
    color: "red",
    type2: "bat",
    color2: "green"
};
for(let info in toy)
{
    console.log("key : ",info);
    console.log("key value : ", toy[info]);
};
