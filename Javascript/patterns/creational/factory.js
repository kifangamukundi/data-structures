// Product interface
class Product {
    operation() {
      // Common operation for all products
      console.log("Performing common operation");
    }
  }
  
  // Concrete products
  class ConcreteProduct1 extends Product {
    operation() {
      // Specific operation for ConcreteProduct1
      console.log("Performing specific operation for ConcreteProduct1");
    }
  }
  
  class ConcreteProduct2 extends Product {
    operation() {
      // Specific operation for ConcreteProduct2
      console.log("Performing specific operation for ConcreteProduct2");
    }
  }
  
  // Creator class
  class Creator {
    factoryMethod() {
      throw new Error("factoryMethod() must be implemented by the subclass.");
    }
  
    someOperation() {
      const product = this.factoryMethod();
      product.operation();
      // Additional operations with the product
    }
  }
  
  // Concrete creators
  class ConcreteCreator1 extends Creator {
    factoryMethod() {
      return new ConcreteProduct1();
    }
  }
  
  class ConcreteCreator2 extends Creator {
    factoryMethod() {
      return new ConcreteProduct2();
    }
  }
  
  // Usage
  const creator1 = new ConcreteCreator1();
  creator1.someOperation();
  // Output:
  // Performing specific operation for ConcreteProduct1
  
  const creator2 = new ConcreteCreator2();
  creator2.someOperation();
  // Output:
  // Performing specific operation for ConcreteProduct2
  