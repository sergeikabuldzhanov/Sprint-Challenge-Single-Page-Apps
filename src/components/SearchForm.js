import React, { useState } from "react";

export default function SearchForm(props) {
  const [searchState, setSearchState] = useState({
    name: '',
    status_select: ''
  });

  function searchFormChange(event){
    setSearchState({
      ...searchState,
      [event.target.name]: event.target.value
    });
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
            name="name"
            placeholder="Start your search here"
            onChange = {searchFormChange}
            value = {searchState.name}
          />
        </label>
        <label>
          Status:
          <select
            name="status_select"
            onChange = {searchFormChange}
            value = {searchState.status_select}
          >
            <option>Alive</option>
            <option>Dead</option>
            <option>unknown</option>
          </select>
        </label>
        <input type = "submit"/>
      </form>
    </section>
  );
}
