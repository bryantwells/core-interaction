---
title: 'Typewriter Workshop'
lab: true
studio: false
week_posted: 7
---  

## The Keydown Event Listener

The Keydown event is fired every time a letter on the keyboard is pressed. Use it like this:

~~~
document.addEventListener('keydown', function() {
	// some code here
});
~~~

## Key Codes

Every key on the keyboard has an associated value.  
[See a complete list of the values here](https://www.w3schools.com/charsets/ref_utf_basic_latin.asp)

## Objects in JS

Javascript allow us to associate properties and methods to a objects. the syntax is as follows:

~~~
var objectName = { key: value }
~~~

Like arrays, it can contain strings, numbers, and booleans:

~~~
 var car = {
	color: 'blue',
	seats: 2,
	convertable: true
}
~~~

It can also contain functions (called *methods*), as well as nested objects:

~~~
var car = {
	start: function() { console.log("VROOOOMMMM") }
	owner: {
		name: 'Calvin',
		age: 50,
	}
}
~~~

You can access properties in an object 2 ways. With bracket notation...

~~~
console.log( car['color'] );
// blue

console.log( car['start'] );
// function() { console.log("VROOOOMMMM") }
~~~

Or dot notation...

~~~
console.log( car.color );
// blue

car.start()
// 'VROOOOMMMM'
~~~



## Refereneces
[Key Code List](https://www.w3schools.com/charsets/ref_utf_basic_latin.asp)  
[W3 Object Reference](https://www.w3schools.com/js/js_objects.asp)
