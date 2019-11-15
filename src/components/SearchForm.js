import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchState, setSearchState] = useState("");

  function searchFormChange(event){
    setSearchState(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    props.setFilter(searchState)
  }

  return (
    <section className="search-form">
      <form onSubmit = {handleSubmit}>
        <label>
          Search by Name:
          <input
            type="text"
            name="search_by_name"
            placeholder="Start your search here"
            onChange = {searchFormChange}
            value = {searchState}
          />
        </label>
        <input type = "submit"/>
      </form>
    </section>
  );
}
