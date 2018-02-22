---
title: 'Advanced Layout'
studio: false
lab: true
week_posted: 5
---

Last class we covered sharing style resources across pages, and had an introduction to column-based layouts with flexbox. 
Today in class we'll review a little more about using flexbox and some general practices while going over some common layout patterns and how to build them. Download the [sketch file]({{ site.url }}/files/04_AdvancedLayout-WorkshopRef.sketch) and [boilerplate]({{ site.url }}/files/04_advanced-layout.zip)

![]({{ site.url }}/files/advanced-layout-ref.png)


---

## When To Use Flexbox
Flexbox is a really flexible system for allowing a container the ability to alter it's childrens width/height, and order, to best fill available space. Sometimes — other position methods are just fine (i.e.: static, block, inline-block). Flexbox particularly helpful when you're layout requires:

* Vertical alignment, esp. centering)
* Resonsive column or grid-like system
* The ability to change order/direction of items within a container without altering the markup (HTML)

---

## Align-Items & Justify-Content

Both the `align-items`, and `justify-content` properties will have an effect *only* when assigned to a **container, or 'flex-parent'**.  

The `align-items` property determines how a flex-item is positioned relative to it's **cross axis**. It accepts the following parameters:  

~~~
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: stretch;
align-items: baseline;
~~~

By default, the `align-items` property is set to `default` on a flexbox item.

Conversly, the `justify-content` property determines how a flex-item is positioned relative to it's **main-axis**. It accepts the following parameters:

~~~
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-around;
justify-content: space-between;
~~~

![]({{ site.url }}/files/flexbox.png)
  
---

## Flex-Wrap

The `flex-wrap` property determines wether items within a flex container wrap, or not. By default, flex containers will not wrap.

~~~
flex-wrap: wrap;
~~~

---

## More About The 'Flex' Property

We covered the basic shortahnd for the `flex` property last class. When we assign a number to the `flex` property, we are actually using a shorthand that assigns a default to three different properties: `flex-grow`, `flex-shrink`, and `flex-basis`. For example: when we set a flex item to have a flex property of 2...

~~~
flex: 2;
~~~

That item will automatically be assigned the following:

~~~
flex-grow: 2;
flex-shrink: 1;
flex-basis: auto;
~~~

### Flex-Grow

`flex-grow` defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

### Flex-Shrink

`flex-shrink` dictates what amount of the available space inside the flex container the item should take up.

### Flex-Basis

`flex-basis` defines the default size of an element before the remaining space is distributed. It can be a length (e.g. `20%`, `5rem`, etc.) or `auto`. The `auto` keyword means "look at my width or height property".

### Shorthand

Shorthand for setting these three values looks like this...

~~~
flex-grow: 0;
flex-shrink: 0;
flex-basis: 50%;
~~~

~~~
flex: 0 0 50%;
~~~

---

## Media Queries

Media Queries allow us to change the css a document uses with the `@media` selector.

~~~
@media (min-width: 700px) {
	body { width: 75% }
}
~~~

Any CSS within the following query with only be called when the browsers width is greater than 700px. We may combine expressions with the `and` operator.

~~~
@media (min-width: 700px) and (max-width: 1200px) { ... }
~~~

### Common Breakpoints

~~~
320px (small mobile device),
480px (medium mobile device),
768px (tablet),
992px (small desktop),
1200px (large desktop)
~~~

### Setting The Scale For Mobile Using Meta Tags

~~~
<meta name="viewport" content="width=device-width, initial-scale=1">
~~~


## References
* [Detailed CSS Positioning](https://learn.shayhowe.com/advanced-html-css/detailed-css-positioning/#position-property)
* [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Flexbox Froggy](http://flexboxfroggy.com/)
