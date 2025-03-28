##project 1
```javascript
console.log("aparna")
const buttons=document.querySelectorAll('.button');
//console.log(buttons)
const body=document.querySelector('body')
buttons.forEach(function(item){
  //console.log(item)
  item.addEventListener('click',function(eve){
    console.log(eve)
    console.log(eve.target)
    if(eve.target.id==="grey"){
      body.style.backgroundColor="grey"
    }
    if(eve.target.id==="white"){
      body.style.backgroundColor="white"
    }
    if(eve.target.id==="blue"){
      body.style.backgroundColor="blue"
    }
    if(eve.target.id==="yellow"){
      body.style.backgroundColor="yellow"
    }
  })

})