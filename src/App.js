import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = [
      { name: "Frankenstein", id: 1 },
      { name: "Dracula", id: 2 },
      { name: "Zombie", id: 3 },
    ];
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {console.log('Response: ', res); return res.json()})
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className='App'>
        {this.state.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
