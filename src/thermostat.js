var Thermostat = function(){
  this.temp = 20;
};

Thermostat.prototype.temperature = function(){
  return this.temp;
};

Thermostat.prototype.up = function() {
  this.temp ++;
};

Thermostat.prototype.down = function() {
  if (this.temp === 10){
    throw new Error('Thermostat cannot go below 10 degrees')
  };
  this.temp --;
};
