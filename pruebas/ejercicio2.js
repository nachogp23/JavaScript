// const myFavoriteHero = "Hulk";

// //let x = 50;
// //const h = 5;
// //const y = 10;
// //const z = h + y;

// //const character = { name: 'Jack Sparrow', age: 10 };
// const character = { name: 'Jack Sparrow', age: 25 };
// console.log(character);

// firstName = 'Jon';
// lastName = 'Snow';
// age = 24;
// console.log("Soy " + firstName + " " + lastName + ", tengo " + age + " años y me gustan los lobos");

// console.log(10 * 5);
// console.log(10 / 2);
// console.log(15 % 9);

// let y = 10;
// let z = 5;
// let x = y + z;

// console.log(x);

// y = 10;
// z = 5;
// x = y * z;

// console.log(x);

//Objetos

// const myAvenger = {
//     name: "Hulk",
//     power: 100,
//     creator: "Stan Lee",
// }

// const otherAvenger = new Object();
// otherAvenger.name = "Iron-man";
// otherAvenger.power = 90;
// otherAvenger.creator = "Stan Lee";

// console.log(otherAvenger);

// console.log(otherAvenger.power);

// otherAvenger.power = 95;

// console.log(otherAvenger.power);

// const avengers = ["Hulk", "Captain", "Spiderman"];

// const Avenger = avengers[2];

// console.log(Avenger);
// console.log(avengers);

// avengers.pop(); //Elimina ultimo
// avengers.shift(); //elimina primero

// console.log(avengers);

// avengers.push("Thor"); // añade elemento al final

// console.log(avengers);

// avengers.reverse(); //voltea array
// console.log(avengers);

// avengers.push("Antman");
// console.log(avengers);

// avengers.sort();
// console.log(avengers); //Ordena los elemntos, los string segun alfabeto, los numeros segun su primera cifra

// const months = ["Enero", "Marzo", "Abril", "Junio"];
// months.splice(1, 0, "Febrero")
// console.log(months);

// months.splice(4, 1, "Mayo");
// console.log(months);
// months.splice(4, 1)
// console.log(months);

// months.splice(1);
// console.log(months);

// months.splice(1, 0, "Febrero", "Marzo");
// console.log(months);
// months.push(Agosto);
// console.log(months);
// months.splice(3, 0, "A")

///ejercicio

// const toy1 = { name: 'Buss myYear', price: 19 };
// const toy2 = { name: 'Rallo mcKing', price: 29 };

// console.log(toy1.price + toy2.price);

// let globalBasePrice = 10000;
// const car1 = { name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
// const car2 = { name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000 };

// globalBasePrice = 25000;

// car1.finalPrice = car1.basePrice + globalBasePrice;
// car2.finalPrice = car2.basePrice + globalBasePrice;

// console.log(car1.finalPrice);
// console.log(car2.finalPrice);

//Ejercicio3

// const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// console.log(avengers[0]);

// // //const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
// // avengers.splice(0, 1, "IRONMAN")
// // console.log(avengers);

// // console.log(avengers.length);

// // const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
// // rickAndMortyCharacters.push("Morthy", "Summer");
// // console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// // const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// // rickAndMortyCharacters.pop();
// // console.log(rickAndMortyCharacters[0] + " " + rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

// const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
// rickAndMortyCharacters.splice(1, 1);
// console.log(rickAndMortyCharacters);

//concat

// const months = ["enero", "febrero", "marzo", "abril"];
// const numbs = [1, 2, 3, 4];

// const newArray = months.concat(numbs);
// console.log(newArray);

// //join

// console.log(newArray.join("-"));

// //slice

// const nombres = ["Maria", "Paula", "Nacho", "Roberto"]
// const newNames = nombres.slice(1, 3);
// console.log(newNames);

// function alerta() {
//     alert("A pastar");

// }

// alerta();

const number1 = 10;
const number2 = 20;
const number3 = 2;

function evalNums(a, b) {
    if (a === 10) {
        console.log("number1 es estrictamente igual a 10");
    }

    if ( /* COMPLETAR */ b / a == 2) {
        console.log("number2 dividido entre number1 es igual a 2");
    } else {
        console.log("Error");
    }
}

evalNums(number1, number2);