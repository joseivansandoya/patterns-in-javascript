// Factory method implementation

/** Car and Motorcycle are two classes built from JavaScript prototypal
 * inheritance, these methods will be used later after we define our
 * factory method
 */
const Car = function({ type, engine, hp, color, model }) {
  this.type = type || '';
  this.engine = engine || 0.0;
  this.hp = hp || 0;
  this.color = color || '';
  this.model = model || '';
}

const Motorcycle = function({ engine, hp, model }) {
  this.engine = engine || 0.0;
  this.hp = hp || 0;
  this.model = model || '';
}

const vehicle = { Car, Motorcycle };

/** This is the factory method which returns an object that later will
 * take the shape of one of the two classes implemented above (Car or Motorcycle)
 * the object returned will accept the attributes that expect the classes
 * constructor
 */
const VehicleFactory = (family) => {
  return {
    createVehicle: attributes => {
      const vehicleFamily = vehicle[family];
      return new vehicleFamily(attributes);
    }
  }
}

// Making use of the factory method and setting it in order to get a 'Car' instance
const teslaFactory = VehicleFactory('Car');
const model3 = teslaFactory.createVehicle({
  type: 'sedan',
  engine: 2.5,
  hp: 3000,
  color: 'gray',
  model: '3'
});
const modelS = teslaFactory.createVehicle({
  type: 'suv',
  engine: 3.5,
  hp: 5000,
  color: 'red',
  model: 'S'
});
console.log('Tesla model 3:', model3);
console.log('Tesla model S:', modelS);

// Making use of the factory method and setting it in order to get a 'Motorcycle' instance
const hondaFactory = VehicleFactory('Motorcycle');
const integra = hondaFactory.createVehicle({
  engine: 2.5,
  hp: 3000,
  model: 'integra'
});
const ctx700 = hondaFactory.createVehicle({
  engine: 3.5,
  hp: 5000,
  model: 'ctx700'
});
console.log('Honda model Integra:', integra);
console.log('Honda model CTX700:', ctx700);
