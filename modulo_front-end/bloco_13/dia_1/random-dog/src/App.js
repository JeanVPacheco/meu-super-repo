import React from 'react';
import './App.css';
import Loading from './Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dog: '',
      loading: true,
    };
    this.fetchDog = this.fetchDog.bind(this);
  }

  componentDidMount() {
    this.fetchDog();
  }

  async fetchDog() {
    this.setState(
      { loading: true },
      async () => {
        const fetchAPI = await fetch('https://dog.ceo/api/breeds/image/random');
        const response = await fetchAPI.json();
        this.setState({
          loading: false,
          dog: response,
        });
      },
    );
  }

  render() {
    const { loading, dog } = this.state;
    return (
      <div className="dogArea">
        <h1>Random dog</h1>
        { loading ? <Loading /> : <img src={ dog.message } alt="Random dog" /> }
        <button onClick={ this.fetchDog }>Another dog</button>
      </div>
    );
  }
}

export default App;