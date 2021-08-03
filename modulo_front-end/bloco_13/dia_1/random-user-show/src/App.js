import React from 'react';
import './App.css';
import UserCard from './UserCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      person: [],
    };
    this.feedsState = this.feedsState.bind(this);
  }

  async componentDidMount() {
    const apiProfile = await fetch('https://api.randomuser.me/');
    const person = await apiProfile.json();
    const status = false;
    this.feedsState(person.results[0], status);
  }

  feedsState(person, loading) {
    this.setState({
      person,
      loading,
    });
  }

  render() {
    const { person, loading } = this.state;
    return (
      <div>
        { loading ? <div>Carregando...</div> : <UserCard person ={ person } /> }
      </div>
    );
  }
}

export default App;