import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className='Pokedex'>
      <Pokedex pokemons={ pokemons }/>
    </div>);
  }
}

export default App;
