class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`USERNAME IS${this.username}`)
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username);// refers to class User
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`)
    }
}
const obj=new Teacher("aparna","abc@gmail.com","123")
console.log(obj)
