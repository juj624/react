import React from "react";
import Cards from "./Cards";






class Popular extends React.Component {
    constructor(){
        super()

        this.state = {
        movies: [],
        
        }
     
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e3fc22e9d74b9e11555d62db054ef528")
        .then(res => res.json())
        .then(movie => {
            this.setState({ movies : movie.results });
        })
        .catch(error => console.error(error));
    
    }
  render() {
    return (
        <div>
            <h1>Popular</h1>
            {this.state.movies.map((movie) => {
                        const movieLink = "https://image.tmdb.org/t/p/w300/"
                        return(
                            <Cards
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
}


export default Popular;