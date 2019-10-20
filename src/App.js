import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MonList from './pokemon/monlist';
import Mon from './pokemon/mon'

export default class App extends React.Component {
  state = {
    results: []
  }
  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => res.json())
      .then(data => {
        this.setState({results: [...data.results]})
      })
  }

  render() {
  return (
    <div className="App">
      <header>
        <h1>PokeList</h1>
      </header>
      <Route
        exact path="/" 
        render={routerProps => {
          return ( 
            <MonList
              monsters={this.state.results}
              routerProps={routerProps} 
            />
          )
        }}
      />
      <Route 
        path="/:id" 
        render={({match, location, history}) => {
          return <Mon 
            match={match}
            location={location}
            history={history}
            monsters={this.state.results}
        />
      }}
      />
    </div>
  );
  }
}
