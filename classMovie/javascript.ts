
let movies:string[]= [
   new Movie("Casino Royale", "Eon Productions", "PG­13"),
   new Movie ("Glass", "Buena Vista International", "PG­13"),
   new Movie ("Spider-Man: Into the Spider-Verse", "Columbia Pictures", "PG")];

   getPG(movies);

  function getPG(mov){
      let newArrayIndex:number = 0;
      let pgMov:string[]=[];
      for (let i:number = 0; i < mov.length; i++) {
      if (mov[i].getRating()==="PG") {
      pgMov[newArrayIndex] = mov[i];
      newArrayIndex++;
      
}

      }
      console.log(pgMov);
      

}





