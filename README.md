acc-todo-01
=============

A basic template for a To-do app built around a JavaScript stack and some challenges. Project used for studying purposes.
This stack is mainly composed by:
 * Node.js engine
 * AngularJS framework
 * Karma test runner
 * Other minor components

Installation
=============

1. Make sure you have [Node.js](http://nodejs.org/) and [Git](http://git-scm.org/) installed.
 * [Ruby](http://ruby-lang.org/) and [Compass](http://compass-style.org/install) are optional but we recommend to install it.
2. Install [Yeoman](http://yeoman.io/) framework by typing ```npm install -g yo grunt-cli bower```. The ```-g``` flag is used to install it globally so you can write it under any folder on command line. You can have more information about the components on their pages but bottom line is:
 * **Yo** scaffolds a new application for you. You can also use it to automate common tasks.
 * **Grunt** is used to build, test and preview your app.
 * **Bower** is used to manage your dependecies under the project.
3. Type ```npm install -g karma``` to install [Karma](http://karma-runner.github.io/0.8/index.html).
4. As we use AngularJS on this project you may want to install [Angular Generator]() by typing ```npm install -g generator-angular```.
5. Go to project's root on command line and type ```npm install```. It will install all need modules **locally on your project**.
6. Still on root, type  ```bower install``` to download all component dependecies.

Usage
=============

The commands below are always used on project's root.
 * ```grunt server``` to preview your app.
 * ```grunt test``` to run your tests. The default test-configuration file is **karma.conf.js**.
 * ```grunt``` to build your application. It will run tests, code-reviews (using [JS Hint](http://www.jshint.com/), minify style-sheet and javascript code and other tasks in order to prepare your app to be deployed.
 * ```karma start [configuration.js]``` to run your tests independent of grunt tasks. You may want to use it by combining a **grunt server** with a **karma e2e configuration file**.

Extra
=============

Karma test runner provides a code coverage feature which is updated everytime you run your tests. You can check it by going to **coverage/[Browser]/**

Tasks
=============

The tasks below will guide you to improve the spplication. You can follow but is not limited to them.

 - [ ] I would like to have an option to hide or delete done items so I can get a better view of my to-do list.
 - [ ] I would like to have my to-do items saved offline so I can access it on my computer whenever I want. (*think about HTML5 storage or any other offline-storing solution*)
 - [ ] I would like to include (but not mandatory) due dates on my to-do items so I can sort it through the most urgent ones.
 - [ ] I would like to save my information online so I can access it wherever I want.
 - [ ] I would like to have a basic authentication system in order to organize the access to list items.

Contribute
=============

If you want to turn this template better help us with new challenges or code improvements. Please submit a **pull-request** and we will evaluate it.

If you want to build this same app on a different stack with other components or languages reach out to us so we can start a new project.
