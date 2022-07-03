"use strict";

const numberOfFilms = prompt('How much movies you have watched yet?');

const lastMovie = prompt('Name one of the latest watched movies?');
const lastMovieRate = prompt('Type a last watched movie rating:');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        // lastMovie: lastMovieRate,
    },
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.movies['' + lastMovie] = lastMovieRate;

 console.log(personalMovieDB);

