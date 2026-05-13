import PokemonCard from './PokemonCard'
function PokemonList() {
  return (
    <section>
      <PokemonCard
        id={25}
        name="Pikachu"
        type="Elétrico"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      />
      <PokemonCard
        id={1}
        name="Bulbasaur"
        type="Grama / Veneno"
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    />
   </section>
  )
}

export default PokemonList
