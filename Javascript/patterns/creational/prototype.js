// Base Prototype
class Vehicle {
    constructor() {
      this.make = '';
      this.model = '';
      this.year = '';
    }
  
    clone() {
      // Create a new instance of the current object and copy its properties
      const clone = new Vehicle();
      clone.make = this.make;
      clone.model = this.model;
      clone.year = this.year;
      return clone;
    }
  
    display() {
      console.log(`Vehicle: ${this.make} ${this.model}, ${this.year}`);
    }
  }
  
  // Concrete Prototype 1
  class Car extends Vehicle {
    constructor() {
      super();
      this.type = 'Car';
    }
  
    display() {
      console.log(`Car: ${this.make} ${this.model}, ${this.year}`);
    }
  }
  
  // Concrete Prototype 2
  class Motorcycle extends Vehicle {
    constructor() {
      super();
      this.type = 'Motorcycle';
    }
  
    display() {
      console.log(`Motorcycle: ${this.make} ${this.model}, ${this.year}`);
    }
  }
  
  // Usage
  const carPrototype = new Car();
  carPrototype.make = 'Ford';
  carPrototype.model = 'Mustang';
  carPrototype.year = '2022';
  
  const carClone = carPrototype.clone();
  carClone.display();
  // Output: Car: Ford Mustang, 2022
  
  const motorcyclePrototype = new Motorcycle();
  motorcyclePrototype.make = 'Honda';
  motorcyclePrototype.model = 'CBR500R';
  motorcyclePrototype.year = '2021';
  
  const motorcycleClone = motorcyclePrototype.clone();
  motorcycleClone.display();
  // Output: Motorcycle: Honda CBR500R, 2021
  