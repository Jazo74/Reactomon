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
import Styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

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
          color = '#ffe5e5';
          break;
        case 'orange':
          color = '#fdf5e8';
          break;
        case 'yellow':
          color = '#fdffdf';
          break;
        case 'green':
          color = '#f1ffe6';
          break;
        case 'blue':
          color = '#eef3ff';
          break;
        case 'black':
          color = '#eaeaea';
          break;
        default:
          color = '#111';
          break;
      }
      return color;
    }};
}
.innerGrid div{
  background-color: ${props =>
    { 
      let color = '';
      switch(props.theme.mode) {
        case 'red':
          color = '#ffafaf';
          break;
        case 'orange':
          color = '#ffdba5';
          break;
        case 'yellow':
          color = '#fffc94';
          break;
        case 'green':
          color = '#b4ff95';
          break;
        case 'blue':
          color = '#86abff';
          break;
        case 'black':
          color = '#7f7e7e';
          break;
        default:
          color = '#111';
          break;
      }
      return color;
    }};
  }
`;

const OuterGrid = Styled.div `
  display: grid;
  grid-template-columns: 1FR 1FR 1FR 1FR 1FR 1FR;
  grid-template-rows: auto;
  grid-gap: 40px;
  padding: 40px;
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
            <OuterGrid>
            <PokemonList limit={this.state.limit}/>
            </OuterGrid>
          </Route>

          <Route exact path="/pokemons2">
            <OuterGrid>
            <PokemonList2 limit={this.state.limit}/>
            </OuterGrid>
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

