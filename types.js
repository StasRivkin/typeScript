let isLoading;
isLoading = true;
// isLoading = 1; 
let num;
num = 1;
// num = true:
let str = 'Hello';
console.log(str);
//Array ----------------------->
const primes1 = [2, 3, 5, 7];
const primes2 = [11, 13, 17];
primes2.push(19);
//primes2.push('21');
primes2.forEach(e => {
    console.log(e);
});
//Tuple ---------------------->
const john = ['John', 'Smith', 123456789];
john[1] = 'Jackson';
john.push('Male', 42);
//Any ------------------------>
let z;
z = 100500;
z = '100500';
z = true;
//function typing ------------>
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}
function greeting(name) {
    console.log(name);
}
console.log(fullName('Mary', 'Smith'));
greeting('Tigran');
let nickName = 'admin';
let id1 = 1234;
let id2 = '4321';
id1 = '1234';
const petya = {
    login: 1234,
    password: '1234',
    birthday: new Date('1999-05-21'),
    hobby: 'chess',
    zip: 12345,
};
const mary = {
    login: 1235,
    password: '1235',
    hobby: 'JS'
};
let aron = {
    width: 10,
    depth: 10,
    heigth: 20,
    area: function () {
        return this.width * this.depth;
    },
    volume: function () {
        return this.area() * this.heigth;
    },
};
