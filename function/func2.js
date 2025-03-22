/*rest operator in functions, suppose we need to pass of lot of values in the function (shopping cart in e-commerce)
then we need to use the rest operator*/
function calculateCartPrice(...num1){// use of rest operator
    return num1;
}
console.log(calculateCartPrice(200,600,200,600))//we can pass as many arguments as we want and will get an array
//another scenario
function calculateCartPrice(val1,val2,...num1){// use of rest operator
    return  [val1,val2,num1];//remember to add square brackets otherwise the val1 and val2 wont be returned
}
console.log(calculateCartPrice(200,500,600,400,600))
//200=>val1
//500=>val2
//after that everything will go inside the array coz of the rest operator
user={
    name:"Aparna",
    branch:"IT"
}
function handleObject(anyObject){
    console.log(`the username is ${anyObject.name} and its branch is ${anyObject.branch}`)
}
handleObject(user)
//passing arrays in functions
const myArray=[200,300,400];
function returnSecondArray(getArray){
    return getArray[1];
}
console.log(returnSecondArray(myArray))
