//primitive (call by value)
//7 types:string,number,boolean,null,undefined,Symbol(used for making unique),BigInt

//Non-primitive type(reference type)
// Array, Objects, Functions

//javascript is a dynamically typed language as data type will automatically be assigned at the time of compilation of code execution//
/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 stack memory:
              used for primitive data types
 
 heap memory:
              used for non primitive type(reference)
       */
let myName= "Aparna"
let AnotherName=myName //pass by value so changes are done in the copy not in the original object
AnotherName="hey_aparna_here"

console.log(myName)
console.log(AnotherName)

let userOne ={
    email:"user@google.com",
    upi:"23@ybl"
}
let userTwo= userOne
userTwo.email="aparna@gfmail.com" // pass by reference =>the changes are done within the object not in the copy
console.log(userOne.email)
console.log(userTwo.email)




