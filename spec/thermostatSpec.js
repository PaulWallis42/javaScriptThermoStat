describe('Thermostat', function(){

  var thermostat;

  it('starts at 20 degrees', function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature()).toEqual(20);
  });

  it('increases the temperature by 1 degree with the up button', function() {
    thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.temperature()).toEqual(21);
  });

  it('decreases the temperature by 1 degree with the down button', function(){
    thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.temperature()).toEqual(19);
  });

  it('has a minimum temperature of degrees', function(){
    thermostat = new Thermostat();
    for (i = 0; i < 10; i++) {
      thermostat.down()
    };
    expect(function() {thermostat.down() }).toThrow(new Error('Thermostat cannot go below 10 degrees'));
  });

  it('is limited to 25 degrees when power saving mode is on', function(){
    thermostat = new Thermostat();
    for (i = 0; i < 5; i++){
      thermostat.up();
    };
    expect(function() {thermostat.up() }).toThrow(new Error('its too hot'))
  });

  it('is limited to 32 degrees when power saving mode is off', function(){
    thermostat = new Thermostat();
    thermostat.powersaveOff();
    for (i = 0; i < 12; i++){
      thermostat.up();
    };
    expect(function() {thermostat.up() }).toThrow(new Error('its too hot'))
  });

  it('has powersave mode on by default', function(){
    thermostat = new Thermostat();
    expect(thermostat.isPowersaveOn()).toBe(true);
  });

});
