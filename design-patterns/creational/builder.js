// Builder implementation

/** Main class: this is the class definition for the object that will be instantiated in the builder class */
const Aircraft = function(manufacturer, type, usage, destruction_capacity, passenger_capacity, load_capacity) {
  this.manufacturer = manufacturer;
  this.type = type;
  this.usage = usage;
  this.destruction_capacity = destruction_capacity;
  this.passenger_capacity = passenger_capacity;
  this.load_capacity = load_capacity;
}

/** Builder: this class will define methods for initializing the different argumetns of the main class constructor. 
 * Each definer method will return the self builder instance. 
 * The builder ends with a 'build' function which will finally initialize the main class and 
 * return it.
 */
const AircraftBuilder = function() {
  let aircraft_manufacturer;
  let aircraft_type;
  let aircraft_usage;
  let aircraft_destruction_capacity;
  let aircraft_passenger_capacity;
  let aircraft_load_capacity;

  this.setManufacturer = manufacturer => {
    // You can validate that the builder recieves all critical initial arguments
    if (!manufacturer) {
      throw new Error('setManufacturer() expects to recieve a string parameter');
    }
    aircraft_manufacturer = manufacturer;
    return this;
  }
  this.setType = type => {
    if (!type) {
      throw new Error('setType() expects to recieve a string parameter');
    }
    aircraft_type = type;
    return this;
  }
  this.setUsage = (usage = '') => {
    aircraft_usage = usage;
    return this;
  }
  this.withDestructionCapacity = (destruction_capacity = 0) => {
    aircraft_destruction_capacity = destruction_capacity;
    return this;
  }
  this.withPassengerCapacity = (passenger_capacity = 1) => {
    aircraft_passenger_capacity = passenger_capacity;
    return this;
  }
  this.withLoadCapacity = (load_capacity = 0) => {
    aircraft_load_capacity = load_capacity;
    return this;
  }
  this.buid = () => {
    // You can validate that the builder calls all critical methods before returning main class instance
    if (!aircraft_manufacturer) {
      throw new Error('The aircraft must have a manufacturer defined. Use the setManufacturer() method.');
    }
    if (!aircraft_type) {
      throw new Error('The aircraft must have a type defined. Use the setType() method.');
    }
    return new Aircraft(aircraft_manufacturer, aircraft_type, aircraft_usage, aircraft_destruction_capacity, aircraft_passenger_capacity, aircraft_load_capacity);
  }
}

/** Now you use the builder by instantiating it and calling initiator methods (with their corresponding
 * arguments) you may want. Notice that some methods may be mandatory to be excecuted after calling
 * the final build function */
const oh58 = new AircraftBuilder()
              .setManufacturer('Bell')
              .setType('helicopter')
              .setUsage('militar')
              .withDestructionCapacity(300)
              .withPassengerCapacity(4)
              .buid();

const a320 = new AircraftBuilder()
              .setManufacturer('Airbus')
              .setType('airplane')
              .setUsage('commercial')
              .withPassengerCapacity(180)
              .buid();

const dreamlifter = new AircraftBuilder()
              .setManufacturer('Boeing')
              .setType('airplane')
              .setUsage('commercial')
              .withPassengerCapacity(6)
              .withLoadCapacity(50)
              .buid();

console.log('>> oh58', oh58);
console.log('\n');
console.log('>> a320', a320);
console.log('\n');
console.log('>> dreamlifter', dreamlifter);
console.log('\n');

// These are intentionally written failed builder initializations
try {
  const error_case_1 = new AircraftBuilder()
              .setManufacturer('Boeing')
              .setUsage('commercial')
              .withPassengerCapacity(6)
              .withLoadCapacity(50)
              .buid();
}
catch (err) {
  console.log('>> error_case_1: ', err.message);
}

try {
  const error_case_2 = new AircraftBuilder()
              .setType('airplane')
              .setUsage('commercial')
              .withPassengerCapacity(6)
              .withLoadCapacity(50)
              .buid();
}
catch (err) {
  console.log('>> error_case_2: ', err.message);
}
