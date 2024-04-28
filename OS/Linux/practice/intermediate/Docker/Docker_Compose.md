# linux_docker_compose

## Index

<details><summary style="font-size:1.5rem"> general </summary>

### about 

- docker-compose makes the uniform of enviroment container.

### sequence 

\# flow

1. build : build images in the dockerfiles as per your project needs
2. define : need to define all the component services in the compose.yml file
3. run  

### feature

- tool for defining and running multi-container Docker applications
- allows you to define the services, networks, volumnes required for your application in YAMl file
- elimination conflicts and organizational issues.
  
### Commands

- docker-compose up: helps build the image, then creates and start docker containers
- docker-compose down: stop docker containers and removes them
- docker-compose start: starts docker containers. but doesn't build images or create containers. only starts containers if they have been created before
- docker-compose stop: stop containers. but the setup containers and networks remain intact
- docker-compose pause: pause service and activities
- docker-compose unpause: opposite from puase
- docker-compose ps: show docker compose list

</details>

---
<details><summary style="font-size:1.5rem"> elements </summary>

\# version
  
- Indicates docker-compose version.
- ex) Version: "3"

\# services

- The service key is arguably the most important key in a Docker Compose file.
In these section we can configuring containers in this section of the file.

\# container_name

- This part decide the container name

\# image

- This option defines what image as serice uses.
- you can build context 
- ex) image: postgres:latest
- ex) build:
          context: .set directory path of Dockerfile
          dockerfile: Dockerfile

\# Container name

- We can assign Container name, usually assigned random id from system.
- But you must avoid id assined same value.
- ex) container_name: siwon_container


\# Restart

- When the container is failed, restart option activate.
- options: no, always, on-failure, unless-stopped
- ex) restart: always


\# Depends_on

- Make dependency with following images.
- ex) depends_on:
      - db

- However it does't ensure that those services are ready for use. Only containers will start.

\# Environment
  
- Application depend on certain varialbes. can extract them from the code and set them up as envireonment variables.

- ex) environment:
        API-KEY: 'the-api-key'
         CONFIG: 'development'
 SESSION_SECRET: 'the-secret'

\# ports

- To provide a link to communicate with the 'outside world'
- ex) ports:
          - "5000:8000"

  - Left Side: Local Port - host system
  - Right Side: Container Port
  - so it means local(port:5000) send request to remote(port:8000)

\# volumes
- Docker containers have no means of storing data persistently, so when restart lose data. Volumes makes it to create a persistent data storage.
- it does this by mounting a directory from the docker host into the docker container's directory.
- ex) volumes:
          - host-dir:/test/directory

\# networks

- Can setup the networking for individual services. here you can setup the driver the network uses. or IPv6
- ex) networks:
          - default

\# Entrypoint

- When you start a container you often must run certain commands. For example if the service is a web application you must start the server. The entrypoint lets you do this.
- ex) entrypoint: flask run
- ex) entrypoint: ["node", "./bin/bash"]

\# .env file

- outside from docker compose file, .env file provides the variables to use dynamically.

</details>

---
<details><summary style="font-size:1.5rem">examples </summary>

<details><summary> basic </p></summary>

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

<details><summary> local </p></summary>

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

<details><summary> nginx - nodejs </p></summary>


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

<details><summary> sql - linux </p></summary>

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

<details><summary> Biorp - node.js - API </summary>

```
version: '3'
services:
  api:
    image: node:16
    working_dir: /app
    volumes:
      - .:/app
    ports:
      - "3000:3000"
    command: npm start
```

</details>

<details><summary> docker-compose lamp </summary>

> quote: https://github.com/sprintcube/docker-compose-lamp

