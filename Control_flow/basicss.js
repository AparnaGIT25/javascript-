//if
const isUserLoggedIn=true
if(isUserLoggedIn){
    //some code
}
//<,>,<=,>=,==,===,!==
//=== ->checks both value and type
//!== -> strict inequality operator. It checks if two values are not equal in both value and type.
//  If they are different, it returns true; otherwise, it returns false.
const temperature=40;
if(temperature<50){
    console.log("less than 50");
}else{
    console.log("greater than 50");
}

const balance=1000
if(balance<500){
    console.log("less than 500")
}else if(balance<750){
    console.log("less than 750")
}else{
    console.log("less than 1200")
}

const userLoggedIn= true
const debitCard= true
const loggedInFromGoogle= false
const loggedInFromEmail= true

if(userLoggedIn && debitCard){
    console.log("allow to buy course")
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("welcome to website")
}