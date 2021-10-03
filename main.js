
var genre = document.getElementById("genre").value;
var titel = document.getElementById("titel").value;
var year = document.getElementById("year").value;

class movie{
    constructor(genre,titel,year){
        this.genre = genre;
        this.titel = titel;
        this.year = year;

    }

}


let movies = new movie();

