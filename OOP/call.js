/* 
The call() method in JavaScript is used to invoke a function with a specified this value and arguments.
 It allows function borrowing, meaning one object can use a method belonging to another object.
call() invokes a function with a specific this value.
*/
function setUsername(username){
    //complex DB calls'
    this.username=username
    console.log("called")
}
function createUser(username,email,pass){
    setUsername.call(this,username);
    this.email=email;
    this.pass=pass;

}
const obj=new createUser("aparna","abc2gmail.com","1234");
console.log(obj)

