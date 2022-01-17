class Movie
        {
            constructor(title,studio,rating="PG")
            {
                this.title=title;
                this.studio=studio;
                this.rating=rating;
            }

            static getPG(movie=[movie1,movie2,movie3]){
                for(let key=1;key<movie.length;key++){
                    if(movie[key].rating==="PG"){
                        console.log( `
                            title=${movie[key].title} 
                            studio=${movie[key].studio}
                            rating=${movie[key].rating}
                        `);
                    }
                }
            }


        }

            let movie1=new Movie("Casino Royale","Eon Productions","PG13");
            let movie2=new Movie("mr and ms Ramachari","vishnu");
            let movie3=new Movie("KGF", "yash");
    
            console.log(Movie.getPG());
