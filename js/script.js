// "use strict";

// const numberOfFilms = +prompt('How much movies you have watched yet?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Name one of the latest watched movies?'),
//       b = prompt('Type a last watched movie rating:');

// personalMovieDB.movies[a] = b;

// console.log(personalMovieDB);

// let result = '';
// const lengthLoop = 7; 

// for (let i = 1; i < lengthLoop; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }
// console.log(result);

// function firstTask() {
//     for (let i = 5; i <= 10; i++) {
//         console.log(i);
//     } 
//     return;   
// }
// console.log(firstTask());

// function secondTask() {
//     for (let i = 20; i > 9; i--) {
//         if (i === 13) {
//             break;
//         } else {
//         console.log(i);
//         }
//     }
// }
// console.log(secondTask());

// function thirdTask() {
//     for (let i = 2; i < 11; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         } else {
//             continue;
//         }
//     }
// }
// console.log(thirdTask());

// function thirdTask() {
//     for (let i = 2; i < 11; i += 2) {
//         console.log(i);
//     }
// }
// console.log(thirdTask());



// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    let i = 2;
    while (i % 2 === 1) {
        console.log(i);
        i++;
    }
}
console.log(fourthTask());