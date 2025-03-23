//++++++++++++hoisting+++++++++++
//Hoisting is JavaScript's default behavior of moving declarations to the top of their scope (before code execution).

// Only declarations are hoisted, not initializations.
sayHeloo()//executes successfully!why?

/*Function Declarations are fully hoisted with their body.
So the JS engine moves the entire function to the top, making it available before its declaration in code.
*/

function sayHeloo(){//this is a function declaration
    console.log("hello")
}

thisfunc()//=>throws an error=>reference error

let store= function thisfunc(){//we stored a function so there will be no hoisting
    console.log("hey this is function!")
}

