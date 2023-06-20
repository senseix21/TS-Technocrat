class Car {
    nameOfCar: string;
    priceOfCar: number;

    constructor(nameOfCar: string, priceOfCar: number) {
        this.nameOfCar = nameOfCar;
        this.priceOfCar = priceOfCar;
    }

    car() {
        return `${this.nameOfCar} is $ ${this.priceOfCar} `
    }
}

const car1 = new Car("BMW", 1200000000)
console.log(car1)

class Person {
    public name: string;        // Public: Accessible everywhere
    private age: number;       // Private: Accessible within the class only
    protected address: string; // Protected: Accessible within the class and its subclasses

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getAge(): number {
        return this.age;  // Accessible within the class
    }
}

class Employee extends Person {
    private employeeId: number;

    constructor(name: string, age: number, address: string, employeeId: number) {
        super(name, age, address);
        this.employeeId = employeeId;
    }

    getEmployeeInfo(): string {
        return `${this.name} (ID: ${this.employeeId})`;  // Accessible within the subclass
    }
}

const person = new Person("John", 30, "123 Main St");
console.log(person.name);      // Output: John
// console.log(person.age);    // Error: 'age' is private and not accessible

const employee = new Employee("Jane", 25, "456 Oak St", 12345);
console.log(employee.name);    // Output: Jane (Inherited from Person)
// console.log(employee.age);  // Error: 'age' is private and not accessible
// console.log(employee.address); // Error: 'address' is protected and not directly accessible
console.log(employee.getAge()); // Output: 25 (Accessed through a public method)
console.log(employee.getEmployeeInfo()); // Output: Jane (ID: 12345)
