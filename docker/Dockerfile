FROM node:18-alpine3.14

WORKDIR /var/www/html

RUN apk update && \
    npm install -g npm 

EXPOSE 3939
ENV HOST 0.0.0.0