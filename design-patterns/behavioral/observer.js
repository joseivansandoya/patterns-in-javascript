// Observer implementation

/** Subject: this will be the observable class, its responsibility is to maintain the observers list
 * and to implement three important methods: subscribe, unsubscribe and publish. Further observable
 * class will inherit from this one.
 */
const Subject = function () {
  this.observers = [];
  this.subscribe = observer => {
    this.observers.push(observer);
  }
  this.unsubscribe = observer_to_remove => {
    this.observers = this.observers.filter( observer => observer !== observer_to_remove );
  }
  this.publish = msg => {
    this.observers.forEach(observer => observer.update(msg));
  }
}

/** Observer: further classes will inherit from this observer one in order to subscribe to the subject
 * notifications. Subclasses must override the update method in order to handle the message that the
 * subject will emit.
 */
const Observer = function () {
  this.update = () => {}
  this.subscribeTo = subject => {
    subject.subscribe(this);
  }
  this.unsubscribeFrom = subject => {
    subject.unsubscribe(this);
  }
}


// Creating a new Subject inherited class
const TsunamiAlert = function () {
  Subject.call(this);
  this.tsunami = '';
  this.detectTsunami = time => {
    this.tsunami = `Tsunami arriving in ${time} minutes 🚨`;
  }
  this.emitAlert = () => {
    this.publish(this.tsunami);
  }
}

// Creating a new Observer inherited class
const CountryTsunamiControl = function (country) {
  Observer.call(this);
  this.country = country;
  this.update = msg => {
    console.log(`[${this.country} - Tsunami Alert]: ${msg}`);
  }
}


// usage
const noaa = new TsunamiAlert();

const usa_control = new CountryTsunamiControl('USA');
usa_control.subscribeTo(noaa);

const ecuador_control = new CountryTsunamiControl('Ecuador');
ecuador_control.subscribeTo(noaa);

const chile_control = new CountryTsunamiControl('Chile');
chile_control.subscribeTo(noaa);

noaa.detectTsunami(35);
noaa.emitAlert();


// Chile decides to unsubscribe from noaa services
chile_control.unsubscribeFrom(noaa);
// Another tsunami seems to happen
console.log('\n====== Another tsunami just happened 🌊 ======\n');
noaa.detectTsunami(25);
noaa.emitAlert();
