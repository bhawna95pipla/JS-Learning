// Modules are code blocks that can export and/or import functions and values.
// Modules let you to break up code into separate files
//A module file is a .js file using import / export.
//A module script is an HTML script using import / export.
//Modules use export and import to interchange functionalities between modules.


// Module export 

// Method 1 : name and age exported individually:
export const name = "John";
export const age = 30;

// Method 2 : name and age exported at once at the bottom:
const name = "John";
const age = 30;

export {name, age};


// Modules Import : can be imported in two ways, based on if they are named exports or default exports.

// Method 1 : Named imports are constructed using curly braces: 
import {name,age} from "../oopsAndModules/module&export.js";

//Mehotd 2 : Default exports are not constructed with curly braces:
import message from "./message.js";

//Import names must match export names
//You can import multiple items at once
//You can rename them using as:
import {name as fristName} from "../oopsAndModules/module&export.js"


// Default import is the way to import the primary exported value from a module - the one that was exported 
// using export default.
// Default imports are the counterpart to default exports.