```
-- Docker-compose file --

version: "3"

services:
  webserver:
    build:
      context: ./bin/${PHPVERSION}
    container_name: "${COMPOSE_PROJECT_NAME}-${PHPVERSION}"
    restart: "always"
    ports:
      - "${HOST_MACHINE_UNSECURE_HOST_PORT}:80"
      - "${HOST_MACHINE_SECURE_HOST_PORT}:443"
    links:
      - database
    volumes:
      - ${DOCUMENT_ROOT-./www}:/var/www/html:rw
      - ${PHP_INI-./config/php/php.ini}:/usr/local/etc/php/php.ini
      - ${SSL_DIR-./config/ssl}:/etc/apache2/ssl/
      - ${VHOSTS_DIR-./config/vhosts}:/etc/apache2/sites-enabled
      - ${LOG_DIR-./logs/apache2}:/var/log/apache2
      - ${XDEBUG_LOG_DIR-./logs/xdebug}:/var/log/xdebug
    environment:
      APACHE_DOCUMENT_ROOT: ${APACHE_DOCUMENT_ROOT-/var/www/html}
      PMA_PORT: ${HOST_MACHINE_PMA_PORT}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      HOST_MACHINE_MYSQL_PORT: ${HOST_MACHINE_MYSQL_PORT}
      XDEBUG_CONFIG: "client_host=host.docker.internal remote_port=${XDEBUG_PORT}"
    extra_hosts:
      - "host.docker.internal:host-gateway"
  database:
    build:
      context: "./bin/${DATABASE}"
    container_name: "${COMPOSE_PROJECT_NAME}-${DATABASE}"
    restart: "always"
    ports:
      - "127.0.0.1:${HOST_MACHINE_MYSQL_PORT}:3306"
    volumes:
      - ${MYSQL_INITDB_DIR-./config/initdb}:/docker-entrypoint-initdb.d
      - ${MYSQL_DATA_DIR-./data/mysql}:/var/lib/mysql
      - ${MYSQL_LOG_DIR-./logs/mysql}:/var/log/mysql
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
  phpmyadmin:
    image: phpmyadmin
    container_name: "${COMPOSE_PROJECT_NAME}-phpmyadmin"
    links:
      - database
    environment:
      PMA_HOST: database
      PMA_PORT: 3306
      PMA_USER: root
      PMA_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_USER: ${MYSQL_USER}
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
      UPLOAD_LIMIT: ${UPLOAD_LIMIT}
      MEMORY_LIMIT: ${MEMORY_LIMIT}
    ports:
      - "${HOST_MACHINE_PMA_PORT}:80"
      - "${HOST_MACHINE_PMA_SECURE_PORT}:443"
    volumes:
      - /sessions
      - ${PHP_INI-./config/php/php.ini}:/usr/local/etc/php/conf.d/php-phpmyadmin.ini
  redis:
    container_name: "${COMPOSE_PROJECT_NAME}-redis"
    image: redis:latest
    ports:
      - "127.0.0.1:${HOST_MACHINE_REDIS_PORT}:6379"

-- Docker file --

FROM php:7.4.2-apache-buster

# Surpresses debconf complaints of trying to install apt packages interactively
# https://github.com/moby/moby/issues/4032#issuecomment-192327844
 
ARG DEBIAN_FRONTEND=noninteractive

# Update
RUN apt-get -y update --fix-missing && \
    apt-get upgrade -y && \
    apt-get --no-install-recommends install -y apt-utils && \
    rm -rf /var/lib/apt/lists/*


# Install useful tools and install important libaries
RUN apt-get -y update && \
    apt-get -y --no-install-recommends install nano wget \
dialog \
libsqlite3-dev \
libsqlite3-0 && \
    apt-get -y --no-install-recommends install default-mysql-client \
zlib1g-dev \
libzip-dev \
libicu-dev && \
    apt-get -y --no-install-recommends install --fix-missing apt-utils \
build-essential \
git \
curl \
libonig-dev && \ 
    apt-get install -y iputils-ping && \
    apt-get -y --no-install-recommends install --fix-missing libcurl4 \
libcurl4-openssl-dev \
zip \
openssl && \
    rm -rf /var/lib/apt/lists/* && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install xdebug
RUN pecl install xdebug-3.1.4 && \
    docker-php-ext-enable xdebug && \
    mkdir /var/log/xdebug

# Install redis
RUN pecl install redis-5.1.1 && \
    docker-php-ext-enable redis

# Install imagick
RUN apt-get update && \
    apt-get -y --no-install-recommends install --fix-missing libmagickwand-dev && \
    rm -rf /var/lib/apt/lists/* && \
    pecl install imagick && \
    docker-php-ext-enable imagick

# Other PHP7 Extensions

RUN docker-php-ext-install pdo_mysql && \
    docker-php-ext-install pdo_sqlite && \
    docker-php-ext-install bcmath && \
    docker-php-ext-install mysqli && \
    docker-php-ext-install curl && \
    docker-php-ext-install tokenizer && \
    docker-php-ext-install json && \
    docker-php-ext-install zip && \
    docker-php-ext-install -j$(nproc) intl && \
    docker-php-ext-install mbstring && \
    docker-php-ext-install gettext && \
    docker-php-ext-install calendar && \
    docker-php-ext-install exif


# Install Freetype 
RUN apt-get -y update && \
    apt-get --no-install-recommends install -y libfreetype6-dev \
libjpeg62-turbo-dev \
libpng-dev && \
    rm -rf /var/lib/apt/lists/* && \
    docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg && \
    docker-php-ext-install gd

# Insure an SSL directory exists
RUN mkdir -p /etc/apache2/ssl

# Enable SSL support
RUN a2enmod ssl && a2enmod rewrite

# Enable apache modules
RUN a2enmod rewrite headers

# Cleanup
RUN rm -rf /usr/src/*
```

</details>
</details>