/*
 * Para correr este fichero -> tendréis que estar dentro de la carpeta Ejercicio1
 * Abrir la terminal de VsCode
 * Escribir en consola 'node app.js'
 */

/*
 * Ejercicio Guiado
 * -> Arrays y condicionales
 */

// Vamos a declarar 3 arrays y queremos saber la longitud de cada uno de ellos.
// const avengers = ["Spiderman", "AntMan", "Hulk"];
// const mutants = ["Wolverine", "Ciclops", "Storm"];
// const defenders = ["Daredevil", "IronFist", "Luke Cage"];

// // Para ello declaremos una function -> por parametro le entra una lista
// function calcListLength(list) {
//     // Declaramos el contador que irá sumando el valor de cada uno de los elementos de la lista
//     let myLength = 0;
//     // Recorremos los elementos de la lista
//     list.forEach(function callback(element) {
//         // Acumumlamos el valor de la lista
//         myLength = myLength + element.length;
//     });
//     // Devolvemos
//     return myLength;
// }
// // Llamamos a nuestras funciones y asignamos el valor de retorno
// const avengersLength = calcListLength(avengers);
// const mutantsLength = calcListLength(mutants);
// const defendersLength = calcListLength(defenders);

// console.log(avengersLength);
// console.log(mutantsLength);
// console.log(defendersLength);

// // // Declaramos una funcion comparador para saber cual de los tres arrays es el mayor

// function comparator(a, b, c) {
//     if (a > b) {
//         if (a == c)
//             return 'Empate entre a y c';
//         if (a > c)
//             return 'a gana';
//         else
//             return 'c gana';
//     } else {
//         if (a == b)
//             return 'Empate entre a y b';
//         if (b > c)
//             return 'b gana';
//         else
//             return 'c gana';
//     }
// }

// // // le pasamos las longitudes de nuestros arrays y nos devolverá el elemento mayor-> el c
// console.log(comparator(avengersLength, mutantsLength, defendersLength));

// // //Ahora vamos a añadir la media de la longitud de los elementos de nuestra lista

// function media(a, b, c) {
//     return a + b + c / 3
// }

// // // Le pasamos a nuestra media los valores

// console.log(media(avengersLength,mutantsLength, defendersLength));

// // /*
// // * Ejercicio 1
// // * → Devuelve el string de mayor longitud
// */
// // Declaramos un array -> Cambiar nombre de myArray al vuestro e introducimos valore
// // Declaramos una variable donde guardaremos el string mayor de nuestro myArra
// // PRIMERA ITERACIÓN: Recorrer el Array y comprobar la longitud de cada uno de ellos
//     // SEGUNDA ITERACIÓN: Si longestElement es mayor a relement cambiamos el valor de longestElement
//     if() {
//         longestElement = element
//     }
// });
// // TERCERA ITERACIÓN MOSTRAR EL ELEMENTO MAYOR
// console.log(longestElement);
// /*

// const nombres = ["Nacho", "Marta", "Horacio", "Edgar", "Pablo", "Andrea", "Pau"];
// y

// let longestElement = "";

// .
// nombres.forEach(function callback(element) {
//     if (element.length > longestElement.length) {
//         longestElement = element;
//     }
// });

// console.log(longestElement);

// * Ejercicio 2
// * → Devuelve si puedes conducir
// */

// // PRIMERA ITERACIÓN: Declara variable age

// // SEGUNDA ITERACIÓN: Comprobar con un condicional si puedes conducir

// // TERCERA ITERACIÓN: Mostrar si puede conducir o no

// const age = 25;

// if (age >= 18) {
//     console.log("Puedes conducir");
// } else {
//     console.log("No puedes conducir");
// }

// /*
// * Ejercicio 3
// * → Quiero comer Pizza
// */

// // PRIMERA ITERACIÓN: Declara variable con un listado de comidas

// // SEGUNDA ITERACIÓN: Recorrer el listado de comidas

// // TERCERA ITERACIÓN: Si hay pizza me sirves pizza

// // CUARTA ITERACIÓN: Declara variable estoy a dieta

// // QUINTA ITERACIÓN: Cuando quiera pizza me sirves brocoli

// const comidas = ["lentejas", "macarrones", "paella", "pizza", "lasaña", "tortilla"];
// const dieta = true;
// //let order = "";
// comidas.forEach(function callback(element) {
//     if (element === "pizza" && dieta == true) {
//         console.log("Tenemos pizza pero esta a dieta...")

//     } else {
//         console.log("Tengo " + element);
//     }

// })

// /*
// * Ejercicio 4
// * → E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R
// */

// // PRIMERA ITERACIÓN: Declara variable con 'El rayo es el mejor'

// // SEGUNDA ITERACIÓN: Pasa ese texto a mayúsculas -> MDN es vuestro amigo

// // TERCERA ITERACIÓN: Modifica el string -> to array MDN

// // CUARTA ITERACIÓN: Añade un '-' después de cada elemento

// // Devuelve en un string E-L-R-A-Y-O-E-S-E-L-M-E-J-O-R

// const word = "el rayo es el mejor";
// const wordMayus = word.toUpperCase();
// const array = wordMayus.split("");
// let arrayFinal = [];
// //let index = 0;
// let finalText = "";

// array.forEach(function callback(element, index) {
//     //console.log(index);
//     if (element !== " " && index < array.length - 1) {
//         element = element + "-";
//         arrayFinal.push(element);
//     } else if (index == array.length - 1) {
//         arrayFinal.push(element);
//     }
//     //index += 1;
// });

// arrayFinal.forEach(function callback(element) {
//     finalText += element;
// });

// console.log(finalText);
// /*
// * Ejercicio 5

// * → La piramide - imprime por consola:
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
// */

// let piramide = "";
// for (let i = 1; i < 10; i++) {
//     piramide = "";
//     for (let j = 1; j <= i; j++) {
//         piramide += i;

//     }
//     console.log(piramide);
// }

// /*
// * Ejercicio 6
// * → La piramide Invertida- imprime por consola:
// 999999999
// 88888888
// 7777777
// 666666
// 55555
// 4444
// 333
// 22
// 1
// */


// for (let i = 9; i > 0; i--) {
//     piramide = "";
//     for (let j = 1; j <= i; j++) {
//         piramide += i;

//     }
//     console.log(piramide);
// }


// /*
// * Ejercicio 6 - BONUS
// * → Palíndromo: Esta función debe recibir un string y decir si es un palíndromo.
// * Un palíndromo es una frase que se lee igual al derecho que al revés.
// */

// var palindrome = (word) => {
//     // PRIMERA ITERACIÓN: declarar variable y pasarle el valor + toUpperCae + Eliminar espacios replace MDN
//     var initialWord = word; // + toUpperCae + replace;
//     // SEGUNDA ITERACIÓN: Hacer split + reverse + join MDN
//     var reverseWord = initialWord //  Split into an array, Reverse array, Join array elements into string
//     // TERCERA ITERACIÓN: Devolver true o false
//     return initialWord === reverseWord ? true : false;  // check if word is palindrome
// }
// // CUARTA ITERACIÓN: Llamar a la función palindrome pasando una palabra o frase- 'Yo soy'
// console.log(palindrome('Yo soy') ? 'es palíndromo' : 'NO es palíndromo');
// ```

function palindrome(word) {
    let initialWord = word.toUpperCase().replace(/ /g, "");
    let reverseWord = initialWord.split("").reverse().join("");
    if (reverseWord == initialWord) {

        console.log("Es palindromo");
    } else {

        console.log("No es palindromo");
    }
}

palindrome("Anna");