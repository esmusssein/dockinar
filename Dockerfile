FROM node:5.1.0

ADD . /src
WORKDIR /src

EXPOSE 80

RUN npm install -g mocha
RUN npm install
ENTRYPOINT ./entrypoint.sh
