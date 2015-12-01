"use strict";

var util = require("util");

function Kernel(redisClient) {
  this.redisClient = redisClient;
}

Kernel.prototype.handle = function(callback) {
  var self = this;
  self.redisClient.get("greetings", function(error, value) {
    if (error) {
      return callback(error);
    }
    value += 1;
    self.redisClient.set("greetings", value);
    callback(null, util.format("We have met %d times", value));
  });
};

module.exports = Kernel;
