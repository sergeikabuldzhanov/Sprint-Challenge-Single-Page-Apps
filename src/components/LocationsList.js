import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard';
import SearchForm from './SearchForm'
import axios from 'axios';

export default function LocationsList() {
  const [locations, setLocations] = useState();
  const [info, setInfo] = useState();
  function fetchLocationsList() {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(response => {
        console.log(response);
        setLocations(response.data.results);
        setInfo(response.data.info);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(()=>{
    fetchLocationsList();
  }, [])

  console.log(locations);
  
  function filterLocations(string){
    setLocations(
      locations.filter(location=>location.name.includes(string))
    );
  };

  if(!locations){
    return <h2>Loading locations list...</h2>;
  }else{
    return (
      <section className="locations-list">
        <SearchForm setFilter = {filterLocations}/>
        {
          locations.map(location=>{
            return <LocationCard location = {location} key = {location.id}/>
          })
        }
      </section>
    );
  }
}
