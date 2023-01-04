"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _EmployeeInfo2_id;
Object.defineProperty(exports, "__esModule", { value: true });
class EmployeeInfo {
}
let Roma = new EmployeeInfo();
Roma.id = 1;
Roma.name = "Roma";
Roma.surname = "Romashka";
console.log(Roma);
class EmployeeInfo2 {
    set empID(id) {
        __classPrivateFieldSet(this, _EmployeeInfo2_id, id, "f");
    }
    get empID() {
        return __classPrivateFieldGet(this, _EmployeeInfo2_id, "f");
    }
    constructor(id, name, surname) {
        _EmployeeInfo2_id.set(this, void 0); // # means private
        __classPrivateFieldSet(this, _EmployeeInfo2_id, id, "f");
        this.name = name;
        this.surname = surname;
    }
    getNameWithSurname() {
        return `${this.name} and ${this.surname}`;
    }
    login() {
        return { name: "Roma", id: 10, nick: "Romashka", email: "" };
    }
}
_EmployeeInfo2_id = new WeakMap();
let Romashka = new EmployeeInfo2(2, "Romashka", "A.");
console.log(Romashka);
console.log(Romashka.empID);
console.log(Romashka.getNameWithSurname());
//# sourceMappingURL=class.js.map