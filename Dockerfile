FROM node:alpine as builder
WORKDIR /app
COPY ./ ./
RUN npm i && npm run build
