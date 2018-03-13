---
title: 'Intro To Javascript'
lab: true
studio: false
week_posted: 8
---  

Use Javascript to make a webpage more interactive. So far we have been focusing on styling webpages with CSS (aesthetics, visibility, etc). Javascript is a language that allows us to compute and perform actions within a website. Most interactive libraries on the web are based in javascript. JS is great for watching for events in the browser and react accordingly (more on that later).

First the basics.


## The JS Console
We will use Chrome's javascript console to execute javascript. Utilizing the console is also very important in tracking the behaviour, and debugging your code.

![]({{site.url}}/files/console.png)


## Values

At the root of any programming language, are value types, as well as way to organize those values. The basic value types are as follows:

`Number`  
`String`  
`Boolean`  


## Arithmetic

You may combine, manipulate values to create a desired output using arithmatic.

`+` to add two values  
`-` to sbtract  
`/` to divide  
`*` to multiply  
`%` to find the remainder after division of numbers





## Storing Values

To hold values, javascript uses varables. Variables may not contain spaces, and may not start with a number

~~~
var variableName = value;
~~~

~~~
var five = 5;
var two = 2;

conosle.log(two * five);
// → 10
~~~

Often, you will want to keep track of a value that will change over time.

~~~
var myStudentDebt = 800;
myStudentDebt = myStudentDebt - 100;

console.log(myStudentDebt);
// → 700
~~~


## Arrays

We may hold a list of values using an array. Array values are contained within two brackets (`[]`) and are separated by a comma (`,`).

~~~
var myLuckyNumbers = [ 4, 7, 9, 18 ];

console.log(myLuckyNumbers);
// → [ 4, 7, 9, 18 ]
~~~

To access a value within an array, append the desired index number to the variable name;

~~~
console.log(myLuckyNumbers[1]);
// → 7
~~~

You'll notice that even though we called the value with a No. "1" index, the array's the second value was returned. That's because array's are indexed starting at 0, not 1. This is an important concept to remember!

~~~
array    [ 4, 7, 9, 18 ]
index    --0--1--2--3---
~~~


## Functions

Functions allow us to break our code down into modules, and help make our code easier to use and read. Functions are defined with the following syntax:

~~~
var addFive = function(x) {
	return x + 5;
}
~~~

OR

~~~
function addFive(x) {
	return x + 5;
}
~~~

I prefer the second method. You may invoke a function like this:

~~~
addFive(5);
~~~

There are a few cardinal things to remember about functions:

1. Functions are not run immediately after they are defined, they must be invoked to return a value.
2. Functions may take multiple arguments
3. Variables declared within functions are not accessable outside of that function


## Comparisons

Compare two numbers using the following. The result of a comparison will equal a boolean (true or false)

`<` "less than"  
`>` "greater than"  
`>=` "greater than or equal to"  
`<=` "less than or equal to"  
`==` "equal to"  
`!=` "not equal to"  

~~~
console.log(5 < 3);
// → false

console.log(5 != 3);
// → true

console.log(false == 0);
// → true
~~~


## Conditional Statements

A conditional statement takes a condition, and executes a block of code only if the condition is true. For example:

~~~
var myAge = 27;

if (myAge > 21) {
	console.log("party time");
} else {
	console.log("no party time");
}
~~~


## Loops

Loops allow us to run a chunk of code X amount of times, until a condition is filled. the syntax is as follows:

~~~
for (statement 1; statement 2; statement 3) {
	code to be executed;
}
~~~

**Statement 1** is executed before the code on the inside of the loop is executed. This is where you define 'counter' variable.

**Statement 2** is the condition under which the code will run. When the this conditions is no longer true, the code inside the loop will no longer be executed.

**Statement 3** will run after each time the code within the loop is executed

~~~
var hamburgers = 0;
console.log(hamburgers);
// → 0

for (var i = 0; i < 10; i++ ) {
	hamburgers ++;
}

console.log(hamburgers);
// → 10
~~~

You may combine conditional statements with loops:  

~~~
console.log("how many licks to center of a tootsie pop?")

for (var licks = 0; licks < 3; licks++) {
	if ( licks == 3 ) {
		console.log("crunch!");
	} else {
		console.log(licks + 1);
	}
}
~~~


## Putting it All Together

Lets make our tootsie pop code a little more modular by making it a function, that takes a `numOfLicks` argument.  

~~~
function askMrOwl(numOfLicks) {
	for (var licks = 0; licks < numOfLicks; licks++) {
		if ( licks == numOfLicks ) {
			console.log("crunch!");
		} else {
			console.log(licks + 1);
		}
	}
}
~~~
