// Singleton implementation

let mySingleton = (() => {
  // A singleton has to return one and only one instance
  let instance;

  // Here you can implement any additional logic you want...

  function init() {
    /** This method acts as a private constructor for the singleton
     * notice that only what is returned will be accessed from outside
     * the singleton 
     */
    const privateConst = 'I am a private constant';
    const privateRandom = Math.random();
    return {
      publicMethod: () => console.log(`${privateConst} being read from a public method`),
      getRandomNumber: () => privateRandom
    }
  }

  return {
    /** Now you have to return a public method that retrieves the single
     * instance oh this singleton
     */
    getInstance: () => {
      if(!instance) {
        instance = init()
      }
      return instance;
    }
  }
})();


const a = mySingleton.getInstance();
const b = mySingleton.getInstance();
// Accessing a singleton public method
a.publicMethod()
/** Since there is an unique instance of the singleton, then random number
 * that was generated will be the same despite the times you call the instance
 */
console.log(a.getRandomNumber() === b.getRandomNumber());
