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

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
//   }
  
//   ask(
//     "Do you agree?",
//     function() { alert("You agreed."); },
//     function() { alert("You canceled the execution."); }
//   );

//   let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

//   ask(
//       'Do you agree?',
//       () => alert("You agreed."),
//       () => alert("You canceled the execution.")
//   );

// function copyObj(mainObj) {
//     const createdObj = {};

//     for (const key in mainObj) {     
//         createdObj[key] = mainObj[key];   
//     }

//     return createdObj;
// }

// const numbers = {
//     a: 2,
//     b: 'hello',
//     c: [1, 2, 3]
// };

// const newObj = copyObj(numbers);
// console.log(numbers);
// console.log(newObj);
