
type Alphanumeric = string | number

function add(param1: Alphanumeric, param2: Alphanumeric): Alphanumeric | undefined {
    if (typeof param1 == "number" && typeof param2 == 'number') {
        return param1 + param2;
    }
    else {
        return param1.toString() + param2.toString();
    }
}

const add1 = add("2", "2");
console.log(add1);