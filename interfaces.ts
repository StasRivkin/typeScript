interface Address {
    city: string,
    street: string,
    building: string | number,
}

interface Person {
    readonly id: number,
    firstName: string,
    lastName: string,
    address: Address,
    fullName: (greeting: string) => string,
}

interface Employee extends Person {
    salary: number,
}

const johny1: Employee = {
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

const johny2copy = johny2 as Employee;
const Johny2copy2 = <Employee> johny2;
