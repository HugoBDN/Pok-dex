

const PokemonCard = () => {
    const pokemon = pokemonList[0]
    
    return (
        <figure>
            {pokemon.imgSrc ? (
              <>
                <img src={pokemon.imgSrc} alt={`photo de ${pokemon.name}`}/>
                <figcaption>Bulbizard</figcaption>
              </>
            ) : (
              <>
              <p>???</p>
              <figcaption>Mew</figcaption>
              </>
            )}   
        </figure>
    );
};

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;


//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png