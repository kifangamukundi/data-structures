// Multiton
class Multiton {
    static instances = {};
  
    static getInstance(key) {
      if (!Multiton.instances[key]) {
        Multiton.instances[key] = new Multiton();
      }
      return Multiton.instances[key];
    }
  
    operation() {
      console.log('Operation of Multiton');
    }
  }
  
  // Usage
  const instance1 = Multiton.getInstance('Key1');
  const instance2 = Multiton.getInstance('Key2');
  const instance3 = Multiton.getInstance('Key1');
  
  instance1.operation(); // Output: "Operation of Multiton"
  instance2.operation(); // Output: "Operation of Multiton"
  instance3.operation(); // Output: "Operation of Multiton"
  
  console.log(instance1 === instance2); // Output: false
  console.log(instance1 === instance3); // Output: true
  