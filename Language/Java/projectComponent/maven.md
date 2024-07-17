# maven

### about

- Maven is a build automation tool primarily used for Java projects.
- Also can apply on other languages.

### eclipse - maven build

\# general

- update project: This is used to synchronize your eclipse project with the maven pom.xml configuration.

\# Goals

- clean     : Cleans the project by removing files generated in previous builds.
- compile   : compiles the source code of the project
- test      : Runs tests using a suitable testing framework
- package   : Packages the compiled code into a distributable format, such as a JAR or WAR file
- install   : Installs the package into the local repository for use as a dependency in other projects locally
- deploy    : Copies the package to the remote repository for sharing with other developers and projects.


### feature

1. POM: Project Object Mdel

- The pom.xml file is the core unit of Maven, containing configuration detail such as dependnencies, build plugines, and project metadata.
- The POM file allows Maven to manage a project's build lifecycle, dependencies, and plugins.

2. Dependency Management

- Maven handles project dependencies in a centralized manner.
- Supports transitive dependencies.
  
3. Standard Directory layout.
   
4. Build Lifecycle
   
- validate   : Validate the project is correct.
- compile    : Compile the source code.
- test       : Run the tests using a suitable testing framework.
- package    : Package the compiled code into a distributable format.
- verify     : Perform any checks on results of integration test to ensure quality criteria are met.
- install    : Install the package into the local repository.
- deploy     : Deploy the packaged code to a remote repository.

5. Plugins

- Maven uses plugins to perform tasks defined in the build lifecycle phases.

6. Inheritance and Aggregation

- Maven supports project inheritance, allowing a project to inherit dependencies, plugins, and other configurations from a parent project.
- Project aggregation allows multiple projects to be managed under a single POM, facilitating multi-module build.
