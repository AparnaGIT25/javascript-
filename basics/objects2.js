//singleton=>with the help of constructor
//const tinderUser=new Object() =>singleton
const tinderUser={} //non singleton
tinderUser.name="123abc"
tinderUser.age="sam"
tinderUser.isLoggedIn=true
//console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            first_name:"aparna",
            last_name:"rai"
        }
    }
}
console.log(regularUser.fullname.userFullName.first_name)

//merging objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. 
// It returns the modified target object.
const obj3=Object.assign(obj1,obj2)
console.log(obj3)

//the spreading method
const obj4={...obj1,...obj2}
console.log(obj4)

//we can print the keys and values of the objects but always remember that they will be of "array" datatype
console.log(tinderUser)
console.log(Object.keys(tinderUser))//output is of array datatype
console.log(Object.values(tinderUser))//output is of array datatype

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//returns true if isLoggedIn is there

//destructuring=>feature to extract values from objects (or arrays) into variables with clean syntax.

const course={
    name:"Aparna",
    price:"699",
    teacher: "aparna"
}
course
const {name,price:pc,teacher}= course
console.log(name)
console.log(pc)
console.log(teacher)

