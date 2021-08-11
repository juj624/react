import React, { Component } from 'react';
import Card from '../components/Card'

function Popular (){
    const [movies, setMovies] = useState();
}
    useEffect(() => {
        const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769"

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("data in popular component did mount", data);

                useState({
                    movies: data.results
                })
            })
    }

        return (
            <div className="container">
                <h1 className="text-center">Popular</h1>

                <div className="row">
                    
                        movies.map(elem => {
                            return (
                                <div className="col-6">
                                    <Card {...elem} />
                                </div>
                            )
                        })
                    
                </div>


            </div>
        );
    

    
export default Popular;
