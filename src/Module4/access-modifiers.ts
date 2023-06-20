class Car {
    public make: string;
    private model: string;
    protected year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    public getInfo() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}.`);
    }

    private getSecret() {
        console.log('This is a secret.');
    }

    protected getYear() {
        return this.year;
    }
}

class SportsCar extends Car {
    public topSpeed: number;

    constructor(make: string, model: string, year: number, topSpeed: number) {
        super(make, model, year);
        this.topSpeed = topSpeed;
    }

    public getSportsCarInfo() {
        console.log(`This sports car is a ${this.make} ${this.model} from ${this.getYear()} with a top speed of ${this.topSpeed} mph.`);
    }
}

const myCar = new Car('Toyota', 'Camry', 2022);
console.log(myCar.make); // public member is accessible
console.log(myCar.model); // private member is not accessible
console.log(myCar.year); // protected member is not accessible
myCar.getInfo(); // public method is accessible
myCar.getSecret(); // private method is not accessible
myCar.getYear(); // protected method is not accessible

const mySportsCar = new SportsCar('Porsche', '911', 2022, 180);
console.log(mySportsCar.make); // public member is accessible
console.log(mySportsCar.model); // private member is not accessible
console.log(mySportsCar.year); // protected member is not accessible
mySportsCar.getInfo(); // public method is accessible
mySportsCar.getSecret(); // private method is not accessible
console.log(mySportsCar.getYear()); // protected method is accessible
mySportsCar.getSportsCarInfo(); // public method from derived class is accessible
