import React from "react";
import films from "../films.json"
import {Link} from "react-router-dom"



class Home extends React.Component {

  render() {
    return (
        <div>
            <h1>HomePage</h1>
            <ul>
            {films.map(film =>{
                return(
                <li><Link to={`/${film.id}`}>{film.title}</Link></li>
                )
            }
            )} 
            </ul>
        </div>
);
  }
}


export default Home;