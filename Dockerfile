ARG version
FROM node:$version
WORKDIR /app
COPY ./package*.json .
CMD [ "sh", "-c", "\
    npm i &&\
    npm i pm2 -g &&\
    pm2 start ecosystem.config.js &&\
    sh" ]