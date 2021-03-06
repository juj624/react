import {useState, useEffect, useContext} from "react";
import {UserContext } from '../App';




function Home() {


    const [pokemon, setPokemon] = useState();
    const checkContext = useContext(UserContext)
    


  useEffect(() => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon/1`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemon(response);
      });
  }, []);

  const handleClick = () => {
    const randomId = Math.floor(Math.random() * 100) + 1

    fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemon(response);
      });
  } 
  if (!pokemon){
    return null
  }

    return (
      <div>
          <h1>Home</h1>
          {! checkContext.isLogged ? <p>is not logged</p> : 
            <div className="crt">
            <p>Name :{pokemon.name}</p>
            <p>Height :{pokemon.height}</p> 
            <p>Weight :{pokemon.weight}</p>
            <p>Type :{pokemon.types[0].type.name}</p>
          </div>}

            <button className="click-me" onClick={handleClick}>clik me ;)</button>
      </div> 
);
}


export default Home