// Abstract Product A
class AbstractProductA {
    operationA() {
      console.log("AbstractProductA operation");
    }
  }
  
  // Concrete Product A1
  class ConcreteProductA1 extends AbstractProductA {
    operationA() {
      console.log("ConcreteProductA1 operation");
    }
  }
  
  // Concrete Product A2
  class ConcreteProductA2 extends AbstractProductA {
    operationA() {
      console.log("ConcreteProductA2 operation");
    }
  }
  
  // Abstract Product B
  class AbstractProductB {
    operationB() {
      console.log("AbstractProductB operation");
    }
  }
  
  // Concrete Product B1
  class ConcreteProductB1 extends AbstractProductB {
    operationB() {
      console.log("ConcreteProductB1 operation");
    }
  }
  
  // Concrete Product B2
  class ConcreteProductB2 extends AbstractProductB {
    operationB() {
      console.log("ConcreteProductB2 operation");
    }
  }
  
  // Abstract Factory
  class AbstractFactory {
    createProductA() {
      throw new Error("createProductA() must be implemented by the subclass.");
    }
  
    createProductB() {
      throw new Error("createProductB() must be implemented by the subclass.");
    }
  }
  
  // Concrete Factory 1
  class ConcreteFactory1 extends AbstractFactory {
    createProductA() {
      return new ConcreteProductA1();
    }
  
    createProductB() {
      return new ConcreteProductB1();
    }
  }
  
  // Concrete Factory 2
  class ConcreteFactory2 extends AbstractFactory {
    createProductA() {
      return new ConcreteProductA2();
    }
  
    createProductB() {
      return new ConcreteProductB2();
    }
  }
  
  // Usage
  const factory1 = new ConcreteFactory1();
  const productA1 = factory1.createProductA();
  const productB1 = factory1.createProductB();
  productA1.operationA();
  productB1.operationB();
  // Output:
  // ConcreteProductA1 operation
  // ConcreteProductB1 operation
  
  const factory2 = new ConcreteFactory2();
  const productA2 = factory2.createProductA();
  const productB2 = factory2.createProductB();
  productA2.operationA();
  productB2.operationB();
  // Output:
  // ConcreteProductA2 operation
  // ConcreteProductB2 operation
  