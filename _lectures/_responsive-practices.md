---
title: 'Responsive Practices'
lab: true
studio: false
week_posted: 4
---  

Fixed layouts (those that use pixel values to define layout elements) will look and behave the same no matter the device or size of the view port. Dynamic layouts use elements with fluid widths (using percentages instead of pixels) and media queries. This allow us to build for the web and anticipate for different devices and viewport sizes.

![]({{site.url}}/files/smiley.jpg)  

[HTML snippet]({{site.url}}/files/smiley.txt)

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

## Common Breakpoints

~~~
320px (small mobile device),
480px (medium mobile device),
768px (tablet),
992px (small desktop),
1200px (large desktop)
~~~

## Setting The Scale For Mobile Using Meta Tags

~~~
<meta name="viewport" content="width=device-width, initial-scale=1">
~~~
