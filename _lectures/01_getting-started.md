---
title: 'Getting Started'
studio: false
lab: true
week_posted: 1
---


We use git so that we can have a carbon copy of our local repository (the folder/files stored on your computer) on the internet (in our case, GitHub’s servers).

The carbon copy on GitHub, is called a Remote Repository. 

In order to maintain this connection between repositories (and have changes reflected on our github pages), we need to make sure that whenever we make a change locally, we push them up to Github.


## Workflow

Your workflow for git should be as follows:



### 1. Check the status of local repo  


~~~
cd /path/to/folder/username.github.io
~~~
~~~
git status
~~~



### 2. Commit the Changes 

Before pushing the files to our remote repo, we need to prep them for a commit using the following command:  

~~~
git add .
~~~
~~~
git commit -m "[some message]"
~~~  




### 3. Push the commit to the remote repository

Finally, we push the contents of our local repo to the remote repo on Github using:  

~~~
git push origin master
~~~  



## Troubleshooting

If you ever get to a point where your git branch/repo seems irreversibly broken, delete you local repo (save any changes you would like to keep, elsewhere) and clone your repo again from your github account. 

~~~
git clone https://github.com/username/username.github.io.git
~~~ 