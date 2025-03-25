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
