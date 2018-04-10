var assert = require('assert');
var WaterBottle = require('../water_bottle.js');

describe('WaterBottle', function () {
  var bottle;

  beforeEach(function () {
    bottle = new WaterBottle();
  });

  it('should be empty at start', function () {
    assert.strictEqual(bottle.volume, 0);
  });

  it('should have a hydrationValue of 10', function() {
    assert.strictEqual(bottle.hydrationValue, 10);
  });

  it('should have a volume of 100 when filled', function() {
    bottle.fill();
    assert.strictEqual(bottle.volume, 100);
  });

  it('should decrease by 10 when drank', function() {
    bottle.fill();
    var startValue = bottle.volume;
    bottle.drink();
    assert.strictEqual(bottle.volume, startValue - 10);
  });

  it('should have a volume of 0 when emptied', function() {
    bottle.empty();
    assert.strictEqual(bottle.volume, 0);
  });

  it('should not decrement volume below 0', function () {
    bottle.empty();
    bottle.drink();
    assert.strictEqual(bottle.volume, 0);
  });

});
