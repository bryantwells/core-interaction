---
title: 'Building With CSS'
lab: true
studio: false
week_posted: 2
---  

### Topics covered

1. Building an Index  
2. HTML5 semantic elements  
3. CSS display properties  
4. CSS box model  
5. CSS positioning  


Download the [template]({{ site.url }}/files/02_building-with-css.zip) to get started. It should look like this:  

~~~
| 2_building-with-css/
|--- index.html
|--- assets/
|--- --- css/
|--- --- media/
~~~

Utilize this file structure for all of your projects, external assets should be grouped within the same directory. You should always name the main html file in a directory 'index.html'.



## Elements in HTML5

Semantic elements in HTML5 allow us to more accurately describe the meaning of an element. Using tags appropriately helps collaborators, web crawlers, and screen-readers better understand the content on a page. Outside of that, using semantic markup gives you more flexibility in tareting elemenets in CSS and JS.  

We will be using the following elements in this weeks workshop:

`<header>` `<footer>` `<nav>` `<figure>` `<section>` `<video>` `<audio>`  




## The CSS Display Property

Link to your CSS styles using the following syntax:  

~~~
<link rel="stylesheet" type="text/css" href="styles.css">
~~~  

Within the CSS document, style an element using the following syntax:  

~~~
selector { property: value; }
~~~

The 'display' property allows you to control how/if an element is displayed. We are going to use the following display values:

~~~
display: block  
display: inline  
display: inline-block  
display: none
~~~




## The CSS Box Model

![](http://files.bryantwells.com/box-model.svg)

Often, you may want to add padding to an element without adding to the overall size of the element itself. We can control the way an element's size is calculated by altering the element's 'box-sizing' property.  

The default value for block level elements is `box-sizing: content-box`  

Use `border-box` to ensure padding is included when the `width` and `height` properties of a block level elemenet are declared.




## CSS Positioning

Positions in a web document are calculated from the top-left corner of the page.

The `position` property describes how an element is positioned. We will take a look at the following position properties:  

~~~
position: static
position: relative
position: absolute  
position: fixed
~~~

You can use position values and set the `top` `right` `bottom` and `left` properties to position an element.

#### Position: Static
This is the default value for an element in the DOM. Nothing special here. An element is placed right below or to the right of it's sibling.

#### Position: Relative
This value positions an element relative to **where it would normally be placed within the DOM**.

#### Position: Absolute
This value positions an element relative to its nearest **positioned** ancestor. That means relative to an ancestor that has a position value other than `static`. An Absolutely positioned element is also taken out of the normal flow of the DOM — it's siblings will be positioned as if they were unaware of it's existance.

#### Position: Fixed
This value positions an element relative to the viewport. So it will always stay in the same place, even if the window is scaled or scrolled. Elements with a fixed position are also taken out of the normal flow of the DOM.



## Resources

[Completed Workshop Files]({{ site.url }}/files/02_building-with-css_completed.zip)  
[HTML5 Elements](http://www.w3schools.com/html/html5_new_elements.asp)  
[Positioning Content](http://learn.shayhowe.com/html-css/positioning-content/)   




## Homework

[An Index]({{ site.url }}/assignments/an-index/)  
[A Collection]({{ site.url }}/assignments/a-collection/)
