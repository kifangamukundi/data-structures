// Service dependencies
class DependencyA {
    methodA() {
      console.log('Method A');
    }
  }
  
  class DependencyB {
    methodB() {
      console.log('Method B');
    }
  }
  
  // Consumer
  class Consumer {
    constructor(dependencyA, dependencyB) {
      this.dependencyA = dependencyA;
      this.dependencyB = dependencyB;
    }
  
    performOperation() {
      this.dependencyA.methodA();
      this.dependencyB.methodB();
      // Perform other operations using the injected dependencies
      // ...
    }
  }
  
  // Usage
  const dependencyA = new DependencyA();
  const dependencyB = new DependencyB();
  
  const consumer = new Consumer(dependencyA, dependencyB);
  consumer.performOperation();
  