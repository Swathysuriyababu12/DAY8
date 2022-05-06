var Movie = /** @class */ (function () {
    function Movie(title, studio, rating) {
        this.tit = title;
        this.stud = studio;
        this.rat = rating;
        console.log(this.tit, this.stud, this.rat);
    }
    Movie.prototype.getRating = function () {
        return this.rat;
    };
    return Movie;
}());
