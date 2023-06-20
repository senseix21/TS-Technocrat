type myTupple = [number, string, string, boolean, string]
const userInfo: myTupple = [1, 'Tom', 'Sad', true, '11223']

//write a function that will take two parameters , returns an array of elements thats present in the both arrays

const returnSimilarElement = (arr1: number[], arr2: number[]): number[] => {
    const newArray = arr1.filter(element => arr2.includes(element))
    return newArray;
}

const result1 = returnSimilarElement([1, 2, 3, 4, 5], [2, 4, 6, 8, 9])
console.log('Array of common elements', result1)

//write a funtion that will take a string param and check if it is palindromic and return a boolean value

const checkPalindromic = (word: string): boolean => {
    const reversed = word.split('').reverse().join('');
    if (word === reversed) {
        return true;
    }
    else {
        return false;
    }
}
const check1 = checkPalindromic('man');

//You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.

interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
}

const products: Product[] = [
    { id: '1', name: 'iphone', price: 4, category: 'phone' },
    { id: '2', name: 'android', price: 2, category: 'android' },
    { id: '3', name: 'mac', price: 4, category: 'mac' },
    { id: '4', name: 'windows', price: 4, category: 'windows' }
];

const newProducts = products.filter(product => product.price === 4);

const totalPrice = products.reduce((acc: number, product: Product) => {
    return acc + product.price
}, 0)

console.log(newProducts);
console.log(totalPrice);

//Write a function to sum all the even numbers

const sumOfEvenNumbers = (numbers: number[]): number => {
    const evenNumbers = numbers.filter(n => n % 2 === 0);
    const sum = evenNumbers.reduce((acc: number, number): number => {
        return acc + number
    })
    return sum;
}

const numbers1: number = sumOfEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
console.log(numbers1, 'even')