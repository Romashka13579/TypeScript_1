"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// var Users = {
//     name: '',
//     id: 10,
//     nick: '',
//     email: '',
// };
let user = { name: "Roma", id: 10, nick: "Romashka", email: "" };
console.log(user.name, user.email);
let friend = { name: "Roma", id: 10, nick: "Romashka", email: "", hobbies: "sport" };
// let users: User[] = [
//     { name: "Roma", id: 1, nick:"Romashka1", email:""},
//     { name: "Omar", id: 2, nick:"Romashka2", email:""},
//     { name: "Maro", id: 3, nick:"Romashka3", email:""},
//     { name: "Arom", id: 4, nick:"Romashka4", email:""}
// ]
let [user1, user2, ...other] = [
    { name: "Roma", id: 1, nick: "Romashka1", email: "" },
    { name: "Omar", id: 2, nick: "Romashka2", email: "" },
    { name: "Maro", id: 3, nick: "Romashka3", email: "" },
    { name: "Arom", id: 4, nick: "Romashka4", email: "" }
];
console.log(user1, user2, other);
// let result = other.filter(user => user.id < 4);
// @Component({});
class Component {
    constructor(name) {
        this.name = name;
    }
}
//# sourceMappingURL=interface.js.map