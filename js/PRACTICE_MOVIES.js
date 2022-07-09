"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("How much movies you have watched yet?");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How much movies you have watched yet?");
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt("Name one of the latest watched movies?").trim(),
                  b = prompt("Type a last watched movie rating:");
                      
            if (a != '' && a != null && a.length < 50 && b != '' && b != null) {
                personalMovieDB.movies[a] = b;
                console.log('Done');             
            } else {
                console.log('Error');
                i--;
            }
        }        
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('You have watched a little amount of movies');
        } else if (personalMovieDB.count >+ 10 && personalMovieDB.count <= 30) {
            console.log('You are classic viewer');
        } else if (personalMovieDB.count > 30) {
            console.log('You are movie buff');
        } else {
            console.log('Error');
        }        
    },
    showMyDB: hidden => {
        if (!hidden) {
            console.log(personalMovieDB);
        }    
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Your favourite genre number ${i}`);
            personalMovieDB.genres[i - 1] = genres;
            
            if (genres === '' || genres == null) {
                console.log('Uncorrect input');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }    

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Your favourite genre #${i + 1} is ${item}`);
        });
    }
};
