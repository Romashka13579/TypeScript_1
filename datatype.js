"use strict";
let Name = 'John';
let Name1;
Name1 = "Roma";
let newName = Name1.toUpperCase();
console.log(newName);
let bool = true;
console.log(bool);
let array;
array = ["Roma", "Roma", "Roma"];
let newarray;
newarray = [true, false, true];
let num;
num = [1, 2, 3];
let res = num.filter((num) => num < 3);
let res2 = newarray.find((newarray) => newarray == true);
console.log(res);
console.log(res2);
let color = 1 /* colors.Yellow */;
let swapNumbs;
function Swap(n1, n2) {
    return [n2, n1];
}
swapNumbs = Swap(10, 20);
swapNumbs[1];
let empty;
empty = "11";
empty = 11;
