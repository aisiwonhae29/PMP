# JDK

### change jdk version

\# select the java & javac version

- sudo alternatives --config java
- sudo alternatives --config javac

\# /usr/profile.d/java.sh

- export JAVA_HOME=/usr/lib/jvm/java-16-openjdk
- export PATH=$JAVA_HOME/bin:$PATH