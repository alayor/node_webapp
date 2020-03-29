FROM node:11.12-stretch

WORKDIR /var/app
COPY . /var/app/
RUN npm install
RUN git clone https://github.com/vishnubob/wait-for-it.git
RUN npm install -g knex
EXPOSE 3000

CMD [ "npm", "start" ]
