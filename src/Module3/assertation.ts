//assertation angle brackets
let value: any = "Hello, TypeScript!";
let lengthOf: number = (value as string).length;

console.log(lengthOf);

let value2: any = "Hello, TypeScript!";
let length2: number = (value2 as string).length;

console.log('length2', length2);

let value3: any = 'This is TypeScript! MOdule no.3 !We are learning TypeScript';
let length3: number = (value3 as string).length;

console.log('length3', length3);

//function
const kmToMetre = (param: string | number): string | number | undefined => {
    if (typeof param === 'string') {
        const metre = parseFloat(param) * 1000;
        return `${param} in meters is ${metre} m.`;
    }
    if (typeof param === 'number') {
        const metre = param * 1000;
        return `${param} in meters is ${metre} m.`;

    }

}

const firstResult = kmToMetre(22) as number;
console.log(firstResult);
const secondResult = kmToMetre('33') as number;
console.log(secondResult);