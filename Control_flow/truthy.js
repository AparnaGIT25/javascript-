const userEmail="aparna.ai"
if(userEmail){
    console.log("got user email")
}else{
    console.log("email not found")
}
//o/p=> Got user email ->here a string is treated as true value
// there are 7 falsy values and except for that all are treated as true values
/*
FalsyValue	Explanation
false	    The boolean false itself
0	        The number zero
-0	        Negative zero (rarely used)
0n	        BigInt zero (BigInt(0))
""   	    An empty string ('', "", or )
null	  Represents "no value"
undefined	A variable without a value
NaN	        Not a Number
*/
//some special truthy values
//"0",'false'," ",[],{},function(){}

// to detect if an object is empty
const emptyObj={}

if(Object.keys(emptyObj)===0){
    console.log("object is empty")
}
/*
Nullish Coalescing Operator (??) in JavaScript
The nullish coalescing operator (??) is used to provide a default value when a variable is null or undefined. It does not consider false, 0, or "" as nullish.
*/
//acts as safety check for "null"
let val1;
//val1= 5 ?? 10
//val1= null ?? 10
val1= undefined ?? 15
console.log(val1)// o/p->15

//TERNIARY OPERATOR
/*The ternary operator is a shorthand for if...else statements. 
It is used to evaluate a condition and return one of two values based on whether the condition is true or false.
*/
//syn->
//condition ? expression_if_true : expression_if_false;
const iceTeaPrice=100;
iceTeaPrice>=80? console.log("you can buy"):console.log("do not buy it")


