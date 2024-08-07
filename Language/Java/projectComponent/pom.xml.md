# pom.xml

### about

- This is the Project Object Model file used for manage a JAva project's build, dependencies, and other project-related info.
- The Content is composed with XML file that defines the project configuration and is the core of any Maven project.

### Structure

\# header section

```<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"> ```

- project
  - This is the root element of a Maven pom.xml file. This encapsulates all the configuration for the Maven project.
  
- xmlns="http://maven.apache.org/POM/4.0.0"
  - This defines the XML namespace for the Maven Project Object Model. The url indicates the version of the POM schema being used.
  
- xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  - This defines the XMl schema instance namespace. 
  
- xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd"
  - This provides a hint to XML processors about where to find the XML schema file for the specified namespace.
  - The schemalocation attribute consits of pairs of space-separated values.
  - In this case, it indicates that hte XML Schema for the Maven POM 4.0.0 can be found at http://maven.apache.org/xsd/maven-4.0.0.xsd