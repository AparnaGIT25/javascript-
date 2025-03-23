
//THIS KEYWORD
/*this refers to the object that is executing the current function.
It changes based on how the function is called.*/
console.log(this)//=>In browser -> Window object
const user={
    username:"aparna",
    price:99,
    welcomeMessage:function(){
        console.log(`${this.username} ,welcome to website`)//this refers to the user object
    }

}

function show() {
    console.log(this);
  }
  
 show(); // In browser -> Window object, but in strict mode it is undefined


//ARROW FUNCTION
//simpler way to write functions
const addTwo=(num1,num2)=>{//normal syntax
    return num1+num2;
}
console.log(addTwo(3,4));
//using the implicit return syntax 
const add = (a, b) => (a + b);
console.log(add(2, 3)); // Output: 5

const returnObj=()=>({name:"aparna"})//returning object

  