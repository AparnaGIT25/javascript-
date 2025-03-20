const name="aparna "
const repoCount= 50
console.log(name+repoCount+" value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

//string stores as key:value pairs and its an object
console.log(name[0]);// prints the letter a

const gameName = new String("BatMan")
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString= gameName.substring(0,4) // remember that 4 is exclusive and negative values are not respected
console.log(newString);

const anotherString= gameName.slice(-5,4)// negative value can be given and it starts from end
console.log(anotherString);

//trim is used to remove starting and end spaces , used for whitespace characters 

const newStringOne="    apu     "
console.log(newStringOne)//prints with spaces
console.log(newStringOne.trim())//prints without spaces

const url= "https://aparna.com%20rai"
console.log(url.replace('%20','-'))
