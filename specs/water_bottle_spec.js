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

});
