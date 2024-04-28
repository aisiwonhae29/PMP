# Docker File

### about 

### parts

\# FROM

- Instruction specifies the base image that the container will be built on top of.
- This is the base image for the container.
- ex) FROM node:14-alpine3.16

\# WORKDIR

- This sets the working directory for any cmd that follows it in the Dockerfile.
- ex) WORKDIR /app

\# COPY

- Copy files from the host machine to the current working directory.
- ex) COPY package.json /app/

\# RUN

- Run execute commands during the image build process.
- ex) RUN npm install

\# CMD

- CMD execute command when a container is run from the image.
- CMD ["npm", "start"]

\# ENV

- ENV set environment variables inside the image.
- ex) ENV NODE_ENV production

\# EXPOSE

- EXPOSE tell Docker which ports the container will listen on at runtime
- ex) EXPOSE 9000