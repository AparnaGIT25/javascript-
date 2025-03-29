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
```
#project 2 Solution
```javascript
const form = document.querySelector('form');
//  const height=parseInt(document.querySelector('#height').value);
//do not use this coz we want the values only when we click and if we write this there will an empty value as well as the page is loaded

form.addEventListener('submit', function (eve) {
  eve.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  //we get the value of the id height, but this value will be in string and we need to parse that in int.
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    //show thw BMI in results=>
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
