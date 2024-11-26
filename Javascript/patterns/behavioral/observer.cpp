#include <iostream>
#include <vector>
#include <thread> // Include the <thread> header for std::this_thread

// Forward declaration
class Observer;

// Subject Interface
class Subject {
public:
    virtual void addObserver(Observer* observer) = 0;
    virtual void removeObserver(Observer* observer) = 0;
    virtual void notifyObservers() = 0;
};

// Observer Interface
class Observer {
public:
    virtual void update(int temperature, int humidity, int pressure) = 0;
};

// WeatherStation (Publisher)
class WeatherStation : public Subject {
private:
    int temperature;
    int humidity;
    int pressure;
    std::vector<Observer*> observers;

public:
    void addObserver(Observer* observer) override {
        observers.push_back(observer);
    }

    void removeObserver(Observer* observer) override {
        for (auto it = observers.begin(); it != observers.end(); ++it) {
            if (*it == observer) {
                observers.erase(it);
                break;
            }
        }
    }

    void notifyObservers() override {
        for (auto observer : observers) {
            observer->update(temperature, humidity, pressure);
        }
    }

    void setWeatherData(int temperature, int humidity, int pressure) {
        this->temperature = temperature;
        this->humidity = humidity;
        this->pressure = pressure;
        notifyObservers();
    }

    int getTemperature() const {
        return temperature;
    }

    int getHumidity() const {
        return humidity;
    }

    int getPressure() const {
        return pressure;
    }
};

// Concrete Observers
class PhoneDisplay : public Observer {
private:
    WeatherStation* weatherStation;

public:
    PhoneDisplay(WeatherStation* weatherStation) : weatherStation(weatherStation) {}

    void update(int temperature, int humidity, int pressure) override {
        std::cout << "Weather Observer:" << std::endl;
        std::cout << "Temperature: " << temperature << std::endl;
        std::cout << "Humidity: " << humidity << std::endl;
        std::cout << "Pressure: " << pressure << std::endl;

        std::cout << "Phone Display: Updating weather data" << std::endl;
        int currentTemperature = weatherStation->getTemperature();
        int currentHumidity = weatherStation->getHumidity();

        std::cout << "Phone Display: Current Temperature: " << currentTemperature << std::endl;
        std::cout << "Phone Display: Current Humidity: " << currentHumidity << std::endl;
    }
};

class DesktopDisplay : public Observer {
private:
    WeatherStation* weatherStation;

public:
    DesktopDisplay(WeatherStation* weatherStation) : weatherStation(weatherStation) {}

    void update(int temperature, int humidity, int pressure) override {
        std::cout << "Weather Observer:" << std::endl;
        std::cout << "Temperature: " << temperature << std::endl;
        std::cout << "Humidity: " << humidity << std::endl;
        std::cout << "Pressure: " << pressure << std::endl;

        std::cout << "Desktop Display: Updating weather data" << std::endl;
        int currentTemperature = weatherStation->getTemperature();
        int currentPressure = weatherStation->getPressure();

        std::cout << "Desktop Display: Current Temperature: " << currentTemperature << std::endl;
        std::cout << "Desktop Display: Current Pressure: " << currentPressure << std::endl;
    }
};

int getRandomNumber(int min, int max) {
    return rand() % (max - min + 1) + min;
}

int main() {
    WeatherStation weatherStation;
    PhoneDisplay phoneDisplay(&weatherStation);
    DesktopDisplay desktopDisplay(&weatherStation);

    weatherStation.addObserver(&phoneDisplay);
    weatherStation.addObserver(&desktopDisplay);

    while (true) {
        int temperature = getRandomNumber(0, 40);
        int humidity = getRandomNumber(0, 100);
        int pressure = getRandomNumber(900, 1100);

        weatherStation.setWeatherData(temperature, humidity, pressure);

        // Sleep for 2 seconds
        std::this_thread::sleep_for(std::chrono::seconds(2));
    }

    return 0;
}
