import React from 'react';

class UserCard extends React.Component {
  render() {
    const { person } = this.props;
      return (
      <div>
        <p>Name: { `${person.name.title} ${person.name.first} ${person.name.last}`}</p>
        <p>Phonenumber: { person.cell }</p>
        <p>Email: { person.email }</p>
        <p>Gender: { person.gender }</p>
        <img src={ person.picture.medium } alt = { person.name.fist }/>
      </div>
      )
  }
}

export default UserCard;