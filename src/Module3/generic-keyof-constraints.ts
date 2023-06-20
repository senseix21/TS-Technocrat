//
interface Person {
    name: string;
    age: number;
    gender: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const person: Person = {
    name: "Alice",
    age: 25,
    gender: "female",
};

const name1: string = getProperty(person, "name");
const age: number = getProperty(person, "age");
// const invalidKey: string = getProperty(person, "gender"); // Compilation error


interface Car {
    brand: string;
    model: string;
    year: number;
    price: number;
}

function pickProperties<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const picked: Partial<T> = {};
    keys.forEach(key => {
        picked[key] = obj[key];
    });
    return picked as Pick<T, K>;
}

const car: Car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    price: 25000,
};

const selectedProperties = pickProperties(car, ["brand", "year"]);
console.log(selectedProperties); // Output: { brand: "Toyota", year: 2022 }

