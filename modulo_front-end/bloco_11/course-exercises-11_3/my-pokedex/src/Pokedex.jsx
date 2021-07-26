import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  render() {
    const { pokemons } = this.props;
    const pokeCard = pokemons.map((pokemon) => <Pokemon key= { pokemons.id } pokemon= { pokemon } />);
    return (
      <section>
      {pokeCard}
      </section>
    );
  }

}

export default Pokedex;
