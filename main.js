//Exercise one
function greeting() {
  let message = "Hello World!";
  console.log(message);
}
greeting();

const pets = {
  type : "Birds",
  names : ["Pepperjack", "Gizmo", "Gadget"],
  printPets: function() {
    console.log(`My pet birds' names are: `,this.names);
  }
};
pets.printPets();

const bread = {
  type : "Bread",
  names : ["Toast", "Bagel", "Sourdough"],
  printBread: () => console.log("Bread comes in many different types like: ", this.names)
};
bread.printBread(); //prints undefined, look at again


//Exercise two
class Person {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }
  greet() {
    console.log(`Hello and Welcome ${this.name}!`);
  }
}
const person1 = new Person("Jason");
const person2 = new Person("Freddy");
person1.greet();
person2.greet();


//Exercise three
class Persons {
  constructor(name, age) {
    this.name = name,
    this.age = age
  }
}
const tom = new Persons("Tom", 3);
const jerry = new Persons("Jerry", 2);
console.log(tom);
console.log(jerry);


//E