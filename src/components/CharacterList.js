import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard';
import axios from 'axios';
import SearchForm from './SearchForm';

export default function CharacterList() {
  const [characters, setCharacters] = useState();
  const [info, setInfo] = useState();

  function fetchCharacterList(){
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response=>{
        console.log(response);
        setCharacters(response.data.results);
        setInfo(response.data.info);
      })
      .catch(error=>{
        console.log(error);
      });
  }

  useEffect(()=>{
    fetchCharacterList();
  }, [])

  console.log(characters);
  
  function filterCharacters(object){
    if(object.name){
      setCharacters(
        characters.filter(character=>character.name.includes(object.name))
      );
    }
    setCharacters(characters.filter(character => character.status==object.status_select));
  };

  if(!characters){
    return <h2>Loading character list...</h2>;
  }else{
    return (
      <section className="character-list">
        <SearchForm setFilter = {filterCharacters}/>
        {
          characters.map(character=>{
            return <CharacterCard character = {character} key = {character.id}/>
          })
        }
      </section>
    );
  }
}
