# Docker 

### keyword

- develop, ship and run

### about

- Docker is an open platform for developing, shipping, and running applications. This seperate your applications from your infrastructure so you can deliver software quilckly.

### Component

\# Docker Hub    

- This is the registry which is used to host various Docker images.
- We can upload or download images from hub.
- cmd) sudo docker pull mysql

\# Docker images

- In docker, everything is based on images.
- An image is a combination of a file system and parametrs. (file system meaning to snapshot of file.)
- cmd) docker images
- cmd) docker run image
- cmd) docker rmi imageID   : This remove Docker images.

\# Docker container

- containers are instances of Docker images that can be 

Docker Engine : It is used for building Docker images and creating Docker containers.
Docker Compose: This is used to define applications using multiple Docker containers.


### features

- lightwegiht and fast.