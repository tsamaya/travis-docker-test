FROM node:14-alpine

WORKDIR /usr/src/app

EXPOSE 3000

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . .

CMD ["node", "server.js"]