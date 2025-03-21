const marvel_hero=["thor","spiderman","ironman"]
const dc_hero=["superman","batman"]
//ways to concatenate the two arrays

//marvel_hero.push(dc_hero)// this is not a good way to add as this will make dc_hero array as a seprate element
//console.log(marvel_hero)

//better way is to use spread
const all_hero=[...marvel_hero,...dc_hero]
console.log(all_hero)

const another_array=[2,3,4,[6,7],[7,8,9,[4,5]]]
const real_another_array=another_array.flat(3)//flatens the array when you provide the dip
console.log(real_another_array)

console.log(Array.isArray("aparna"))//checks whether aparna is array or not and return true or false
console.log(Array.from("aparna"))//converts aparna into array
console.log(Array.from({name:"aparna"}))//INTERESTING

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))//this also converts set of values into array
