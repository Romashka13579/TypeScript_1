let Name = 'John';
let Name1: string;
Name1 = "Roma";
let newName = Name1.toUpperCase();
console.log(newName);

let bool: boolean = true;
console.log(bool);

let array: string[];
array = ["Roma", "Roma", "Roma"];

let newarray: Array<boolean>;
newarray = [true, false, true];
let num: Array<number>;
num = [1, 2, 3];
let res = num.filter((num) => num < 3);
let res2 = newarray.find((newarray) => newarray == true);
console.log(res);
console.log(res2);

const enum colors {
    Blue,
    Yellow
}
let color: colors = colors.Yellow;

let swapNumbs: [number, number];
function Swap(n1:number, n2:number): [number, number]{
    return [n2, n1];
}
swapNumbs = Swap(10, 20);
swapNumbs[1];

let empty : any;
empty = "11";
empty = 11;

