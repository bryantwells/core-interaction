---
title: 'A-P-I'
studio: false
lab: true
week_assigned: 12
week_due: 14
---

In class we learned how to fetch data from an API, and alter a webpage based on the data we received. Now, choose an API from this [List of Public API's](https://github.com/toddmotto/public-apis) and use the data from the API to support a content within a post from your theme website.

Assess the data you can gather from this API and use it in a way that supports, enforces, or informs the content or design within your post/website.

~~~
// Insert your actual API request URL below
fetch('api.turtles.org/turtle?type=seaTurtle&color=purple')
    .then(function(response) {
        // Get the response and format it to JSON
        return response.json();
    })
    .then(function(jsonData) {
        // log the data
        console.log(jsonData);
    });
~~~

## References
* [Working With An API](https://ci.vv6.co/lectures/13_working-with-an-api)
* [List of Public API's](https://github.com/toddmotto/public-apis)
* [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
