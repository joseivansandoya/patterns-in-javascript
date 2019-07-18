// strategy
const RewardStrategy = function() {
  this.accumulate = miles => miles
}

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


// context
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

const everyone_miles = 100;
console.log('[Ana and David year 0]:', everyone_miles);

const ana_miles_reward = new MilesReward(everyone_miles);
ana_miles_reward.accumulateMiles();
console.log('[Ana year 1]:', ana_miles_reward.getMiles());
ana_miles_reward.changeRewardStrategy(new BasicReward());
ana_miles_reward.accumulateMiles();
console.log('[Ana year 2]:', ana_miles_reward.getMiles());

const david_miles_reward = new MilesReward(everyone_miles, new BasicReward());
david_miles_reward.accumulateMiles();
console.log('[David year 1]:', david_miles_reward.getMiles());
david_miles_reward.changeRewardStrategy(new PremiumReward());
david_miles_reward.accumulateMiles();
console.log('[David year 2]:', david_miles_reward.getMiles());
