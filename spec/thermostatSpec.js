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

});
