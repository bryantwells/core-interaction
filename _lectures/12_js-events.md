---
title: 'Javascript Events and the DOM'
lab: true
studio: false
week_posted: 8
---  

## The DOM

![](http://files.bryantwells.com/htmltree.gif)

> With the object model, JavaScript gets all the power it needs to create dynamic HTML:
>
> * JavaScript can change all the HTML elements in the page
>
> * JavaScript can change all the HTML attributes in the page
>
> * JavaScript can change all the CSS styles in the page
>
> * JavaScript can remove existing HTML elements and attributes
>
> * JavaScript can add new HTML elements and attributes
>
> * JavaScript can react to all existing HTML events in the page
>
> * JavaScript can create new HTML events in the page

## Document Object Methods & Properties  
When an HTML document is loaded into a web browser, it becomes a document object. This object comes along with various properties, and functions (called *methods* with the goal of manipulating elements within the document object.

### Greatest Hits
The following are the document methods we will be using today, and those that are used often in a typical webpage.

| Method | Description |
|--------|-------------|
|`document.body`| Sets or returns the document's body (the `<body>` element)|
|`document.documentElement`| Returns the Document Element of the document (the `<html>` element) |
|`document.getElementById()`| Returns the element that has the ID attribute with the specified value |
|`document.querySelector()`| Returns the first element that matches a specified CSS selector(s) in the document |
|`document.querySelectorAll()`| Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document |
|`document.createElement()`| Creates an Element node |

For a full list of DOM properties and methods, check out [W3 Schools](https://www.w3schools.com/jsref/dom_obj_document.asp)

## Element Oject Methods & Properties

Just like the Document Object itself, elements within the Document Object come with some handy methods and properties for use in JS.

### Greatest Hits
The following are the element methods we will be using today. theres alot [more!](https://www.w3schools.com/jsref/dom_obj_all.asp)

| Method | Description |
|--------|-------------|
|`element.addEventListener()`| Attaches an event handler to the specified element |
|`element.appendChild()`| Adds a new child node, to an element, as the last child node |
|`element.removeChild()`| Removes a child node from an element |
|`element.className`| Sets or returns the value of the class attribute of an element |
|`element.style`| Sets or returns the value of the style attribute of an element |


## Event Listeners

Event listeners allow us to run a chunk of code, dependent on the behaviour of elements within the Document. We can 'listen' to any element for clicks, hovers, scrolls, keyboard presses, media events (play, pause, etc) and much [more](https://developer.mozilla.org/en-US/docs/Web/Events)  

Today we will focus on `click`

For example, the syntax for attaching an event listener to an object is as follows:

~~~
element.addEventLister('event', listener)
~~~

Often, that listener will take the form of an *anonymous function*. We implement that syntax like this:

~~~
var element = document.getElementById('my-element');
element.addEventListener('click', function() {
	// some code here
});
~~~

## Manipulating CSS Via Javascript
We can change the `style` attribute of an element like so:

~~~
element.style.backgroundColor = 'red';
~~~

Go to [W3 Schools](https://www.w3schools.com/jsref/dom_obj_style.asp) for a complete list of style properties.


## Refereneces
[Document Object Methods & Properties](https://www.w3schools.com/jsref/dom_obj_all.asp)  
[Element Oject Methods & Properties](https://www.w3schools.com/jsref/dom_obj_all.asp)  
[List of Events](https://developer.mozilla.org/en-US/docs/Web/Events)  
[List of Style Properties](https://www.w3schools.com/jsref/dom_obj_style.asp)  
[Eloquent JS: The Document Object Model](http://eloquentjavascript.net/13_dom.html)
