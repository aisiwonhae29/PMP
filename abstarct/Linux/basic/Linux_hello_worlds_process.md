# Linux_hello_worlds_process

1. docker client contacted the docker daemon

2. docker daemon pulled the 'hello-world' images from the docker hub(amd64)

3. docker demon created a new container from that image which runs the executable 
   that produces the output you are currently reading
4. daemon streamed that output to the docker client, which sent it to your terminal