// Subject Interface
class Subject {
    addObserver(observer) {
      throw new Error('addObserver method must be implemented');
    }
  
    removeObserver(observer) {
      throw new Error('removeObserver method must be implemented');
    }
  
    notifyObservers() {
      throw new Error('notifyObservers method must be implemented');
    }
  }
  
  // WeatherStation (Publisher)
  class WeatherStation extends Subject {
    constructor() {
      super();
      this.temperature = 0;
      this.humidity = 0;
      this.pressure = 0;
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer); // Add an observer
    }
  
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1); // Remove an observer
      }
    }
  
    notifyObservers() {
      this.observers.forEach(observer => {
        observer.update(this.temperature, this.humidity, this.pressure); // Notify each observer
      });
    }
  
    // Example method to update weather data
    setWeatherData(temperature, humidity, pressure) {
      this.temperature = temperature;
      this.humidity = humidity;
      this.pressure = pressure;
  
      // Notify observers about the updated weather data
      this.notifyObservers();
    }
  
    // Getter methods to access specific weather data
    getTemperature() {
      return this.temperature;
    }
  
    getHumidity() {
      return this.humidity;
    }
  
    getPressure() {
      return this.pressure;
    }
  }
  
  // Observer Interface
  class Observer {
    update(temperature, humidity, pressure) {
      // Handle the updated weather data
      console.log('Weather Observer:');
      console.log(`Temperature: ${temperature}`);
      console.log(`Humidity: ${humidity}`);
      console.log(`Pressure: ${pressure}`);
    }
  }
  
  // Concrete Observers
  class PhoneDisplay extends Observer {
    constructor(weatherStation) {
      super();
      this.weatherStation = weatherStation;
    }
  
    update(temperature, humidity, pressure) {
      super.update(temperature, humidity, pressure);
      // Perform specific actions for this observer
      console.log('Phone Display: Updating weather data');
  
      // Fetch specific data from the weather station
      const currentTemperature = this.weatherStation.getTemperature();
      const currentHumidity = this.weatherStation.getHumidity();
  
      // Use the fetched data as needed
      console.log('Phone Display: Current Temperature:', currentTemperature);
      console.log('Phone Display: Current Humidity:', currentHumidity);
    }
  }
  
  class DesktopDisplay extends Observer {
    constructor(weatherStation) {
      super();
      this.weatherStation = weatherStation;
    }
  
    update(temperature, humidity, pressure) {
      super.update(temperature, humidity, pressure);
      // Perform specific actions for this observer
      console.log('Desktop Display: Updating weather data');
  
      // Fetch specific data from the weather station
      const currentTemperature = this.weatherStation.getTemperature();
      const currentPressure = this.weatherStation.getPressure();
  
      // Use the fetched data as needed
      console.log('Desktop Display: Current Temperature:', currentTemperature);
      console.log('Desktop Display: Current Pressure:', currentPressure);
    }
  }
  
// Client code
const weatherStation = new WeatherStation(); // Create a weather station instance

const phoneDisplay = new PhoneDisplay(weatherStation); // Pass the weather station instance
const desktopDisplay = new DesktopDisplay(weatherStation); // Pass the weather station instance

weatherStation.addObserver(phoneDisplay); // Register observers for weather updates
weatherStation.addObserver(desktopDisplay);

// Function to simulate weather data changes
function simulateWeatherChanges() {
  const temperature = getRandomNumber(0, 40); // Generate a random temperature between 0 and 40
  const humidity = getRandomNumber(0, 100); // Generate a random humidity between 0 and 100
  const pressure = getRandomNumber(900, 1100); // Generate a random pressure between 900 and 1100

  weatherStation.setWeatherData(temperature, humidity, pressure); // Update weather data

  setTimeout(simulateWeatherChanges, 2000); // Call the function again after 2 seconds
}

// Helper function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Start simulating weather changes
simulateWeatherChanges();


// use cases
// Graphical User Interfaces (GUI): Updating components based on changes in data or state.
// Event-driven systems: Notifying multiple observers about emitted events.
// Model-View-Controller (MVC) architecture: Notifying views about changes in the model.
// Reactive programming: Creating streams of events for observers to subscribe to.
// Stock market systems: Notifying subscribers about price changes or market events.
// Distributed systems: Implementing publish-subscribe systems across a network.
// Message queues: Sending messages to multiple subscribed consumers.
// Chat applications: Notifying users about new messages in subscribed chat rooms.