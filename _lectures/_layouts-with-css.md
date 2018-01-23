---
title: 'Layouts with CSS'
lab: true
studio: false
week_posted: 3
---  

### Topics covered

1. Creating Colum-Based layouts with HTML and CSS  
2. Tricks for Aligning Divs  
3. Embedding iFrames  
4. Introduce CSS Transitions




## Spacing Quirks with HTML

You will see that inline-block elements naturally have a space between them. That's not so great for calculating and creating layouts. One way around this is to reduce the `font-size` property of the wrapper element to `0`.  This will cascade down on all elements nested within the wrapper, so we will need to re-set the font-size property for all elements on the interior of that wrapper.

~~~
.wrapper {
    font-size: 0;
}
~~~



## Identifying Elements in the DOM

We will name our column divs in a way that is memorable, and can be easily understood.  

*Remember, use classes on elements you will use more than once. There should only be one element per unique ID within a document*



## Nested Div's and Baselines

![structure of a line](https://i.stack.imgur.com/Ousrm.gif)

When we put an `<img>` in a `<div>` tag, there is some extra space at the bottom. We don't want that. This is because by default, element within a div are aligned by their baseline, leaving just enough room for descenders in typography.  

To git rid of this extra space we can set the target element's `vertical-align` property to `top` . The `vertical-align` property accepts the following values:  

~~~
vertical-align: baseline; /* default */
vertical-align: bottom;
vertical-align: center;
vertical-align: top;
~~~  

& more! See the full reference [here](http://www.w3schools.com/cssref/pr_pos_vertical-align.asp)



## iFrames

The `<iframe>` element allows you to embed a seperate HTML page, within your HTML page. The element takes a url or relative path as an argument.

~~~
<iframe src="https://www.google.com/maps/embed"></iframe>
~~~


## Transitions in CSS

Creating transitions with CSS is funa and easy just use the following syntax:

~~~
selector { transition: property speed }
~~~  

For example, if you wanted to change the background color of a `div` on hover, and have that transition take 2 seconds, you could declare the following:

~~~
div {
    background-color: red;
    transition: background 2s;
}

div:hover {
	background-color: blue;
}
~~~

[More on transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)  
[More on CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
