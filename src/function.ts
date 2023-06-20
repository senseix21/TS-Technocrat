const sumOfNumbers = (num1: number, num2: number): void => {
    let sum = num1 + num2;
    console.log(sum);
}
sumOfNumbers(2, 9);

//square of an array of numbers 

const squareOfNumbers = (): void => {
    const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8]
    const newArray: number[] = array.map(elem => elem * elem)
    console.log('Square numbers', newArray)
}
squareOfNumbers();

//spread  operator

const arr1: number[] = [1, 2, 3, 4, 5, 6, 7];
const arr2: number[] = [...arr1, 8, 9, 10];
console.log('spread operator', arr2)

// rest opetator

const [first, second, ...rest] = ['jhon', 'mon', 'moo', 'xoo', 'doo', 'poo']
console.log(first);
console.log(second);
console.log(rest)
