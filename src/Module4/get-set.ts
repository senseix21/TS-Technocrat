class Person1 {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    public get name(): string {
        return this._name;
    }

    public set name(name: string) {
        this._name = name;
    }
}

const person1 = new Person1('John');
console.log(person1.name); // Output: John
person1.name = 'Doe';
console.log(person1.name); // Output: Doe
