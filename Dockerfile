FROM node:alpine as builder
WORKDIR /app
COPY ./ ./
RUN npm install puppeteer --unsafe-perm=true --allow-root
RUN npm i && npm run build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
