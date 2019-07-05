// Abstract factory implementation

/** Abstract products: in this example Milk and Cheese will be our
 * high level abstract products. Each of them will have a qty attribute
 * and an inspect method
 */
const Milk = function(qty) {
  this.qty = qty;
  this.inspect = () => {};
}
const Cheese = function(qty) {
  this.qty = qty;
  this.inspect = () => {}
}

/** Concrete Products: for this example, two manufacturers are the responsible for producing 
 * specific Milk and Cheese. These milk and cheese products will extend from their
 * corresponding abstract products
*/
const NestleMilk = function(qty) {
  Milk.call(this, qty);
  this.inspect = () => console.log('Nestle milk 🥛 has been produced! Qty:', this.qty);
}
const NestleCheese = function(qty) {
  Cheese.call(this, qty);
  this.inspect = () => console.log('Nestle cheese 🧀 has been produced! Qty:', this.qty);
}
const LactalisMilk = function(qty) {
  Milk.call(this, qty);
  this.inspect = () => console.log('Lactalis milk 🥛 has been produced! Qty:', this.qty);
}
const LactalisCheese = function(qty) {
  Cheese.call(this, qty);
  this.inspect = () => console.log('Lactalis cheese 🧀 has been produced! Qty:', this.qty);
}

/** Abstract Factory: for this example our abstract factory is a Dairy one. Specific manufacturers
 * (Nestle and Lactalis) will after extend the produceMilk and produceCheese methods
 */
const DairyFactory = function() {
  this.produceMilk = () => {}
  this.produceCheese = () => {}
}

/** Concrete Factories: in this example Nestle and Lactalis will extend the abstract factory logic
 * and will be able to produce their own kind of milk and cheese
 */
const NestleFactory = function() {
  DairyFactory.call(this);
  this.produceMilk = qty => {
    return new NestleMilk(qty);
  }
  this.produceCheese = qty => {
    return new NestleCheese(qty);
  }
}
const LactalisFactory = function() {
  DairyFactory.call(this);
  this.produceMilk = qty => {
    return new LactalisMilk(qty);
  }
  this.produceCheese = qty => {
    return new LactalisCheese(qty);
  }
}

// Depending on the factory name, some varieties of milk and cheese will be produced
const factory_name = 'Nestle';
let factory = null;

switch (factory_name) {
  case 'Nestle':
    factory = new NestleFactory();
    break;
  case 'Lactalis':
    factory = new LactalisFactory();
    break;
}

// Client usage of interfaces that are defined in the AbstractFactory and AbstractProduct classes
if (factory !== null) {
  const milk_produced = factory.produceMilk(25);
  milk_produced.inspect();
  const cheese_produced = factory.produceCheese(75);
  cheese_produced.inspect();
}
else {
  console.log('Error: Factory has to be one of Nestle or Lactalis');
}
