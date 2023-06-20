const arrayOfNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const stringArrayOfNumbers: string[] = arrayOfNumbers.map(number => number.toString())
console.log(stringArrayOfNumbers);

//
type AreaNumber = {
    width: number;
    height: number;
}

type A = AreaNumber['width']
type B = keyof AreaNumber;

interface Person {

    firstName: string;

    lastName: string;

}



function fullName<T extends Person>(person: T): string {

    return `${person.firstName} ${person.lastName}`;

}