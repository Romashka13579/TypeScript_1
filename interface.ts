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

interface Friend extends User {
    hobbies: string;
}

let friend : Friend = { name: "Roma", id: 10, nick:"Romashka", email:"", hobbies:"sport"};

export interface Login {
    login(): User;
}