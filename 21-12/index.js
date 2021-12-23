// function isEven(num) {
//     if (num % 2 == 0) {    //% calcula el resto de la division
//         console.log(true);
//     } else {
//         console.log(false);
//     }

// }

// isEven(13);

// function isLeapYear(year) {
//   if (year % 4 == 0 && year % 100 !== 0) {
//     console.log("ES BISIESTO");
//   } else if (year % 100 && year % 400 == 0) {
//     console.log("ES BISIESTO");
//   }else {
//     console.log("NO ES BISIESTO");
//   }
// }

// function isLeapYear(year) {
//     if ()

// }

// const number1 = 10;
// const number2 = 20;
// const number3 = 2;

// // ejemplo
// if (number1 === 10) {
//     console.log('number1 es estrictamente igual a 10');
// }

// if (number2 / number1 == 2) {
//     console.log("number2 dividido entre number1 es igual a 2");
// }

// if (number1 !== number2) {
//     console.log("number1 es estrictamente distinto a number2");
// }

// if (number3 != number1) {
//     console.log("number3 es distinto number1");
// }

// if (number3 * 5 == number1) {
//     console.log("number3 por 5 es igual a number1");
// }

// if (number3 * 5 == number1 && number1 * 2 == number2) {
//     console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
// }

// if (number2 / 2 == number1 || number1 / 5 == number3) {
//     console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
// }

// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// const nombres = ["Mario", "Paco", "Nacho", "Carlos"]

// nombres.forEach(function callback(element) {
//     console.log(element + " Perez");

// });

// const myArr = [1, 2, 3, 4, 5];

// myArr.forEach(function callback(element) {
//     console.log(element + 5);

// });

// for (variable of iterable ) {
//accion

//}

// let arr = [10, 20, 30]

// for (const value of arr) {
//     console.log(value);
// }

// let arr = ["marco", "polo", "sigue"]

// for (const value of arr) {
//     console.log(value);

// }
// const word = "Nacho";

// for (const value of word) {
//     console.log(value);
// }

// const spiderman = {
//     nombre: "Peter",
//     apellido: "APrker",
//     pais: "USA"
// };

// for (const key in spiderman) {
//     console.log(key + " " + spiderman[key]);
// };

// const products = [

//     "Camiseta de Pokemon",

//     "Pantalón coquinero",

//     "Gorra de gansta",

//     "Camiseta de Basket",

//     "Cinrurón de Orión",

//     "AC/DC Camiseta",

//   ];

//   function showProduct() {

//   }

//Iteración #3: Probando For...of

// Usa un bucle forof para recorrer todos los destinos del array.
//Imprime en un console.log sus valores.

// const placesToTravel = [
//     "Japon",
//     "Venecia",
//     "Murcia",
//     "Santander",
//     "Filipinas",
//     "Madagascar",
// ];

// for (const value of placesToTravel) {
//     console.log(value);
// }

// // Iteración #4: Probando For...in

// // Usa un for...in para imprimir por consola los datos del alienígena.. Puedes usar este objeto:

// const alien = {
//     name: "Wormuck",
//     race: "Cucusumusu",
//     planet: "Eden",
//     weight: "259kg",
// };

// for (const key in alien) {
//     console.log(key + ": " + alien[key]);
// }

//Iteración #5: Probando For

// Usa un bucle for para recorrer todos los destinos del array y
//elimina los elementos que tengan el id 11 y 40. Imprime en un console log el array. Puedes usar este array:

const placesToTravel = [
    { id: 5, name: "Japan" },
    { id: 11, name: "Venecia" },
    { id: 23, name: "Murcia" },
    { id: 40, name: "Santander" },
    { id: 44, name: "Filipinas" },
    { id: 59, name: "Madagascar" },
];

let contador = 0;

for (let value of placesToTravel) {
    console.log(contador);
    for (let key in value) {
        if (key == "id" && (value[key] == 11 || value[key] == 40)) {


            placesToTravel.splice(contador, 1);
        }
    }

    contador += 1;

}

console.log(placesToTravel);

// Iteración #6: Mixed For...of e includes

// Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
//Recuerda que puedes usar la función .includes() para comprobarlo.Puedes usar este array:

// const toys = [
//     { id: 5, name: "Buzz MyYear" },
//     { id: 11, name: "Action Woman" },
//     { id: 23, name: "Barbie Man" },
//     { id: 40, name: "El gato con Guantes" },
//     { id: 40, name: "El gato felix" },
// ];