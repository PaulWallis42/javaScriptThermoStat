var Thermostat = function(){
  this.temp = 20;
  this.powerSaveOn = false;
};

Thermostat.prototype.temperature = function(){
  return this.temp;
};

Thermostat.prototype.up = function() {
  if (this.temp === 25 && this.powerSaveOn === true) {
    throw new Error('its too hot')
  };

  this.temp ++;
};

Thermostat.prototype.down = function() {
  if (this.temp === 10){
    throw new Error('Thermostat cannot go below 10 degrees')
  };
  this.temp --;
};

Thermostat.prototype.powersave = function() {
  this.powerSaveOn = true
};