var Thermostat = function(){
  this.temp = 20;
};

Thermostat.prototype.temperature = function(){
  return this.temp;
};

Thermostat.prototype.up = function() {
  this.temp ++;
};
