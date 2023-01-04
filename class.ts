import { Login, User } from './interface';

class EmployeeInfo{
    id!: number;
    name!: string;
    surname!: string;

}

let Roma = new EmployeeInfo();

Roma.id = 1;
Roma.name = "Roma";
Roma.surname = "Romashka";

console.log(Roma);

class EmployeeInfo2  implements Login{
    #id: number; // # means private
    name: string;
    surname: string;
    set empID(id : number){
        this.#id = id;
    }
    get empID() : number{
        return this.#id;
    }
    constructor(id: number, name: string, surname: string){
        this.#id = id;
        this.name = name;
        this. surname = surname;
    }
    getNameWithSurname() : string{
        return `${this.name} and ${this.surname}`;
    }
    login(): User{
        return { name: "Roma", id: 10, nick:"Romashka", email:""};
    }
}

let Romashka = new EmployeeInfo2(2, "Romashka", "A.");

console.log(Romashka);
console.log(Romashka.empID);
console.log(Romashka.getNameWithSurname());
