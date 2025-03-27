/* 
there can be two return type in DOM and they are alike to arrays(but not arrays)
They are:
1) HTMLCollection
2)Nodelist

=>HTMLCollection
Returned by
*/
document.getElementsByClassName("class");
document.getElementsByTagName("tag");
document.forms; // Example: document.forms[0]
//it does not have for each loop facility, for that we need to convert it to arrays and then loop it
//converting HTMLCollection into arrays
let holdval=document.getElementsByClassName("text")//returns HTMLCollection
//by Arrayfrom()
let newVal=Array.from(holdval)//converted into Array
newVal.forEach((item)=>{
    item.style.backgroundColor="green"
    item.style.padding=10
    //now you can apply the forEach loop efficiently
})

//NodeList
//returned by:
document.querySelectorAll("selector")
document.childNodes
/*
Properties & Features:

Static Collection (does NOT update automatically if the DOM changes).

Supports forEach() (if obtained via querySelectorAll).

Can be accessed like an array (nodelist[index]).

=>InnerContent and TextContent in Javascript
innerText
🔹 Returns only visible text (ignores hidden elements using display: none;)
🔹 Triggers reflow (calculates CSS visibility before retrieving text)
🔹 Slower due to extra processing

textContent
🔹 Returns all text, including hidden elements
🔹 Does NOT trigger reflow (faster performance)
🔹 Outputs raw text (ignores styling, line breaks, etc.)
*/
