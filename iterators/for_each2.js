//special cases for forEach loop
const coding=["js","ruby","swift","Go"]

const values=coding.forEach(()=>{
    //console.log(item);
    //return item//=>always return undefined we cannot apply conditional to our array using this syntax
    //for each does not return values
})

//Solution=>use filter
const myNum=[1,2,3,4,5,5,6]
const val=myNum.filter(()=>{
    return myNum>4 // never forget to use return as it is an explicit return
})
//Another way
const newNums=[]

myNum.forEach((num)=>{
    if(num>4){
        newNums.push(num);
    }
})
//map function
const Myval=[1,2,3,4]
//const newval=Myval.map(function(num){return num+10});
//this is chaining below and in this the value(in array)obtained by one function is passed onto another 
const newval=Myval.map((num)=>{return num*10}).map((num)=>{return num=num+1})
console.log(newval)
