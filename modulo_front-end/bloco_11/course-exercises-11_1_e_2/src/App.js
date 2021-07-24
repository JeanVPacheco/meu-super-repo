import React from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Homework', 'Lunch', 'Attend classes'];

class App extends React.Component {
  render()
  {
  return (
    <ul>
      {tasks.map((task) => Task(task))}
    </ul>
  );
  }
}

export default App;
