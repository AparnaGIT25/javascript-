const user={
    username:"aparna",
    pass:"123",
    signedIn:true,

    getUserDetails:function(){
        console.log("got the details successfully")
        console.log(`the username is ${this.username}`)//this refers to current context
    }
}
console.log(user.username);
console.log(user.getUserDetails);

//constructor function
function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;
}

const userOne=new User("aparna",1,false)
const userTwo=new User("Archit",2,true)
console.log(userOne);
console.log(userTwo);
