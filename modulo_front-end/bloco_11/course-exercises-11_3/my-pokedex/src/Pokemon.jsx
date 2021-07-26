import React from 'react';

class Pokemon extends React.Component {

  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image , moreInfo } = pokemon;
    return (
      <section className='Pokecard'>
          <img src ={ image } alt ={ name } />
          <p> {name} </p>
          <p>Type: { type }</p>
          <p>Average Weight: { averageWeight.value } { averageWeight.measurementUnit}</p>
          <a href= { moreInfo }>More info</a>
      </section>
    );
  }
}

export default Pokemon;