export interface User {
    name: string;
    id: number;
    nick: string;
    email: string;
    adress?: Adress;
}

interface Adress {
    adress: {
        country: string;
        city: string;
        street: string;
        number: number;
    }
}

// var Users = {
//     name: '',
//     id: 10,
//     nick: '',
//     email: '',
// };

let user : User = { name: "Roma", id: 10, nick:"Romashka", email:""};

console.log(user.name, user.email);

interface Friend extends User {
    hobbies: string;
}

let friend : Friend = { name: "Roma", id: 10, nick:"Romashka", email:"", hobbies:"sport"};

export interface Login {
    login(): User;
}

// let users: User[] = [
//     { name: "Roma", id: 1, nick:"Romashka1", email:""},
//     { name: "Omar", id: 2, nick:"Romashka2", email:""},
//     { name: "Maro", id: 3, nick:"Romashka3", email:""},
//     { name: "Arom", id: 4, nick:"Romashka4", email:""}
// ]

let [user1, user2, ...other]: User[] = [
    { name: "Roma", id: 1, nick:"Romashka1", email:""},
    { name: "Omar", id: 2, nick:"Romashka2", email:""},
    { name: "Maro", id: 3, nick:"Romashka3", email:""},
    { name: "Arom", id: 4, nick:"Romashka4", email:""}
];

console.log(user1, user2, other);

// let result = other.filter(user => user.id < 4);

// @Component({});
class Component {
    constructor(public name: string) {}
}