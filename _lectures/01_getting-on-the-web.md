---
title: 'Getting On The Web'
studio: false
lab: true
week_posted: 1
---

## Dev Environment Setup  

First, we will make sure we have all of the applicatoins neccessary to work.


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

Now that we have our repositories set up, let's build the structure for the class. Download the [boilerplate](https://github.com/). Your site should have the following structure:

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