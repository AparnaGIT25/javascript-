function sayCityName(){
    console.log("jaipur")
    console.log("delhi")
    console.log("UP")
}
//sayCityName=>function reference
//sayCityName()=>Execution
function addNumbers(number1,number2){//2 parameteres
    console.log(number1+number2);
}
const res=addNumbers(3,4);//2 arguments, output will be 7
console.log(res)// the output will be undefined**important

function addNumbers(number1,number2){
    let res= number1+number2;
    return res
}
console.log(res)//now the output will be 7

function loginUserMessage(Username){
    if(Username===undefined){
        console.log("please enter a username");
        return

    }
    return `$ {Username} just logged in..`
}
console.log(loginUserName("aparna"))
