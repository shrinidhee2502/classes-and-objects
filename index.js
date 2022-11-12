const obj1 = {},
  obj2 = {};
const weakmap = new WeakMap([
  //WeakMap
  [obj1, "desserts are delicious"],
  [obj2, obj1],
]);
console.log(weakmap);
//parent class
class Menu {
  //class is initiated
  constructor(dessert, name, price) {
    //constructor method for initializing object properties
    this.dessert = dessert;
    this.name = name;
    this.price = price;
  }

  //get()
  getDessertorder() {
    return `I ordered ${this.name}`;
  }
}
//
let dish1 = new Menu("Milkshake-", "vanilla shake", "Rs120");

let dish2 = new Menu("Ice cream-", "strawberry sundae", "Rs110");
//"I ordered strawberry sundae"
console.log(dish2.getDessertorder());
//child class
class desserts extends Menu {
  constructor(name) {
    super(name); //calls the super class constructor and pass in the name parameter
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is delicious.`);
  }
}
const d = new desserts("strawberry sundae"); //"strawberry sundae is delicious"
d.speak();
