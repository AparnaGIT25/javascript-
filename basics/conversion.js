let score="33abc"
console.log(typeof(score))
let valueInNumber= Number(score)
console.log(typeof(valueInNumber))
console.log(valueInNumber)
/*"33"=>33
"33abc"=>NaN
true=>1
false=>0
*/

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
/*1=>true
0=>false
""=>false
"aparna"=>true
*/
/*********************operations*************************
 string to number conversion is a bit confusing lets see why?
 */
console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)//o/p=>122 ,when string is first then all are treated as string
console.log(1+2+"3")//o/p=>, if arithmatic operation is first then it is solved and then converted into string