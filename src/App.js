import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home, PokemonList, TypeList} from './Components';


export class MyApp extends React.Component{
  render(){
    return (
      <Router>   
        <div>
        <h1>Reactomon wepapp</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemons">Pokemons</Link>
            </li>
            <li>
              <Link to="/types">Types</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Pokemons">
            <PokemonList name="trialprop"/>
          </Route>
          <Route path="/Types">
            <TypeList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Router>
      
    );
  }
};

