let isLoading: boolean;
isLoading = true;
// isLoading = 1; 

let num: number;
num = 1;
// num = true:

let str = 'Hello';
console.log(str);

//Array ----------------------->
const primes1: number[] = [2, 3, 5, 7];
const primes2: Array<number> = [11, 13, 17];

primes2.push(19);
//primes2.push('21');

primes2.forEach(e => {
    console.log(e);
});

//Tuple ---------------------->
const john: [string, string, number] = ['John', 'Smith', 123456789];
john[1] = 'Jackson';
john.push('Male', 42);

//Any ------------------------>
let z: any;
z = 100500;
z = '100500';
z = true;

//function typing ------------>
function fullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}
function greeting(name: string): void {
    console.log(name);
}

console.log(fullName('Mary', 'Smith'));
greeting('Tigran');

//Types --------------------->
type Login = string;
let nickName: Login = 'admin';

type ID = number | string;
let id1: ID = 1234;
let id2: ID = '4321';
id1 = '1234';

type User = {
    login: ID,
    password: string,
    birthday?: Date,
    [key: string]: string | number | Date | undefined
};

const petya: User = {
    login: 1234,
    password: '1234',
    birthday: new Date('1999-05-21'),
    hobby: 'chess',
    zip: 12345,
};

const mary: User = {
    login: 1235,
    password: '1235',
    hobby: 'JS'
};

type Area = {
    width: number,
    depth: number,
    area: () => number,
};

type Heigth = {
    heigth: number,
};

type Wardrobe = Area & Heigth & { volume: () => number };

let aron: Wardrobe = {
    width: 10,
    depth: 10,
    heigth: 20,
    area: function () {
        return this.width * this.depth;
    },
    volume: function() {
        return this.area() * this.heigth;
    },
};
