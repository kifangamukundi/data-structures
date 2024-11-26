// Component interface representing the Coffee
class Coffee {
    getDescription() {
      throw new Error("getDescription() must be overridden.");
    }
  
    getCost() {
      throw new Error("getCost() must be overridden.");
    }
  }
  
  // Concrete component representing a specific type of Coffee
  class Espresso extends Coffee {
    getDescription() {
      return "Espresso";
    }
  
    getCost() {
      return 1.99;
    }
  }
  
  // Another concrete component representing a different type of Coffee
  class Cappuccino extends Coffee {
    getDescription() {
      return "Cappuccino";
    }
  
    getCost() {
      return 2.49;
    }
  }
  
  // Another concrete component representing a different type of Coffee
  class Latte extends Coffee {
    getDescription() {
      return "Latte";
    }
  
    getCost() {
      return 2.99;
    }
  }
  
  // Base decorator class
  class CoffeeDecorator extends Coffee {
    constructor(coffee) {
      super();
      this.coffee = coffee;
    }
  
    getDescription() {
      return this.coffee.getDescription();
    }
  
    getCost() {
      return this.coffee.getCost();
    }
  }
  
  // Concrete decorator class representing an addon to the coffee
  class Milk extends CoffeeDecorator {
    getDescription() {
      // Append the addon description to the coffee's description
      return this.coffee.getDescription() + ", Milk";
    }
  
    getCost() {
      // Add the addon cost to the coffee's cost
      return this.coffee.getCost() + 0.5;
    }
  }
  
  // Another concrete decorator class representing an addon to the coffee
  class Vanilla extends CoffeeDecorator {
    getDescription() {
      // Append the addon description to the coffee's description
      return this.coffee.getDescription() + ", Vanilla";
    }
  
    getCost() {
      // Add the addon cost to the coffee's cost
      return this.coffee.getCost() + 0.25;
    }
  }
  
  // Usage of the Decorator pattern
  const espresso = new Espresso();
  console.log(espresso.getDescription()); // Output: Espresso
  console.log(espresso.getCost()); // Output: 1.99
  
  const cappuccino = new Cappuccino();
  console.log(cappuccino.getDescription()); // Output: Cappuccino
  console.log(cappuccino.getCost()); // Output: 2.49
  
  const latte = new Latte();
  console.log(latte.getDescription()); // Output: Latte
  console.log(latte.getCost()); // Output: 2.99
  
  const espressoWithMilk = new Milk(espresso);
  console.log(espressoWithMilk.getDescription()); // Output: Espresso, Milk
  console.log(espressoWithMilk.getCost()); // Output: 2.49
  
  const cappuccinoWithMilkAndVanilla = new Vanilla(new Milk(cappuccino));
  console.log(cappuccinoWithMilkAndVanilla.getDescription()); // Output: Cappuccino, Milk, Vanilla
  console.log(cappuccinoWithMilkAndVanilla.getCost()); // Output: 3.24
  
  const latteWithVanilla = new Vanilla(latte);
  console.log(latteWithVanilla.getDescription()); // Output: Latte, Vanilla
  console.log(latteWithVanilla.getCost()); // Output: 3.24

// use cases
// Graphical User Interfaces (GUIs): Adding dynamic decorations to GUI components.
// Input/Output Streams: Applying additional features to streams, such as buffering or compression.
// Logging: Extending logging functionality with decorators for timestamping, filtering, or formatting.
// Encryption: Layering encryption algorithms dynamically on data being encrypted or decrypted.
// Web Development: Modifying web requests and responses with decorators for authentication, caching, or compression.
// Text Processing: Applying multiple operations on a text stream with decorators for filtering, parsing, or formatting.
// Currency Conversion: Transparently converting amounts between currencies.
// Image Processing: Applying image filters or transformations to images.
// Permission Management: Enforcing fine-grained permissions for operations or actions.
// Caching: Adding caching functionality to data retrieval operations.
// Authentication and Authorization: Enforcing authentication and authorization checks for resource access.
// Serialization and Deserialization: Extending the serialization and deserialization process of objects.