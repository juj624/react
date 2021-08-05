import React from "react";
import films from "../films.json"






class Movies extends React.Component {

  render() {
    return (
        <div className="block-movie">
            <h1>Movies</h1>
            {films.filter(film => film.id === parseInt(this.props.match.params.id)).map(film =>{
                return(
                  <div className="ggy">
                    <ul>
                      <li className="title-movie">{film.title}</li>
                      <img src={film.image}></img>
                      <li className="title-movie">{film.director}</li>
                      <li>{film.stars}</li>
                      <li>{film.description}</li>
                    </ul>
                  </div>
              )
            }
            )} 
        </div>
);
}
}


export default Movies;