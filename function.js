"use strict";
function Sum(a, b) {
    return a + b;
}
console.log(Sum(10, 5));
const myfunc = (num1, num2) => num1 - num2;
console.log(myfunc(13, 90));
function Sum2(a, b, c) {
    return c ? a + b + c : a + b;
}
console.log(Sum2(10, 5, 3));
function getItems(items) {
    return new Array().concat(items);
}
let resultsN = getItems([1, 2, 3, 4, 5]);
let resultsS = getItems(["a", "b", "c", "d", "e"]);
