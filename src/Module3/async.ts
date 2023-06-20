// Asynchronous coding in TS

const categories: string[] = ["Electronics", "Clothing", "Books", "Home Decor"];
const data: string = 'Data is fetched'
const url: string = `https://jsonplaceholder.typicode.com/todos/1`


const makePromise = (): Promise<string[] | string> => {
    return new Promise<string[] | string>((resolove, reject) => {
        if (url) {
            resolove(url)
        }
        else {
            reject('Failed to fetch data')
        }
    });
};

//fetch data from jsonplaceholder
const fetchData = async (): Promise<string[]> => {
    const response = await fetch(url)
    const result = await response.json();
    return result;
}

const getData = async (): Promise<void> => {
    const result = await fetchData();
    console.log(result);
}
getData();


const result = makePromise();
console.log(result)