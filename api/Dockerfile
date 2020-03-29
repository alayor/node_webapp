FROM node:11.12-stretch

WORKDIR /var/app
COPY package.json /var/app
RUN npm install
COPY . /var/app/
RUN npm install -g nodemon
EXPOSE 3000

CMD [ "npm", "start" ]
