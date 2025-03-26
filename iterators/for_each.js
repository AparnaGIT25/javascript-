//For each loop
const coding=["js","ruby","swift","Go"]
coding.forEach(function (item){
    console.log(item);
    
})
//using arrow functions
coding.forEach((item)=>{
    console.log(item);
})


function printMe(item){
    console.log(item);
}
coding.forEach(printMe);

//giving more parameters in for each loop
coding.forEach((item,index,arr)=>{//index and arr(arraylist) can also be parameters
    console.log(item,arr,index);

})
//Objects inside an array, very common and important as info always comes by this type from databases

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageFileName)//here item refers to each object in the array and we can access anything in that object

})

