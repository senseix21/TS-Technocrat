class Truck {
    name: string;
    brand: string;
    price: number;

    constructor(name: string, brand: string, price: number) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }

    makeSound(): void {
        console.log(`Car is making sound: ${this.name}`)
    }
}

class WarTruck extends Truck {
    speciality: string;
    constructor(name: string, brand: string, price: number, speciality: string) {
        super(name, brand, price);
        this.speciality = speciality;
    }

    throwMissile() {
        console.log(`Missile launched by ${this.name}`)
    }
}

const truck1 = new Truck('LambX1', 'Lambhorghini', 598000)
const truck2 = new WarTruck('LambZX2', 'Lambhorghini', 598000, 'Missile Launcher')
console.log(truck2)
truck2.throwMissile()
