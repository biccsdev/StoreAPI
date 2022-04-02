const myName = 'Victor';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
console.log(suma(12, 16));

class Persona {
  //TS constructor
  constructor(private age: number, private name: string) {}

  getSummary() {
    return `My name is ${this.name} and i'm ${this.age} years old`;
  }
}

const victor = new Persona(22, 'Victor');
victor.getSummary();
