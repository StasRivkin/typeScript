const johny1 = {
    id: 1,
    firstName: 'John',
    lastName: 'Snow',
    address: {
        city: 'Ashdod',
        street: 'Plaut',
        building: 10,
    },
    salary: 100500,
    fullName(greeting) {
        return `${greeting}, ${this.firstName} ${this.lastName}`;
    },
};
// johny.id = 20;
const johny2 = {
    id: 1,
    firstName: 'John',
    lastName: 'Snow',
    address: {
        city: 'Ashdod',
        street: 'Plaut',
        building: 10,
    },
    salary: 100501,
    fullName(greeting) {
        return `${greeting}, ${this.firstName} ${this.lastName}`;
    },
};
console.log(johny1.salary);
console.log(johny2.salary);
