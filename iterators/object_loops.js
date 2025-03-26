// For in loop can be used for object iteration
const myObj={
    js:"javascript",
    cpp:"cplusplus",
    py:"Python"

}
//using for in loop
for(const key in myObj){
   // console.log(key);->For printing the keys only
   //console.log(myObj[key])// this will print the values
   console.log(`${key} shortcut is for ${myObj[key]}`) 
}

//lets see for in loop for arrays
const programming=["java","cpp","py","Go"]
for(const val in programming){
    console.log(val);//=>this will print the keys(0,1,2,3) by default not the values
    //for printing the values->
    console.log(programming[val]);
}

//REMEMBER-> maps are not iterable so dont use loop in that