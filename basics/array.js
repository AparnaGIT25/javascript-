//javascript array are resizable
const arr=[0,1,2,3,4]
const myHero=["batman","superman","ironman"]
//JavaScript array-copy operations create shallow copies. Means they all have the same reference point 
const myarr= new Array(1,2,3,4)
console.log(myarr[1]);

//array methods
myarr.push(6);
myarr.push(7);
console.log(myarr)
myarr.pop()//remove last element

console.log(myarr.includes(9))//returns true or false
console.log(myarr.indexOf(3))//give the index of element, if the element does not exist the it returns -1

const  newarr=myarr.join()// binds array into a string , the newarr datatype is string now
console.log(newarr);//
console.log(typeof(newarr))// its string now

//slice, splice =>important difference
//slice does not change the original array whereas splice cuts the mentioned part of the original array
console.log(myarr.slice(1,3))// here 3 is exclusive
console.log(myarr.splice(1,3))//here 3 is inclusive
console.log(myarr)
