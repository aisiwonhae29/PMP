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

ex) build:
          context: .  < set directory path of Dockerfile
          dockerfile: Dockerfile
</details>

<details><summary> Container name </summary>


</details>

<details><summary> Restart</summary>


</details>

<details><summary> Depends_on </summary>


</details>

<details><summary> Environment </summary>


</details>
<details><summary> Ports </summary>


</details>
<details><summary> Volumes </summary>


</details>
<details><summary> Networks </summary>


</details>
<details><summary> Entrypoint </summary>


</details>





</details>




</details>

### docker-compose examples

<details><summary style = "font-size:1.25 rem"> examples </p></summary><br>


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