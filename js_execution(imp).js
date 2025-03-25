//very important for interview
/* JAVASCRIPT EXECUTION CONTEXT
=>Global execution context,allocated in "this", for browser this refers to the window object
=>Function execution context
=>eval execution context
{}=>
    1->Memory creation phase=>Allocates memory for the variables and functions
    ->Variables are set to "undefined" and functions are stored in the stack

    2->Execution phase=> Runs the code line by line
*/
let val1=20
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
//lets see how the code runs 
/* step1=>Global Execution(by this keyword)

step2=> Memory Phase(just stores the variables)
        val1->undefined
        val2->undefined
        addNum->definition
        result1->undefined
        result2->undefined 

step3=>Execution phase=>
    Val1=>20
    Val2=>5
    addNum=>this is very imp as =>Every time a function is called, 
    JavaScript creates a new Function Execution Context (FEC) inside the call stack. 
    



