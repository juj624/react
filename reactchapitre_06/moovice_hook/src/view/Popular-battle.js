import Cards from "./Cards";
import {useState, useEffect} from "react";







function Popularbattle () {
    
    const [currentBattle, setCurrentBattle] = useState (0);
    const [movies, setMovies] = useState([]);
    const [favorite, setFavorite] = useState(localStorage.getItem("favorite") || []);
            


    const favoriteMode = () => { 
        localStorage.setItem("favorite",[]);
    }

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e3fc22e9d74b9e11555d62db054ef528")
            .then(res => res.json())
            .then(movie => {
                setMovies(movie.results);
            })
            .catch(error => console.error(error));

    })
    
     const handleClick = () =>{
        setCurrentBattle( currentBattle + 2);
    }


         console.log(movies)
        return (
            <div>
                <h1>Popular-battle</h1>
                {(currentBattle === movies.length) ? <p>Vous avez parcouru tous les films !</p> :
                 movies.slice(currentBattle, (currentBattle + 2)).map((movie) =>{
                    const movieLink = "https://image.tmdb.org/t/p/w300/"
                  
                    return (
                        <Cards
                            onclick={ () => handleClick(movie.id)}
                            poster_path={movieLink + movie.poster_path}
                            title={movie.title}
                            release_date={movie.release_date}
                            overview={movie.overview}
                        />
                    )
                })}
                
               
            </div>
        );
}



export default Popularbattle;