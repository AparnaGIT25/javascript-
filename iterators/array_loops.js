//for of loop
//The for...of loop in JavaScript is used to iterate over iterable objects, such as arrays, strings, maps, sets, and more

const arr=[10,20,30,40,50]
for (const val of arr){
    console.log(val);

}
const map=new Map()
map.set("U.S.A","United states of america")
map.set("fr","france")
map.set("In","India")
//Printing map by for of loop
console.log(map)
for(const [key,value] of map){// see the syntax of printing the key value pairs, squarer brackets is used
    console.log(key, "->", value)
}
//printing an object in the same way
const myObject={
    "game1":"ps5",
    "game2":"ps2"
}
for(const [key,value] of myObject){
    console.log(key, "->", value)
}
//always remember that Objects are not iterable in such a for of loop
//there are other ways for object iteration