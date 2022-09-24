function PokemonCard({pokemon}) {

  return (
    <div className="poke-resultado">
      <h2 style={{textTransform: "uppercase", color: "white", textAlign: "center"}}>{pokemon.name ? pokemon.name : pokemon.error}</h2>
      {pokemon.sprites ? <img className="poke-img" src={pokemon.sprites.other.home.front_default} alt="" /> : ""}
      {pokemon.types ? <h5 className="poke-tipo"> {pokemon.types[0].type.name}</h5> : ""}
    </div>
  )
}

export default PokemonCard