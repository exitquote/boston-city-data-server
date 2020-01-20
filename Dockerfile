FROM node:10-alpine

# application code
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4741

CMD [ "npm", "start" ]