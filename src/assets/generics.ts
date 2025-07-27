function foo<T>(arg: T): T {
  return arg;
}
const str = foo<string>("hello");

class Box<T> {
  private _value: T;
  constructor(value: T) {
    this._value = value;
  }
  getValue(): T {
    return this._value;
  }
}
let box = new Box<number>(23);

interface ILength {
  length: number;
}
function ligIntentity<T extends ILength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
let result = ligIntentity("hello");
console.log(result);

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
let person = { name: "John", age: 30, city: "New York" };
let age: number = getProperty(person, "age");

interface Accessory {
  brand: string;
}
class Nicklase implements Accessory {
  brand: string;
  kind: string;
  constructor(brand: string, kind: string) {
    this.brand = brand;
    this.kind = kind;
  }
}
class Braselets implements Accessory {
  brand: string;
  year: number;
  constructor(brand: string, year: number) {
    this.brand = brand;
    this.year = year;
  }
}
function getRandonAccessory() {
  return Math.random() < 0.5
    ? new Nicklase("BrandName", "nicklace")
    : new Braselets("AnotherBrand", 12);
}

let present = getRandonAccessory();
if (present instanceof Braselets) {
  console.log(present.year);
} else console.log(present.kind);

if ("kind" in present) {
  console.log(present.kind);
}

const isNicklace = (prop: Accessory): boolean => {
  return (prop as Nicklase).kind !== undefined;
};

const ibBraseletes = (arg: Accessory): boolean => {
  return (arg as Braselets).year !== undefined;
};

let arr = ["I", "go", "home"]
arr.splice(1,1,"love")
console.log( arr )
