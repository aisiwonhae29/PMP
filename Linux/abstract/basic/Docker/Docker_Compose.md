# linux_docker_compose

### principle

- docker-compose makes the uniform of enviroment container.

### step 

1. **build** : build images in the dockerfiles as per your project needs

2. **define** : need to define all the component services in the compose.yml file

3. **run** : 

### content

- tool for defining and running multi-container Docker applications
  
- allows you to define the services, networks, volumnes required for your application in YAMl file
  
- elimination conflicts and organizational issues.

### elements

<details><summary>expand</summary><br>

### Version
  
Indicates docker-compose version.<br>

ex) Version: "3"

### Services

The service key is arguably the most important key in a Docker Compose file.
In these section we can configuring containers in this section of the file.

<details><summary> expands</summary><br>

<details><summary>Image</summary><br>

This option defines what image as serice uses.
you can build context 

ex) image: postgres:latest

ex) build:
          context: .  < set directory path of Dockerfile
          dockerfile: Dockerfile
</details>

<details><summary> Container name </summary>

We can assign Container name, usually assigned random id from system.
But you must avoid id assined same value.

ex) container_name: siwon_container

</details>

<details><summary> Restart</summary>

When the container is failed, restart option activate.

- options: no, always, on-failure, unless-stopped

ex) restart: always


</details>

<details><summary> Depends_on </summary>

Make dependency with following images.

ex) depends_on:
      - db

However it does't ensure that those services are ready for use. Only containers will start.

</details>

<details><summary> Environment </summary>

Application depend on certain varialbes. can extract them from the code and set them up as envireonment variables.

ex) environment:
        API-KEY: 'the-api-key'
         CONFIG: 'development'
 SESSION_SECRET: 'the-secret'

</details>
<details><summary> Ports </summary>

To provide a link to communicate with the 'outside world'

ex) ports:
          - "5000:8000"

Left Side: Local Port - host system
Right Side: Container Port
so it means local(port:5000) send request to remote(port:8000)

</details>
<details><summary> Volumes </summary>

Docker containers have no means of storing data persistently, so when restart lose data. Volumes makes it to create a persistent data storage.
it does this by mounting a directory from the docker host into the docker container's directory.

ex) volumes:
          - host-dir:/test/directory

</details>
<details><summary> Networks </summary>

Can setup the networking for individual services. here you can setup the driver the network uses. or IPv6

ex) networks:
          - default

</details>
<details><summary> Entrypoint </summary>

When you start a container you often must run certain commands. For example if the service is a web application you must start the server. The entrypoint lets you do this.

ex) entrypoint: flask run

</details>
</details>
</details>

### docker compose Commands

<details><summary style = "font-size:1.25 rem">  </summary><br>

- docker-compose up: helps build the image, then creates and start docker containers
- docker-compose down: stop docker containers and removes them
- docker-compose start: starts docker containers. but doesn't build images or create containers. only starts containers if they have been created before
- docker-compose stop: stop containers. but the setup containers and networks remain intact
- docker-compose pause: pause service and activities
- docker-compose unpause: opposite from puase
- docker-compose ps: show docker compose list

</details>

### docker-compose examples

<details><summary style = "font-size:1.25 rem"> examples </p></summary>

<details><summary> basic </p></summary><br>

~~~
version: '3'

services:
  db:
    image: postgres
  web:
    build: .
    command: python manage.py runserver 0.0.0.0:8000
    volumes:
      - .:/code
    ports:
      - "8000:8000"
    depends_on:
      - db
~~~

</details>

<details><summary> local </p></summary><br>

~~~
version: '3.8'
services:
  db:
    image: mysql:8.0
    cap_add:
      - SYS_NICE
    restart: always
    environment:
      - MYSQL_DATABASE=quotes
      - MYSQL_ROOT_PASSWORD=mauFJcuf5dhRMQrjj
    ports:
      - '3306:3306'
    volumes:
      - db:/var/lib/mysql
      - ./db/init.sql:/docker-entrypoint-initdb.d/init.sql
volumes:
  db:
    driver: local

~~~

</details>

<details><summary> nginx - nodejs </p></summary><br>


~~~
redis:
    image: 'redislabs/redismod'
    ports:
      - '6379:6379'
  web1:
    restart: on-failure
    build: ./web
    hostname: web1
    ports:
      - '81:5000'
  web2:
    restart: on-failure
    build: ./web
    hostname: web2
    ports:
      - '82:5000'
  nginx:
    build: ./nginx
    ports:
    - '80:80'
    depends_on:
    - web1
    - web2
~~~

</details>

<details><summary> sql - linux </p></summary><br>

```
version: '3.3'

services:
  mssql:
    container_name: sql-server
    image: mcr.microsoft.com/mssql/server:2017-latest
    #image: mcr.microsoft.com/mssql/server:2017-CU11-ubuntu
    restart: always
    environment:
      ACCEPT_EULA: "Y"
      SA_PASSWORD: "Contraseña12345678"
    ports:
      - 1433:1433
    volumes:
      - my-volume:/var/opt/mssql
      
volumes:
  my-volume:
```

</details>



</details>