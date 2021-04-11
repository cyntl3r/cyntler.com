FROM node:alpine as builder
WORKDIR /app
COPY ./ ./
RUN apk add -U --no-cache --allow-untrusted udev ttf-freefont chromium git
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV CHROMIUM_PATH /usr/bin/chromium-browser
RUN npm i && npm run build

FROM nginx:alpine
COPY /etc/letsencrypt/live/cyntler.com /ssl
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
