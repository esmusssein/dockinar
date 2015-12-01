"use strict";

var http = require("http");
var redis = require("redis");
var GreetingKernel = require("./lib/greeting-kernel");

var redisClient = new redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
var greetingKernel = new GreetingKernel(redisClient);
var server = new http.Server();

server.on("request", function(request, response) {
  if (request.url !== "/") {
    response.writeHead(404);
    return response.end()
  }
  if (request.method !== "POST") {
    response.writeHead(405);
    return response.end();
  }
  greetingKernel.handle(function(error, message) {
    response.write(message);
    response.end();
  });
});

server.listen(process.env.PORT || 8080);