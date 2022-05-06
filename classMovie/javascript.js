var movies = [
    new Movie("Casino Royale", "Eon Productions", "PG­13"),
    new Movie("Glass", "Buena Vista International", "PG­13"),
    new Movie("Spider-Man: Into the Spider-Verse", "Columbia Pictures", "PG")
];
getPG(movies);
function getPG(mov) {
    var newArrayIndex = 0;
    var pgMov = [];
    for (var i = 0; i < mov.length; i++) {
        if (mov[i].getRating() === "PG") {
            pgMov[newArrayIndex] = mov[i];
            newArrayIndex++;
        }
    }
    console.log(pgMov);
}



//results
/*   Casino Royale Eon Productions PG­13
movie.js:6 Glass Buena Vista International PG­13
movie.js:6 Spider-Man: Into the Spider-Verse Columbia Pictures PG
javascript.js:16 */
