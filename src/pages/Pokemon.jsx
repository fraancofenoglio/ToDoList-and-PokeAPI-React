import { useState } from "react";
import PokemonCard from "../components/PokemonCard";

function Pokemon() {
  
  const [value, setValue] = useState("")
  const [pokemon, setPokemon] = useState({})
  const [response, setResponse] = useState(0)
  
  const obtenerPokemon = async () => {
    
    const url =`https://pokeapi.co/api/v2/pokemon/${value}`;
    try {
      const resultado = await fetch(url);
      const data = await resultado.json();
      setPokemon(data);
      setResponse(resultado.status)
      
    } catch (error) {
      setPokemon({error: "Pokémon no encontrado"})
      setResponse(404)
    }
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(value !== ""){
      obtenerPokemon()
    }
  }

  return (
  <>
    <div className='poke-container'>
        <h1 className="poke-titulo">Búsqueda Pokémon</h1>

        <form onSubmit={handleSubmit} action="">
          <input autoFocus type="text" id="" onChange={ e => setValue(e.target.value)} />
          <button className="poke-boton" type="submit">Buscar</button>
        </form>
    </div>
     {response !== 0 ? <PokemonCard pokemon={pokemon}/> : ""}
  
  </>
  )
}

export default Pokemon