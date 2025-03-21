//object literals
const mySym=Symbol("key1")// declaring a symbol
const JsUser={
    name:"aparna",
    "full_name":"aparna_rai",
    age:20,
    [mySym]:"mykey1",//using symbol as a key
    location:"jaipur",
    email:"aparna@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"]
}
console.log(JsUser.name)//this type is not used everywhere
console.log(JsUser["full_name"])//Full_name can be accessed by this method only,not by the above mentioned method
console.log(JsUser[mySym])//correct way to access symbol

JsUser.email="aparna@chatgpt.com"//changing key values
//Object.freeze(JsUser)//freezes the key's values of the object mentioned in bracket

JsUser.greeting=function(){
    console.log("hello js user");
}
console.log(JsUser.greeting)//returns a function reference
console.log(JsUser.greeting())
JsUser.greeting2=function(){
    console.log(`hello Js User ${this.name}`)//using string interpolation
}
console.log(JsUser.greeting2())

