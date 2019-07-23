// Chain of responsibility implementation

/** Receiver: */
const CargoAircraft = function(name, capacity) {
  this.name = name;
  this.capacity = capacity;
  this.next = null;
  this.setNext = next => this.next = next;
  this.carry = load => {
    if (load <= this.capacity) {
      console.log(`Dope! cargo being carried by: [${this.name}] aircraft`);
    }
    else {
      if (this.next) {
        this.next.carry(load);
      }
      else {
        console.log(`Sorry, we don't have enough capacity to carry your cargo.`);
      }
    }
  }
}

/** Sender: */
const CargoCompany = function() {
  // Define Abc Company fleet - instantiating receiving objects
  const atr = new CargoAircraft('ATR', 20);
  const airbus = new CargoAircraft('Airbus A330', 140)
  const boeing = new CargoAircraft('Boeing 747', 260);
  const antonov = new CargoAircraft('Antonov', 380);
  // Setup fleet hierarchy
  atr.setNext(airbus);
  airbus.setNext(boeing);
  boeing.setNext(antonov);

  this.ship = load => atr.carry(load);
}

const load_amount_required = 220;
const abc = new CargoCompany();
abc.ship(load_amount_required);
