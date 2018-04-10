var WaterBottle = function () {
  this.volume = 0;
  this.hydrationValue = 10;
}

WaterBottle.prototype.fill = function() {
  this.volume = 100;
}


module.exports = WaterBottle;
