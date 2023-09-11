//Exercise one
//Create three functions: one global, one as an object method, and an arrow function inside an object.
//Print the value of this inside each function
//Discuss or note down the differences you observe in the value of this across the three scenarios.
function greeting() {
  let message = "Hello World!";
  console.log(message);
}
greeting();//Hello World!

const pets = {
  type : "Birds",
  names : ["Pepperjack", "Gizmo", "Gadget"],
  printPets: function() {
    console.log(`My pet birds' names are: `,this.names);
  }
};
pets.printPets();//My pet birds' names are:  (3) ['Pepperjack', 'Gizmo', 'Gadget']
//use binding 'this' to refer to key name properties in an object

const bread = {
  type : "Bread",
  names : ["Toast", "Bagel", "Sourdough"],
  printBread: () => console.log("Bread comes in many different types like: ", bread.names)
};
bread.printBread(); //Bread comes in many different types like:  (3) ['Toast', 'Bagel', 'Sourdough']
//arrow functions dont have their own 'this' binding, they inherit 'this' from their containing lexical context


//Exercise two
//Define a Person class with properties name and age.
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }//Add a method greet() to this class which outputs a greeting.
  greet() {
    console.log(`Hello and Welcome ${this.name}!`);
  }
}
//Instantiate two different Person objects and invoke their greet methods.
const person1 = new Person("Jason");
const person2 = new Person("Freddy");
person1.greet();//Hello and Welcome Jason!
person2.greet();//Hello and Welcome Freddy!


//Exercise three
//Modify your Person class. The constructor should now accept and initialize name and age properties.
class Persons {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}//Create two different Person instances with unique names and ages.
const tom = new Persons("Tom", 3);
const jerry = new Persons("Jerry", 2);
console.log(tom);//Persons {name: 'Tom', age: 3}
console.log(jerry);//Persons {name: 'Jerry', age: 2}


//Exerise four
class Persona {
  constructor(name, age) {
    this.name = name
    this.age = age
  }//Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
  static info() {
    return "this is a Person class";
  }
}//Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.
console.log(Persona.info());//"this is a Person class"
Persona.info();//does not print, static methods cannot be called on instances


//Exercise five
//Within your Person class, add getters and setters for the age property.
class Personas {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }
  get age() {
    return this._age;
  }//Ensure with the setter that age can't be set to a negative value.
  set age(theAge) {
    if(theAge >= 0) {
      this._age = theAge;
    } else {
      console.log("Age cannot be a negative number");
    }
  }
}//Instantiate a Person object, try setting a negative age, and observe the results
const joe = new Personas("Joe", 5);
console.log(joe);//Personas {name:'Joe',_age: 5}
joe.age = -5;//Age cannot be a negative number
