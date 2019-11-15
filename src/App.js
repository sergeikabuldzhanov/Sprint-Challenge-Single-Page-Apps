import React from "react";
import Header from "./components/Header.js";
// import {useState, useEffect} from 'react';
// import axios from 'axios';
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';
import WelcomePage from './components/WelcomePage';
// import SearchForm from './components/SearchForm';
import {Route, Link, NavLink} from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  border-bottom: 2px solid black;
  ul{
    display: flex;
    justify-content: space-evenly;
    list-style-type: none;
    a{
      text-decoration: none;
    }
    .active{
      color: blue;
    }
  }
`;


export default function App() {


  return (
    <main>
      <Header />
      <Nav>
        <ul>
          <li><NavLink to = "/characters">Characters</NavLink></li>
          <li><NavLink to = "/locations">Locations</NavLink></li>
          <li><NavLink to = "/episodes">Episodes</NavLink></li>
        </ul>
      </Nav>
      <Route exact path = "/" component = {WelcomePage}/>
      <Route exact path = "/characters" component = {CharacterList}/>
      <Route exact path = "/locations" component = {LocationList}/>
    </main>
  );
}
