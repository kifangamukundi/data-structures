// Product classes
class ProductA {
    operation() {
      console.log('Operation of Product A');
    }
  }
  
  class ProductB {
    operation() {
      console.log('Operation of Product B');
    }
  }
  
  // Simple Factory
  class SimpleFactory {
    createProduct(type) {
      switch (type) {
        case 'A':
          return new ProductA();
        case 'B':
          return new ProductB();
        default:
          throw new Error('Invalid product type.');
      }
    }
  }
  
  // Usage
  const factory = new SimpleFactory();
  
  // Create ProductA
  const productA = factory.createProduct('A');
  productA.operation(); // Output: "Operation of Product A"
  
  // Create ProductB
  const productB = factory.createProduct('B');
  productB.operation(); // Output: "Operation of Product B"
  