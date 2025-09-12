# npm 

### requrie policy

- let a      = require('a') : import the default object from 'a' module.
- let{ b,c } = require('a') : import 'b', 'c' object from module.

### Commands

- npm config: about npm config
- npm init -y: make basic package.json easily
- npm -g install: without g (npm list -g: listing, npm bin -g: global binaries are located)
- npm -D install: install as devDependencies(if NODE_ENV=production, devDependencies are not installed)

### Modules

- busboy: parsing http data into json data
- createError: helper for creating easily extensible and subcalssable javaScript Error classes
- verdaccio: managing a private npm registry allows you to host your own private packages

### practice

- erase about 'X-Powered-By' to hide about information.