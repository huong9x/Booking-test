FROM node:10

RUN mkdir /app

WORKDIR /app

COPY package.json /app/package.json

RUN npm install