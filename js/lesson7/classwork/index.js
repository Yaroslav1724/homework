

    // Завдання 1 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    //     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    //     -- changeYear (newValue) - змінює рік випуску на значення newValue
    //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    //
    // function Cars(model, zavod, year, topsped, volume) {
    //     this.model = model;
    //     this.zavod = zavod;
    //     this.year = year;
    //     this.topsped = topsped;
    //     this.volume = volume;
    //     this.drive = function () {
    //         console.log(`їдемо зі швидкістю ${this.topsped} на годину`)
    //     }
    //     this.info = function () {
    //         for (let key in this) {
    //             if (typeof this[key] !== 'function')
    //                 console.log(`${key} - ${this[key]}`)
    //         }
    //     }
    //     this.newTopSped = function (newSped) {
    //         this.topsped = topsped + newSped;
    //     }
    //     this.changeYear = function (newValue) {
    //         this.year = newValue;
    //     }
    //     this.addDriver = function (driver) {
    //         this.driver = driver;
    //     }
    //
    // }
    // let addCar = new Cars ('bmv', 'germany', 2012, 300, 3.2);
    // console.log(addCar);
    // addCar.drive ();
    // addCar.info();
    // addCar.newTopSped(100);
    // addCar.drive();
    // addCar.changeYear(2022)
    // addCar.info();
    // addCar.addDriver('ivan')
    // console.log(addCar)

    // Завдання 2 - (Те саме, тільки через клас)
    // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    //     -- changeYear (newValue) - змінює рік випуску на значення newValue
    //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    //
    // class Cars1 {
    // constructor(model, zavod, year, maxsped, engine) {
    //     this.model = model;
    //     this.zavod = zavod;
    //     this.year = year;
    //     this.maxsped = maxsped;
    //     this.enqine = engine;
    // }
    // drive(){
    //     console.log(`їдемо зі швидкістю ${this.maxsped} на годину`)
    // }
    // info() {
    //     for (let key in this) {
    //         console.log(`${key} - ${this[key]}`)
    //     }
    // }
    // newMaxSped (newSped) {
    //     this.maxsped = this.maxsped + newSped;
    // }
    //     changeYear (newValue){
    //     this.year = newValue;
    //     }
    //     addDriver (driver){
    //     this.driver = driver;
    //     }
    // }
    // let addCars1 = new Cars1 ('audi', 'germany', 2016, 255, 4.2)
    // console.log(addCars1)
    // addCars1.drive();
    // addCars1.info();
    // addCars1.newMaxSped(90)
    // addCars1.drive();
    // addCars1.changeYear(1999)
    // addCars1.info();
    // addCars1.addDriver('taras')
    // console.log(addCars1)

    // Завдання 3 Створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
    //
    // class Popelushka {
    //     constructor(name, age, foot) {
    //         this.name = name;
    //         this.age = age;
    //         this.foot = foot;
    //     }
    // }
    // let array = [
    //     new Popelushka('olya',21,44),
    //     new Popelushka('ivanka', 22,55),
    //     new Popelushka('katya', 23,35),
    //     new Popelushka('natalia', 24,34),
    //     new Popelushka('nadia', 25,23),
    //     new Popelushka('sofiya', 26,22),
    //     new Popelushka('nastya', 27,45),
    //     new Popelushka('kristina', 28,43),
    //     new Popelushka('lubov', 29,39),
    //     new Popelushka('vira', 30,33)
    // ]
    // console.log(array)

    // Завдання 4 Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    //
    // class Prince{
    // constructor(name, age, shoe) {
    //     this.name = name;
    //     this.age = age;
    //     this.shoe = shoe;
    // }
    // }
    // let prince = new Prince('ivan', 92, 45)
    // console.log(prince)

    // Завдання 5 За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    //
    // let Para = (array, prince) => {
    //     for (let element of array) {
    //         if (element.foot === prince.shoe){
    //             return `твоя попелюшка: ${element.name}`
    //
    //         }
    //     }
    //
    // }
    // console.log(Para(array,prince))

    // Завдання 6 Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
    //
    // const Princess = array.find((element) => element.foot === prince.shoe);
    // console.log(Princess);
    //
