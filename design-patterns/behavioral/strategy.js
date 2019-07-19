// Strategy implementation

/** Strategy: this class encapsulates the family of algorithms that will implement the concrete 
 * behaviours or strategies.
 * In this example it is about a 'Reward' algorithms family. 
 * Concrete strategies will extend from this base class.
 */
const RewardStrategy = function() {
  this.accumulate = miles => miles
}


/** Concrete strategies: these classes will extend from parent strategy class. They have to
 * overrite parent methods and implement their own algorithms / logic.
 * Clients will use these concrete strategies.
 */
const BasicReward = function() {
  RewardStrategy.call(this);
  this.accumulate = miles => {
    // some basic reward calculations and validations ....
    // ....
    return miles * 1.5;
  }
}

const PremiumReward = function() {
  RewardStrategy.call(this);
  this.accumulate = miles => {
    // some premium reward calculations and validations ....
    // ....
    return miles * 5;
  }
}


/** Client class: its intances can use the concrete strategies above defined interchangeably.
 * That is possible because client class implements a composition of the strategy class and uses
 * its methods that are suposed to be overrided by the different concrete strategies.
 */
const MilesReward = function(initial_miles, concrete_strategy) {
  this.miles = initial_miles || 0;
  this.concrete_strategy = concrete_strategy || new RewardStrategy();
  this.accumulateMiles = () => {
    this.miles = this.concrete_strategy.accumulate(this.miles);
  }
  this.changeRewardStrategy = new_strategy => {
    this.concrete_strategy = new_strategy;
  }
  this.getMiles = () => this.miles;
}

/** Context: this is a typical sample context where the system interacts with the client interface
 * and make use of its methods but at the same time it is specified wich concrete strategy to use.
 * Notice that (as mentioned before) those concrete strategies are interchangeably.
*/
const everyone_miles = 100;
console.log('[Ana and David year 0]:', everyone_miles);

// Ana decides to use a miles reward program but she forgets to select a reward plan
const ana_miles_reward = new MilesReward(everyone_miles);
ana_miles_reward.accumulateMiles();
console.log('[Ana year 1]:', ana_miles_reward.getMiles());
// Ana noticed she didn't accumulate additional miles and then she selects the basic plan
ana_miles_reward.changeRewardStrategy(new BasicReward());
ana_miles_reward.accumulateMiles();
// Now Ana has accumulated some additional miles
console.log('[Ana year 2]:', ana_miles_reward.getMiles());

// David decides to use a miles reward program and he wants to start with the basic one
const david_miles_reward = new MilesReward(everyone_miles, new BasicReward());
david_miles_reward.accumulateMiles();
console.log('[David year 1]:', david_miles_reward.getMiles());
// David now has accumulated some additional miles and thinks it could be a good idea to improve plan
// David just changed the reward plan from basic to premium
david_miles_reward.changeRewardStrategy(new PremiumReward());
david_miles_reward.accumulateMiles();
console.log('[David year 2]:', david_miles_reward.getMiles());
