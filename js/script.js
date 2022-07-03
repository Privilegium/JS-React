"use strict";

const numberOfFilms = +prompt('How much movies you have watched yet?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Name one of the latest watched movies?'),
      b = prompt('Type a last watched movie rating:');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);

// personalMovieDB.movies['' + lastMovie] = lastMovieRate;
