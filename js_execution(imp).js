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
    addNum(for result1)=>this is very imp as =>Every time a function is called, 
    JavaScript creates a new Function Execution Context (FEC) inside the call stack. 
    now in this FEC again memory phase and execution phase
    therefore for addNum=>
        memory phase->val1,val2,total=>undefined
        execution context->num1->20
                           num2->5
                           total->25
                           now this total will return Global execution context
                           Now this FEC will be deleted(imp)


lets see for result2
again a new FEC is created and executed in the same way as above and after execution it gets deleted.

//CALL STACK

JavaScript uses a Call Stack (LIFO) to manage function calls.

When a function is called, it’s pushed onto the stack.

When it finishes execution, it’s popped off the stack.
*/

function foo() {
    console.log("Inside foo");
}

function bar() {
    foo();
}

bar();
/*
Call Stack Flow
bar() is called → added to the stack.

bar() calls foo() → added to the stack.

foo() executes and is removed.

bar() finishes and is removed.
its always in LIFO manner

*/