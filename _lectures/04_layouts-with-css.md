---
title: 'Layouts with CSS'
lab: true
studio: false
week_posted: 3
---  

Download the [template]({{ site.url }}/files/03_pulp-fiction-layout.zip)

### Topics covered

1. Sharing resources across documents
2. Creating Colum-Based layouts with HTML and CSS  
3. Positioning in text and image based layouts  
4. Introduction to Flexbox



## Spacing Quirks with HTML

You will see that inline-block elements naturally have a space between them. That's not so great for calculating and creating layouts. One way around this is to reduce the `font-size` property of the wrapper element to `0`.  This will cascade down on all elements nested within the wrapper, so we will need to re-set the font-size property for all elements on the interior of that wrapper.

~~~
.wrapper {
    font-size: 0;
}
~~~



## Identifying Elements in the DOM

Name your divs in a way that is memorable, and can be easily understood.  

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


## Flexbox

Flexbox is a powerful tool for controlling layout order, sizing, and direction. It can get complex but it is easy to get started with. Just give a container div the following value.

~~~
display: flex
~~~

Children of a container with `display: flex;` are reffered to as 'flex items', the amount of space they take up can be controlled with the `flex` property. The `flex` property accepts a 1 digit number (at a minimum), or series of numbers. This determines the size of an item, *relative to it's siblings.* e.g...

~~~
flex: 1;
~~~

If all items have `flex `set to 1, space in the container will be distributed equally to all children. If one of the children has a value of 2, that item would take up twice as much space as the others.

Example of expanded shorthand for a flex item looks like this...

~~~
flex: 0 0 50%
~~~

which is short for...

~~~
flex-grow: 0;
flex-shrink: 0;
flex-basis: 50%;
~~~

The `grow` value defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up. 

The `shrink` value defines the ability for a flex item to shrink if necessary.

The `basis` value defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword.

Learn more about flexbox [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)



