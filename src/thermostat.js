var Thermostat = function(){
  this.temp = 20;
  this.powersave = false;
};

Thermostat.prototype.temperature = function(){
  return this.temp;
};

Thermostat.prototype.up = function() {
  if (this.temp === 25 && this.powersave === true || this.temp === 32 && this.powersave === false) {
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

Thermostat.prototype.powersaveOn = function() {
  this.powersave = true
};

Thermostat.prototype.powersaveOff = function() {
  this.powersave = false
};
