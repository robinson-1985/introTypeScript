// string, boolean, number, ...
let x: number = 10; 

x = 12;

console.log(x);

// inferencia x annotation
let y = 12; // inference
// y = "teste"

let z: number = 12; // annotation

// tipos básicos
let firstName: string = "John";
let age: number = 25;
const isAdmin: boolean = true;

// String != string

console.log(typeof firstName)

firstName = "Robinson"

console.log(firstName)

// object (Arrays)
const myNumbers: number[] = [1, 2, 3, 4, 5];

console.log(myNumbers);
console.log(myNumbers.length); // length é uma propriedade que contém o tamanho do array
console.log(firstName.toUpperCase()); // toUpperCase é um método que transforma a string em maiúscula
myNumbers.push(5); // push é um método que adiciona um elemento ao final do array

console.log(myNumbers);

// tuplas: em TS elas podem ser modificadas, já em Python não.
let myTuple: [number, string, string[]]

myTuple = [1, "Robinson", ["a", "b"]]

// object literals -> {propriedade: valor} ou {prop: value}: são chamadas de array de chaves e valores em outras linguagens.
const user: {name: string, age: number} = {
    name: "John",
    age: 25
}

console.log(user);
console.log(user.name);

// any: aceita qualquer tipo de dados. Não é recomendado usar.
let a:any = 0;

a = "Robinson";
a = true;
a = [1, 2, 3];

// union type: é um jeito TS para trabalhar com diversos tipos de variáveis
let id: string | number = "10"

id = 200

// type alias: é um jeito de criar um tipo personalizado
type myIdType = number | string | Array<number>

const userId: myIdType = 10
const productId: myIdType = "10"
const arrayId: myIdType = [1, 2, 3]

// enum: é um jeito de criar um conjunto de constantes
// exemplo: dias da semana, tamanho de camisetas, etc.

enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisetas = {
    name: "Camisa gola V",
    size: Size.G
};

console.log(camisetas);

// literal type: é um jeito de criar um tipo que aceita apenas um valor específico
let color: "red" | "green" | "blue";

// como alterar o valor de color
color = "red";

// exemplos também em autenticacao.ts
let teste: "autenticado" | null;

// teste = "outrovalor"
teste = "autenticado";
teste = null;

// functions: são blocos de código que podem ser chamados em qualquer parte do código
function soma(a: number, b: number): number { // lembre-se que tem que tipar as variáveis
    return a + b;
}

console.log(soma(10, 20)); // desse jeito, não consigo passar um valor que não seja number

// Posso trabalhar com uma string assim:
function sayHello(name: string): string {
    return `Hello ${name}`;
}

console.log(sayHello("Robinson"));

// Função que não retorna nada:
function logger(message: string): void { // void é um tipo de função que não retorna nada
    console.log(message);
}

logger("Hello World");

// Função greet que aceita qualquer tipo de parâmetro
function greeting(name: string, greet?: string) {
    if(greet) {
      console.log(`Olá ${greet} ${name}`);
      return
    } 
    console.log(`Olá ${name}`);
}

greeting("Robinson");
greeting("Robinson", "Sr.");

// interfaces: são formas de definir um tipo de objeto
interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams): number {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1: 1, n2: 2}));

// as interfaces eu consigo reutilizar em diversos lugares

function multiplyNumbers(nums: MathFunctionParams): number {
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
};

console.log(multiplyNumbers(someNumbers));

// narrowing: é um jeito de reduzir o tipo de uma variável
// exemplo: se eu tenho uma variável que aceita string e number, mas eu quero que ela aceite apenas string
// checagem de tipos
function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`);
        return
    } 
    console.log("Não foi passado um número");
}

doSomething(5);
doSomething(true);

// generics: são formas de criar funções e classes que aceitam qualquer tipo de dados
// exemplo: arrays, promises, etc.
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
}

const numbers = [1, 2, 3, 4, 5];
const names = ["John", "Doe", "Jane"];

showArraysItems(numbers);
showArraysItems(names);

// classes: são formas de criar objetos com propriedades e métodos
class User {
    name
    role
    isAproved
// constructor: é um método que é chamado quando a classe é instanciada
    constructor(name: string, role: string, isAproved: boolean) {
        this.name = name; // this é uma referência a própria classe
        this.role = role;
        this.isAproved = isAproved;
    }

    showUsername() {
        console.log(`O nome do usuário é ${this.name}`); // this é uma referência a própria classe
    }

    showUserRole(canShow: boolean) {
        if(canShow) {
            console.log(`A idade do usuário é ${this.role}`);
            return
        }
        console.log("Informação restrita");
    }
}

const naum = new User("Naum", "Admin", true);
console.log(naum);

naum.showUsername(); // O nome do usuário é Naum

naum.showUserRole(false); // Informação restrita

// interfaces em classes: são formas de definir um tipo de objeto em uma classe
interface IVehicle {
    brand: string;
    showBrand(): void;
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand
        this.wheels = wheels
    }

    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const fusca = new Car("Volkswagen", 4);
fusca.showBrand();

// herança: é um jeito de criar classes que herdam propriedades e métodos de outras classes
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    }

}

const a4 = new SuperCar("Audi", 4, 2.0);

console.log(a4);

a4.showBrand();

// decorators: são formas de adicionar funcionalidades a classes e métodos
// exemplo: @Component, @Injectable, @NgModule, etc.

//constructor decorator
function BaseParameters(){
    return function <T extends {new (...args: any[]):{}}>(constructor: T){
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParameters()
class Person{
    name

    constructor(name: string) {
        this.name = name;
    }
}

const sam = new Person("Sam");

console.log(sam);
