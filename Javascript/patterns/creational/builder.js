// Product
class Car {
    constructor() {
      // Initialize with default values
      this.make = '';
      this.model = '';
      this.year = '';
      this.color = '';
      this.price = 0;
    }
  
    // Setters for individual properties
    setMake(make) {
      this.make = make;
    }
  
    setModel(model) {
      this.model = model;
    }
  
    setYear(year) {
      this.year = year;
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setPrice(price) {
      this.price = price;
    }
  
    // Display the car details
    display() {
      console.log(`Car Details: ${this.make} ${this.model}, ${this.year}, ${this.color}, $${this.price}`);
    }
  }
  
  // Builder
  class CarBuilder {
    constructor() {
      this.car = new Car();
    }
  
    // Setters for individual properties, returns the builder for method chaining
  
    setMake(make) {
      this.car.setMake(make);
      return this;
    }
  
    setModel(model) {
      this.car.setModel(model);
      return this;
    }
  
    setYear(year) {
      this.car.setYear(year);
      return this;
    }
  
    setColor(color) {
      this.car.setColor(color);
      return this;
    }
  
    setPrice(price) {
      this.car.setPrice(price);
      return this;
    }
  
    // Get the final constructed car
    getResult() {
      return this.car;
    }
  }
  
  // Director
  class CarManufacturer {
    constructor(builder) {
      this.builder = builder;
    }
  
    // Construct a specific type of car
    constructSportsCar() {
      return this.builder
        .setMake('Ferrari')
        .setModel('458 Spider')
        .setYear('2022')
        .setColor('Red')
        .setPrice(300000)
        .getResult();
    }
  
    constructSUV() {
      return this.builder
        .setMake('Tesla')
        .setModel('Model X')
        .setYear('2021')
        .setColor('Black')
        .setPrice(80000)
        .getResult();
    }
  }
  
  // Usage
  const builder = new CarBuilder();
  const manufacturer = new CarManufacturer(builder);
  
  const sportsCar = manufacturer.constructSportsCar();
  sportsCar.display();
  // Output: Car Details: Ferrari 458 Spider, 2022, Red, $300000
  
  const suv = manufacturer.constructSUV();
  suv.display();
  // Output: Car Details: Tesla Model X, 2021, Black, $80000
  