# Aurelia Todo App

This app is a sample todo app that uses ASP.NET Web API and Aurelia. 

To run this project here are a few steps.
* Install node from [here](https://nodejs.org/). After following the instruction type "npm" into your cmd to make sure it works.
* Go into the TodoClient folder in the repo and type "npm install -g jspm"
* Enter "npm install"
* Enter "jspm install -y"
* Start the web api using visual studio. This will seed the database
* Open TodoClient/index.html in your favorite browser.
    * Gulp makes this easier. In TodoClient type in "npm install -g gulp" then once that's loaded type "gulp watch". This will host the page to http://localhost:9000.
* !!!If no data shows up then go to TodoClient/todos/todoData.js and change the localhost port to whatever the api is running on. 