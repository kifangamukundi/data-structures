// HeavyResource represents a resource that is expensive to create
class HeavyResource {
    constructor() {
      console.log('Creating HeavyResource...');
      // Perform expensive initialization here
    }
  
    performOperation() {
      console.log('Performing operation on HeavyResource...');
      // Perform operation on the resource
    }
  }
  
  // Singleton with lazy initialization
  class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = new HeavyResource();
      }
    }
  
    getInstance() {
      return Singleton.instance;
    }
  }
  
  // Usage
  const singleton = new Singleton();
  
  // Perform operation on the singleton (resource is lazily initialized)
  singleton.getInstance().performOperation();
  