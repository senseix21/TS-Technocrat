//Funnction
const createArray = (param: string): Array<string> => {
    return [param]
}

const createArray1 = <T>(param: T): T[] => {
    return [param];
}



const array1 = createArray('foo');
const array2 = createArray1(1);
console.log(array1)
console.log(array2)