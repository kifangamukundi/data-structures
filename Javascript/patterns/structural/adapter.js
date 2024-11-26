// Existing code with incompatible interface
class Adaptee {
    multiply(a, b) {
      return a * b;
    }
  }
  
  // Target interface expected by the client code
  class Target {
    add(a, b) {
      return a + b;
    }
  }
  
  // Adapter class that implements the target interface and adapts the Adaptee
  class Adapter {
    constructor() {
      this.adaptee = new Adaptee();
    }
  
    add(a, b) {
      // The adapter converts the add operation to the multiply operation of the Adaptee
      return this.adaptee.multiply(a, b);
    }
  }
  
  // Client code that uses the target interface
  function clientCode(target) {
    const result = target.add(3, 4);
    console.log('Result:', result);
  }
  
  // Usage of the adapter
  const adapter = new Adapter();
  clientCode(adapter);
  