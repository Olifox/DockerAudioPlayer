FROM node

RUN mkdir /var/app
WORKDIR /var/app

ADD package.json ./

RUN npm install

COPY src ./

EXPOSE 3000
CMD [ "node", "server.js" ]