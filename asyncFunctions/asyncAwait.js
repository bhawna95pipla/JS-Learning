// async keyword 

function normalFunction(){
    return "Hello";
};

async function asyncFcuntion() {
    return "Hello";
};
console.log(normalFunction());                                 // Hello
console.log(asyncFcuntion());                                  // Promise { 'Hello' } : this will wrap return value in promise


//async/await Keyword together 

async function userProfile() {
    console.log("Fetching data.........");

    const userName = await "Alice King";
    const age = await 35;

    console.log("User Profile Name :", userName);
    console.log("User age : ", age);
    console.log("Profile found");
};

userProfile();
/*
Fetching data.........
User Profile Name : Alice King
User age :  35
Profile found
*/


// async await with try catch finally

async function scanProfile(triggerError) {
    console.log("System Fetching data.........");
try{
    if(triggerError){
        throw ("Database error.... Timed out!!");
    }

    const userName = await "John Wick";
    const age = await 40;

    console.log("User Profile Name :", userName);
    console.log("User age : ", age);
    console.log("Profile scan done");
}
catch(error){
    console.log("Error found : "+ error);
    console.log("Try again in few minutes.....");
}
finally{
    console.log("User Profile run : Successfull")
}
};

scanProfile(false);
/*
System Fetching data.........
User Profile Name : John Wick
User age :  40
Profile scan done
User Profile run is Successfull
*/

// Exmaple 2:
async function weather() {
    let delhiWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(" 30 Deg");
        }, 2000);
    })
    let puneWeather = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("20 Deg");
        },4000);
    })
    console.log("fetching Delhi data......");
    let delhiW = await delhiWeather;
    console.log("Delhi weather : " + delhiW);

    console.log("fetching Pune data......");
    let puneW = await puneWeather;
    console.log("Pune weather : " +  puneW);

    return (delhiW, puneW);
}

async function radioReport() {
    console.log("Keep tunned to radio channel 98.4 to get weather report");
    
}
async function newFnc2() {
  console.log("Welcome to the control room");
  let a = await weather();
  let b = await radioReport();
}
newFnc2();
/*
Welcome to the control room
fetching Delhi data......
Delhi weather :  30 Deg
fetching Pune data......
Pune weather : 20 Deg
Keep tunned to radio channel 98.4 to get weather report
*/



