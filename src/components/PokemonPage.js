import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")
  
  const filteredPokes = pokemons.filter(poke => 
      poke.name.includes(search)
  )
  
  const handleSubmit = (formData) => {
    //console.log(formData)
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(data => {
      setPokemons([...pokemons, data])
    })
  }

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setPokemons(data)
      })
  }, [])



  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onSubmit={handleSubmit}/>
      <br />
      <Search search={search} onSearch={setSearch}/>
      <br />
      <PokemonCollection pokemons={filteredPokes}/>
    </Container>
  );
}

export default PokemonPage;
