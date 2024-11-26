// Singleton implementation
const Singleton = (function () {
    let instance; // Private instance variable
  
    function Singleton() {
      // Constructor function
      if (instance) {
        return instance;
      }
      instance = this;
      // Add your initialization code here
    }
  
    return Singleton;
  })();
  
  // Usage
  const instance1 = new Singleton();
  console.log(instance1); // Output: Singleton {}
  
  const instance2 = new Singleton();
  console.log(instance2); // Output: Singleton {}
  
  console.log(instance1 === instance2); // Output: true (both instances are the same)
  