import Cards from "./Cards";
import {useState, useEffect} from "react";






function Popular(){

    const [movies, setMovies] = useState([]);
     

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e3fc22e9d74b9e11555d62db054ef528")
        .then(res => res.json())
        .then(movie => {
            setMovies(movie.results);
        })
        .catch(error => console.error(error));
    
    })
  
    return (
        <div>
            <h1>Popular</h1>
            {movies.map((movie) => {
                        const movieLink = "https://image.tmdb.org/t/p/w300/"
                        return<div>
                            <Cards
                                poster_path={movieLink + movie.poster_path}
                                title={movie.title}
                                release_date={movie.release_date}
                                overview={movie.overview}
                            />
                            </div>

                        
            })}
        </div>
    );   
}



export default Popular;