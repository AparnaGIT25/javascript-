class User{
    constructor(username,email,pass){
        this.username=username;
        this.email=email;
        this.pass=pass;
    }
    encryptPass(){
        return `${this.pass}abc`
    }
}
const obj=new User("aparna","apu.gmail.com","123")
console.log(obj)
console.log(obj.encryptPass());


//BEHIND THE SCENE(if we did not use the class method)
function User(username,email,pass){
    this.username=username;
    this.email=email;
    this.pass=pass;
}

User.prototype.encryptPass=function(){
    return `${this.password}abc`
}

const obj2=new User("aparna_rai",)
