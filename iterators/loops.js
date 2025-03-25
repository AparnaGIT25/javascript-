//for
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}
let myArr=["flash","batman","spiderman"]

for(let i=0;i<myArr.length;i++){
    const element=myArr=[i];
    console.log(element);
}

//Break and Continue
for (let i = 1; i < 20; i++) {
    if (i==5) {
        console.log("5 detected")
        break;//control flow is out , after 5 no further numbers will be printed
        
    }
    console.log(`value of i is ${i}`);

}

for (let i = 1; i < 20; i++) {
    if (i==5) {
        console.log("5 detected")
        continue;//control flow is in, after 5 , others will be printed
        
    }
    console.log(`value of i is ${i}`);

}