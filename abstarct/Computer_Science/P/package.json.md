# pacakge.json

### about

- used in Node.js projects to define various metadata about the project and its dependencies. role for package management.


### contents

1. Metadata: It contains metadata about the project, such as the project name, version, description author, and license.

2. Dependencies: Lists the dependencies required for the project to run.
   - dependencies: regular dependencies for run our application.
   - devDependencies: only needed during development, such as testing frameworks, build tools, etc.
   - peerDependencies: our project expects the consumer to provide. These are not installed automatically and are expected to be fulfilled by the parent project 
     - specify the versions of a package that your project expects its consumers to install.
   - optionalDependencies: not crucial for the functioning of the package.
   - bundleDependencies: array of package names that will be bundled when the package is installed.
     - ex) "bundleDependencies": ["babel-core", "webpack"]
   - engines: specifies the versions of Node.js and npm that your project is compatible with 
     - ex) "engines": { "node": ">=14.0.0", "npm": ">=6.0.0" }

3. Scripts: Defines various scripts

4. Specifies the main entry point of the application

5. Repository, keywords, and More
   - show additional info about project


### appendix

- commonly used to define the command that should be run when you want to build or prepare your project for deployment.