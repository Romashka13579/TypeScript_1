function Sum(a: number, b: number): number {
    return a + b;
}
console.log(Sum(10, 5));

const myfunc = (num1: number, num2: number): number => num1 - num2;
console.log(myfunc(13, 90));

function Sum2(a: number, b: number, c?: number): number {
    return c? a + b + c : a + b;
}
console.log(Sum2(10, 5, 3));

function getItems<T>(items: T[]) : T[]{
    return new Array<T>().concat(items);
}

let resultsN = getItems<number>([1,2,3,4,5]);
let resultsS = getItems<string>(["a","b","c","d","e"]);