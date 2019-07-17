// Decorator implementation

/** Base class */
const Coffee = function(ingredients, price) {
  this.ingredients = ingredients || 'coffee';
  this.price = price || 1;
  this.getIngredients = () => this.ingredients;
  this.getPrice = () => this.price;
  this.printInfo = () => `${this.getIngredients()} // $${this.getPrice()}`;
}

/** Decorators */
const WithMilk = function(coffee) {
  Coffee.call(this);
  // override base methods
  this.getIngredients = () => `${coffee.getIngredients()} + milk`;
  this.getPrice = () => coffee.getPrice() + 0.75;
}

const WithCream = function(coffee) {
  Coffee.call(this);
  // override base methods
  this.getIngredients = () => `${coffee.getIngredients()} + cream`;
  this.getPrice = () => coffee.getPrice() + 0.25;
}

// single implementation of base class
const plain_coffee = new Coffee();

// usage of decorators from single implementation
const coffee_with_milk = new WithMilk(plain_coffee);
const coffee_with_milk_cream = new WithCream(coffee_with_milk);

console.log(`[plain_coffee]: ${plain_coffee.printInfo()}`);
console.log(`[coffee_with_milk]: ${coffee_with_milk.printInfo()}`);
console.log(`[coffee_with_milk_cream]: ${coffee_with_milk_cream.printInfo()}`);
