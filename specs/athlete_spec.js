var assert = require('assert');
var Athlete = require('../athlete.js');
var WaterBottle = require('../water_bottle.js');

describe('athlete', function () {
  var athlete;
  var bottle;

  beforeEach(function () {
    athlete = new Athlete();
    bottle = new WaterBottle();
  });

  it('should have a hydration attribute that starts at 100', function() {
    assert.strictEqual(athlete.hydration, 100);
  });

  it('should have a distance covered attribute starts at 0', function () {
    assert.strictEqual(athlete.distanceCovered, 0);
  });

  it('should be able to run increasing distance, decreasing hydration', function () {
    athlete.run(10);
    assert.strictEqual(athlete.hydration, 90);
    assert.strictEqual(athlete.distanceCovered, 10);
  });

  it('should not go below 0 hydration', function () {
    athlete.hydration = 2;
    athlete.dehydrate();
    assert.strictEqual(athlete.hydration, 0);
  });

  it('should not move when running dehydrated hydration at 0', function () {
    athlete.hydration = 0;
    athlete.run(10);
    assert.strictEqual(athlete.hydration, 0);
    assert.strictEqual(athlete.distanceCovered, 0);
  });

});
