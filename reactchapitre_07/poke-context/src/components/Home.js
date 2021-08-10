import {useState, useEffect} from "react";



function Home() {


    const [pokemon, setPokemon] = useState();


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

          <p>Name:{pokemon.name}</p>
          <p>Height:{pokemon.height}</p> 
          <p>Weight:{pokemon.weight}</p>
          <p>Type:{pokemon.types[0].type.name}</p>

          <button onClick={handleClick}>clik me ;)</button>
      </div> 
    );
}


export default Home