# React Based Static Portfolio Website

This is a simple generic portfolio website.

## Components And Structure

This website has the following components: 

* Sidebar
* About Me
* Projects
* Project's Popup
* CV

Apart from Sidebar wich appears on every page the rest of the components represent specific sections of the website.

## Where to add your info?

### Your Image And Resume

* You need to save your image in the `src/imgs` folder by the name `me.png`.
* You need to save your resume in the `src/files` folder by the name `Resume.pdf`.

### Your AboutMe And CV Section's Info

You will find the corresponding aboutMe.json and cv.json inside the `src/pages` folder.

### Your Projects Section

* You need to enter your Project title and other details regarding your projects in the projects.json file again in the `src/pages` folder.
* For the embeded iframe (youtube video) you only need to enter the code of the your youtube video, E.g. on opening your video in youtube the url would look like `https://www.youtube.com/watch?v=yXY3f9jw7fg` you only need to enter `yXY3f9jw7fg` to add it to the popup.
* Also for the project images need to be saved with thhe same name as the the project title with a `.png` extension in the `src/imgs` folder.

## Deploying Your Website

To be able to deploy this website you'll need to install `node js` you can download it from [here](www.nodejs.org).
* Installing all the dependencies

    After you cd into this folder inyour terminal run:

    `npm install`

* This website assumes that you are deploying it on Github Pages in which case you need to edit the homepage in the package.json folder to be of the form `https://www.your_github_username.github.io/the_name_of_your_repository`.  Now run `npm run deploy` this will deploy your website to your homepage.

* If you dont want to host it from Github then remove the homepage and deploy and predeploy scripts in the package.json and run `npm run build`. This would create an optimised version of your website inside the build folder. Now you can use this build folder to host your website from anywhere.

