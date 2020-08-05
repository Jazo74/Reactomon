import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import PokemonList from './PokemonList';
import PokemonList2 from './PokemonList2';
import TypeList from './TypeList';
import PokemonDetail from './PokemonDetail';
import {ThemeProvider, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  color: ${props =>
    { 
      let color = '';
      switch(props.theme.mode) {
        case 'red':
          color = 'red';
          break;
        case 'orange':
          color = 'orange';
          break;
        case 'yellow':
          color = '#868607';
          break;
        case 'green':
          color = 'green';
          break;
        case 'blue':
          color = 'blue';
          break;
        case 'black':
          color = 'black';
          break;
        default:
          color = 'white';
          break;
      }
      return color;
    }};
    background-color: ${props =>
    { 
      let color = '';
      switch(props.theme.mode) {
        case 'red':
          color = '#ff9b9b';
          break;
        case 'orange':
          color = '#f8d8a0';
          break;
        case 'yellow':
          color = '#f7f8a0';
          break;
        case 'green':
          color = '#c3f8a0';
          break;
        case 'blue':
          color = '#a0a4f8';
          break;
        case 'black':
          color = '#a6a6a6';
          break;
        default:
          color = '#111';
          break;
      }
      return color;
    }};
}
`;


export class MyApp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      theme: 'black',
      limit: 30
    }
    this.themeChange = this.themeChange.bind(this);
    this.limitChange = this.limitChange.bind(this);
  }
  
  limitChange(e) {
    this.setState({limit: e.target.value});
    console.log(this.state.limit)
  }

  themeChange(e) {
    this.setState({theme: e.target.value});
  }

  render(){
    return (
      <Router>   
        <ThemeProvider theme={{ mode: this.state.theme}}>
        <>
        <GlobalStyle/>
        <nav>
          <ul>
            <li>
            <Link to="/pokemons">Pokemons</Link>
            </li>
            <li>
            <Link to="/pokemons2">Pokemons 2</Link>
            </li>
            <li>
            <Link to="/types">Types</Link>
            </li>
            <li>
              <input type="number" min="20" max="1000" onChange={(e)=> this.limitChange(e)}></input>
            </li>
            <li>
                <input list="themeList" name="theme" placeholder="black" onChange={(e)=> this.themeChange(e)}></input>
                <datalist id="themeList">
                  <option value="red"></option>
                  <option value="orange"></option>
                  <option value="yellow"></option>
                  <option value="green"></option>
                  <option value="blue"></option>
                  <option value="black"></option>
                </datalist>
            </li>
          </ul>
          <hr></hr>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Redirect exact from="/" to="/pokemons" />
          <Route exact path="/pokemons">
            <PokemonList limit={this.state.limit}/>
          </Route>

          <Route exact path="/pokemons2">
            <PokemonList2 limit={this.state.limit}/>
          </Route>

          <Route path="/types">
            <TypeList />
          </Route>
          
          <Route path="/pokemons/:id" component={PokemonDetail}/>
        </Switch>
      </>
      </ThemeProvider>
      </Router>
    );
  }
};

