class Movie{

/*  constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, 
    and sets the respective class properties to these values.*/
tit;
stud;
rat;
constructor(title:string,studio:string,rating:string){
    this.tit=title;
    this.stud=studio;
    this.rat=rating;
console.log(this.tit,this.stud,this.rat);
}
getRating(){
    return this.rat;
}


}