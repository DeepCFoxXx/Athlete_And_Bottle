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

});
