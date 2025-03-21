const score=400
console.log(score)

const balance=new Number(100);// treats as objects
console.log(balance)

console.log(balance.toString().length)//converting into string so that we can use the string properties too......
console.log(balance.toFixed(1))// used for making precision that upto what decimal value will the user see ,used in e-commerce

const otherNumber=23.678
console.log(otherNumber.toPrecision(3))

const hundreds= 100000
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++maths++++++++++++++++//

console.log(Math)
console.log(Math.abs())// gives absolute value
console.log(Math.round(4.6))//used to round-off
console.log(Math.min(4,3,2,5))
console.log(Math.max(6,8,5,1))

//math.random concept=>important
console.log(Math.random());//gives value between 0 and 1
console.log((Math.random()*10)+1)//makes sure it becomes a whole number,+1 makes ure it avoids the 0 case
console.log(Math.floor(Math.random()*10)+1)//round off to the floor value

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)//this formula helps to get the number between the desired range
