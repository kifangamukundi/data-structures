// Implementor interface that defines the methods to be implemented by concrete implementors
class Implementor {
    operationImplementation() {
      throw new Error("operationImplementation() must be overridden.");
    }
  }
  
  // Concrete implementor classes that implement the Implementor interface
  class ConcreteImplementorA extends Implementor {
    operationImplementation() {
      console.log("Concrete Implementor A operation implementation.");
    }
  }
  
  class ConcreteImplementorB extends Implementor {
    operationImplementation() {
      console.log("Concrete Implementor B operation implementation.");
    }
  }
  
  // Abstraction class that provides an interface for the clients
  class Abstraction {
    constructor(implementation) {
      this.implementation = implementation;
    }
  
    operation() {
      // Delegates the operation to the implementation object
      this.implementation.operationImplementation();
    }
  }
  
  // Refined Abstraction classes that extend the Abstraction class
  class RefinedAbstraction extends Abstraction {
    additionalOperation() {
      console.log("Additional operation in Refined Abstraction.");
    }
  }
  
  // Client code that uses the Abstraction and Implementor interfaces
  function clientCode(abstraction) {
    abstraction.operation();
  }
  
  // Usage of the Bridge pattern
  const implementorA = new ConcreteImplementorA();
  const implementorB = new ConcreteImplementorB();
  
  const abstractionA = new Abstraction(implementorA);
  clientCode(abstractionA);
  
  const abstractionB = new RefinedAbstraction(implementorB);
  clientCode(abstractionB);
  abstractionB.additionalOperation();
  