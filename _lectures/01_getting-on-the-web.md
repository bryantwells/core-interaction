---
title: 'Getting On The Web'
studio: false
lab: true
week_posted: 1
---

Today in class we'll go through all the neccessary steps to getting a website online using github pages. First, we will make sure we have all of the applications neccessary to work.


### Install Git

- Open terminal ( applications → utilities → terminal ) and run the following command:
~~~
git --version
~~~
- If you don't have git installed already, it will prompt you to install it.


### Install Atom

- [Download the installer](https://atom.io/)


---


## Github Setup

We use git so that we can have a carbon copy of our local project (a.k.a. a *Local Repository*) on the internet (in our case, GitHub’s servers). The carbon copy on GitHub, is called a Remote Repository. We will be using github to host a website containing all of your work from the semester.

### Create a Github Account

- Go to the [Github Homepage](https://github.com/)
- Sign up with your Parson's email


### Create a Github Pages Repo

- Create a new repository on Github named `username.github.io`
- Add some basic information in the `README.md` file


### Create a New 'Core Interaction' Project Page

- Create another new repo named `core-interaction`
- Add some basic information in the `README.md` file
- Clone the repo to your computer. This will be where you publish all your work from, so put it in a place that makes sense!
~~~
cd class-folder/site
git clone https://github.com/username/username.github.io
~~~


---


## Folder Structure

Now that we have our repositories set up, let's build the structure for the class. Download the [boilerplate](/files/ci-boilerplate.zip). Your site should have the following structure:

~~~
📂 site/
│
├─ 📄 index.html 
├─ 🌸 favicon.ico 
│
├─ 📂 assets/
│  ├─ 📁 css/
│  └─ 📁 js/
│
├─ 📂 studio/
│  ├─ 📁 week-01/
│  └─ etc...
│
└─ 📂 lab/ 
   ├─ 📁 01_project-name/
   └─ etc...
~~~

---

## HTML Page Structure

The basic HTML bage structure is as follows:  

~~~html
<html>
	<head>
		<title>Hello, world.</title>
	</head>
	<body>
		Hello, world.
	</body>
</html>
~~~

Once you have downloaded the boilerplate and put it in the appropriate place — link to the studio and lab pages (as well as back to the home page)

---

## HTML Elements

These are some of the basic HTML elements:

~~~html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

<p>This is a paragraph</p>

To break<br />lines<br />in a<br />paragraph,<br />use the br element.

<hr />
The hr tag creates a horizontal line in an HTML page.

<em>This is emphasized text</em>

<strong>This is strong text</strong>

<!--This is a comment. Comments are not displayed in the browser-->

<ol>
    <li>This is an</li>
    <li>Ordered</li>
    <li>List</li>
</ol>

<ul>
    <li>This is an</li>
    <li>Unordered</li>
    <li>List</li>
</ul>

The <code>code element</code> example

The <em>em element</em> example

The <mark>mark element</mark> example

The <small>small element</small> example

The <strong>strong element</strong> example

The <sub>sub element</sub> example
 
The <sup>sup element</sup> example

<input type="radio" name="rad"> Radio input

<input type="checkbox"> Checkbox input

Text input <input type="text" value="default value that goes on and on without stopping or punctuation">

<a href="http://www.newschool.edu">This is a link</a>
~~~


## Push Changes to Github

In order to maintain this connection between repositories (and have changes reflected on our github pages), we need to make sure that whenever we make a change locally, we push them up to Github. Your workflow for git should be as follows:


### Check the status of local repo  

~~~
cd /path/to/site/folder
git status
~~~


### Commit the Changes 

Before pushing the files to our remote repo, we need to prep them for a commit using the following command:  

~~~
git add .
git commit -m "[some message]"
~~~  


### Push the commit to the remote repository

Finally, we push the contents of our local repo to the remote repo on Github using:  

~~~
git push origin master
~~~  


--- 


## Troubleshooting

If you ever get to a point where your git branch/repo seems irreversibly broken, delete you local repo (save any changes you would like to keep, elsewhere) and clone your repo again from your github account. 

~~~
git clone https://github.com/username/username.github.io.git
~~~ 