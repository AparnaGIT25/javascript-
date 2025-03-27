/* 
The DOM (Document Object Model) in JavaScript is a programming interface that represents an HTML or XML document as a tree structure,
where each node corresponds to a part of the document (elements, attributes, text, etc.).
It allows JavaScript to interact with and manipulate web pages dynamically.

Key Concepts of the DOM
Nodes & Elements:

Everything in the DOM is a node (elements, attributes, text, etc.).

HTML elements are the most commonly manipulated nodes.

Accessing Elements:

document.getElementById("id") → Selects an element by its id.

document.getElementsByClassName("class") → Selects elements by class name.

document.getElementsByTagName("tag") → Selects elements by tag name.

document.querySelector("selector") → Selects the first matching element.

document.querySelectorAll("selector") → Selects all matching elements.

Modifying Elements:

element.innerHTML = "New Content"; → Changes the inner HTML.

element.textContent = "New Text"; → Changes only the text content.

element.style.color = "red"; → Changes CSS properties.

Creating & Removing Elements:

document.createElement("div") → Creates a new element.

parent.appendChild(child) → Adds an element to another.

parent.removeChild(child) → Removes a child element.

Event Handling:

element.addEventListener("click", function() {...}) → Attaches an event listener.

element.onclick = function() {...} → Another way to handle events.

Traversing the DOM:

element.parentNode → Accesses the parent node.

element.children → Gets child elements.

element.nextElementSibling → Gets the next sibling.
*/