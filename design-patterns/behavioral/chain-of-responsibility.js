// Chain of responsibility implementation

/** Receiver: this class may have to know who will be the next instance to forward a concrete action.
 * In addition it can implement some methods that it will excecute itself or will forward to its next
 * receiver sibling.
 */
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

// Instantiate some receiving objects (fleet)
const atr = new CargoAircraft('ATR', 20);
const airbus = new CargoAircraft('Airbus A330', 140)
const boeing = new CargoAircraft('Boeing 747', 260);
const antonov = new CargoAircraft('Antonov', 380);
// Setup receiving objects connections (fleet hierarchy)
atr.setNext(airbus);
airbus.setNext(boeing);
boeing.setNext(antonov);


/** Sender: this class will interact with receivers. It usually will have to know who (and only) the first
 * receiver will be, withot having to know if that receiver will have to forward the request or will handle
 * by itself.
*/
const CargoCompany = function() {
  // Send the request to the first receiver
  this.ship = load => atr.carry(load);
}

// Sample usage of the sender
const load_amount_required = 220;
const abc = new CargoCompany();
abc.ship(load_amount_required);
