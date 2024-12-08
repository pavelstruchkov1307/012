const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных вопросов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != '' && a != null && a.length < 50
                && b != '' && b != null && b.length < 50
            ) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
                continue;
            }
        } 
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы - киноман");
        } else {
            console.log("Произошла ошибка");
        }  
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        
            if (genre == "" || genre == null) {
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((e, i) => {
            console.log(`Любимый жанр №${++i} - это ${e}`);
        });
    },
    toggleVisibleMyDbB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    showDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
};

personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB,detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDbB();
personalMovieDB.showDB(personalMovieDB.privat);
