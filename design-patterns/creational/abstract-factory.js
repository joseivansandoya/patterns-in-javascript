// Abstract factory implementation

const Milk = function() {
  this.inspect = () => {};
}

const Cheese = function() {
  this.inspect = () => {}
}

const NestleMilk = function() {
  Milk.call(this);
  this.inspect = () => console.log('Nestle milk 🥛 has been produced!');
}

const NestleCheese = function() {
  Cheese.call(this);
  this.inspect = () => console.log('Nestle cheese 🧀 has been produced!');
}

const LactalisMilk = function() {
  Milk.call(this);
  this.inspect = () => console.log('Lactalis milk 🥛 has been produced!');
}

const LactalisCheese = function() {
  Cheese.call(this);
  this.inspect = () => console.log('Lactalis cheese 🧀 has been produced!');
}

const DairyFactory = function() {
  this.produceMilk = () => {}
  this.produceCheese = () => {}
}

const NestleFactory = function() {
  DairyFactory.call(this);
  this.produceMilk = () => {
    return new NestleMilk();
  }
  this.produceCheese = () => {
    return new NestleCheese();
  }
}

const LactalisFactory = function() {
  DairyFactory.call(this);
  this.produceMilk = () => {
    return new LactalisMilk();
  }
  this.produceCheese = () => {
    return new LactalisCheese();
  }
}

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

if (factory !== null) {
  const milk_produced = factory.produceMilk();
  milk_produced.inspect();
  const cheese_produced = factory.produceCheese();
  cheese_produced.inspect();
}
else {
  console.log('Error: Factory has to be one of Nestle or Lactalis');
}
