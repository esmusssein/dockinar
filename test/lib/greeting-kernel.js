"use strict";

var assert = require("assert");
var Kernel = require("../../lib/greeting-kernel.js");

describe("GreetingKernel: Returns how many we have met", function() {
  var mockRedisClient;
  var kernel;

  beforeEach(function(done) {
    mockRedisClient = {};
    kernel = new Kernel(mockRedisClient);
    done();
  });

  it("returns how many we have met using Redis", function(done) {
    mockRedisClient.set = function(key, value) {
      assert.strictEqual(key, "greetings");
      assert.strictEqual(value, 1);
    };

    mockRedisClient.get = function(key, callback) {
      assert.strictEqual(key, "greetings");
      callback(null, 0);
    };

    kernel.handle(function(error, message) {
      assert.ifError(error);
      assert.strictEqual(message, "We have met 1 times");
      done();
    });
  });
});
