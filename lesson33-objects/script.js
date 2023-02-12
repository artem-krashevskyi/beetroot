/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, 
обсяг паливного баку, середня витрата палива на 100 км., водії), 
і наступні методи для роботи з цим об'єктом: */
const car = {
  manufacturer: 'Ford Motor Company',
  model: 'Ford Focus C346',
  yearOfManufacture: 2018,
  meanSpeed: 150,
  tankVolume: 55,
  meanFuelExpenditure: 5,
  drivers: ['Alex Coal', 'David Simpson', 'Harry Kirk'],

  // Метод, який виводить на екран інформацію про автомобіль.
  showCarInfo: function() {
    const message = `
    Manufacturer: ${this.manufacturer}, 
    model: ${this.model}, 
    year of manufacture: ${this.yearOfManufacture}, 
    mean speed: ${this.meanSpeed}, 
    tank volume: ${this.tankVolume}, 
    mean fuel expenditure: ${this.meanFuelExpenditure}, 
    drivers: ${this.drivers}`;
    console.log(message);
  },

  // Перевірка водія на наявність його ім’я у списку
  checkDriver: function(name) {
    if (typeof name !== string) {
        return 'Invalid input!';
    }
    return this.drivers.includes(name);
  },

  // Додавання ім’я водія у список
  addDriver: function(name) {
    if (typeof name !== string) {
        return 'Invalid input!';
    }
    if (this.checkDriver(name)) {
      return 'This driver is already in the list!';
    }
    this.drivers.push(name);
  },

  /* Підрахунок необхідного часу та кількості палива для подолання переданої відстані 
    з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно 
    робити перерву на 1 годину. */
  getTimeAndFuel: function(distance) {
    if (isNaN(distance) || distance < 0) {
        return 'Invalid input!';
    }
    const time = Math.round((distance / this.meanSpeed + Math.floor(distance / this.meanSpeed / 4)) * 100) / 100;
    const fuelVolume = Math.round(distance / 100 * this.meanFuelExpenditure * 1000) / 1000;
    return `Time: ${time} hours, fuel volume: ${fuelVolume} liters`;
  },
};

car.showCarInfo();
// console.log(car.checkDriver('Alex Coal'));
// car.addDriver('Peter Green');
// console.log(car.drivers);
// console.log(car.getTimeAndFuel(250));


// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
const time = {
    hours: 11,
    minutes: 12,
    seconds: 13,

    // Для виведення часу на екран.
    showTime: function() {
        const message = `${this.hours}:${this.minutes}:${this.seconds}`;
        console.log(message);
    },

    // Зміни часу на передану кількість годин.
    changeHours: function(hour) {
        if (isNaN(hour)) {
            return 'Invalid input!';
        }
        hour = Math.floor(hour);
        this.hours += hour;
        if (this.hours >= 24 || this.hours < 0) {
            this.hours %= 24;
        }
        if (this.hours < 0) {
            this.hours += 24;
        }
    },

    // Зміни часу на передану кількість хвилин.
    changeMinutes: function(min) {
        if (isNaN(min)) {
            return 'Invalid input!';
        }
        min = Math.floor(min);
        this.minutes += min;
        if (this.minutes >= 60 || this.minutes < 0) {
            let hour = Math.floor(this.minutes / 60);
            this.minutes %= 60;
            this.changeHours(hour);
        }
        if (this.minutes < 0) {
            this.minutes += 60;
        }      
    },

    // Зміни часу на передану кількість секунд.
    changeSeconds: function(sec) {
        if (isNaN(sec)) {
            return 'Invalid input!';
        }
        sec = Math.floor(sec);
        this.seconds += sec;
        if (this.seconds >= 60 || this.seconds < 0) {
            let min = Math.floor(this.seconds / 60);
            this.seconds %= 60;
            this.changeMinutes(min);
        }
        if (this.seconds < 0) {
            this.seconds += 60;
        }
    }
}

// time.changeHours(2);
// time.changeMinutes(23);
// time.changeSeconds(41);
time.showTime();