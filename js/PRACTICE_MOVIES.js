"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How much movies you have watched yet?");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How much movies you have watched yet?");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Name one of the latest watched movies?"),
              b = prompt("Type a last watched movie rating:");
                  
        if (a != '' && a != null && a.length < 50 && b != '' && b != null) {
            personalMovieDB.movies[a] = b;
            console.log('Done');             
        } else {
            console.log('Error');
            i--;
        }
    }    
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('You have watched a little amount of movies');
    } else if (personalMovieDB.count >+ 10 && personalMovieDB.count <= 30) {
        console.log('You are classic viewer');
    } else if (personalMovieDB.count > 30) {
        console.log('You are movie buff');
    } else {
        console.log('Error');
    }    
}
detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Your favourite genre number ${i}`);
    }
}
writeYourGenres();


