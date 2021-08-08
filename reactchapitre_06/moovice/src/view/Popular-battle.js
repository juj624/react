import React from "react";
import Cards from "./Cards";







class Popularbattle extends React.Component {
    constructor() {
        super()

        this.state = {

            currentBattle: 0,
            movies: [],
            favorite: localStorage.getItem("favorite") || [],
            


        }

    }

    favoriteMode() {
        localStorage.setItem("favorite",[]);
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e3fc22e9d74b9e11555d62db054ef528")
            .then(res => res.json())
            .then(movie => {
                this.setState({ movies: movie.results });
            })
            .catch(error => console.error(error));

    }
    handleClick = () => {
        this.setState({

            currentBattle: this.state.currentBattle + 2
        });
    }

    render() {
         console.log(this.state.movies)
        return (
            <div>
                <h1>Popular-battle</h1>
                {this.state.movies.slice(this.state.currentBattle, (this.state.currentBattle + 2)).map((movie) => {
                    const movieLink = "https://image.tmdb.org/t/p/w300/"

                    if(this.state.currentBattle === this.state.movies){
                        alert("Vous avez parcouru tous les films !")
                         
                    }
                    return (
                        <Cards
                            onclick={ ()=> this.handleClick(movie.id)}
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


export default Popularbattle;