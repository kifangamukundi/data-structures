// Subsystem classes providing specific functionalities
class OrderValidation {
    validate(order) {
      console.log("Validating order...");
      // Implementation of order validation logic
      return true;
    }
  }
  
  class InventorySystem {
    checkAvailability(product) {
      console.log("Checking product availability...");
      // Implementation of availability check logic
      return true;
    }
  
    reserve(product) {
      console.log("Reserving product...");
      // Implementation of product reservation logic
    }
  }
  
  class PaymentGateway {
    processPayment(order) {
      console.log("Processing payment...");
      // Implementation of payment processing logic
      return true;
    }
  }
  
  // Facade class providing a simplified interface to the subsystems
  class OrderProcessingFacade {
    constructor() {
      this.orderValidation = new OrderValidation();
      this.inventorySystem = new InventorySystem();
      this.paymentGateway = new PaymentGateway();
    }
  
    processOrder(order) {
        if (!this.orderValidation.validate(order)) {
          console.log("Invalid order. Order processing canceled.");
          return false;
        }
      
        if (!this.inventorySystem.checkAvailability(order.product)) {
          console.log("Product is not available. Order processing canceled.");
          return false;
        }
      
        this.inventorySystem.reserve(order.product);
      
        if (!this.paymentGateway.processPayment(order)) {
          console.log("Payment failed. Order processing canceled.");
          return false;
        }
      
        console.log("Order processed successfully.");
        return true;
    }      
  }
  
  // Client code that uses the facade to process orders
  const order = {
    product: "ABC123",
    quantity: 2,
    // Additional order details
  };
  
  const orderProcessingFacade = new OrderProcessingFacade();
  orderProcessingFacade.processOrder(order);
  