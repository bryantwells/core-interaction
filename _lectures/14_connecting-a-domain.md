---
title: 'Connecting A Domain To Github'
lab: true
studio: true
week_posted: X
---  

We can connect our blogs websites to a new domain using github and a few special settings / files. Will we do this by creating a new github repo for your final project / blog inside of our preexisting git repo 🤯 and then connecting that domain to your github using a CNAME file.

## Step 1: Create A New Repo

First [create a new repo](https://github.com/new) (without a README!) on github. Name it appropriately (e.g: 'ci-studio', or 'whatever-your-theme-is').

Alright, back to your local files. Your class folder structure should look something like this:

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

Navigate to your core-interaction **studio** folder on your computer using terminal:

~~~
cd /path/to/core-interaction/site/studio
~~~

Then initialize a new github repo within this folder by running this command in the same terminal window. Make sure to swap out 'username' and 'repo' in the URL for your *actual* username and repo name:

~~~
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin master
~~~


## Step 2: Add CNAME File 

Alright, your studio files should be up on git, and your studio folder's index.html should be at the root of that repository.

Make a new file in your studio's root folder with a filename of `CNAME` and add your domain info inside:

~~~
my-theme-site.com
www.my-theme-site.com
~~~

Now, add and push the changes in your local repo to github:

~~~
git add .
git commit -m 'add CNAME file'
git push origin master
~~~

## Step 3: Configure Google Domains DNS Records

Open up a browser and go to https://domains.google.com/registrar . Head to the “Configure DNS” tab and scroll to the “Custom resource records” section at the bottom of the page.

![](/files/g-dns.png)

Add two `@` type A Records that point to the GitHub IP's: `192.30.252.153` and `192.30.252.154` and one `www` CNAME record that points to your `USERNAME.github.io` url

![](/files/g-records.png)

Your site should now be live at your given domain!

