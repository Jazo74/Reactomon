import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';


class PokemonList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pokemons: [],
            url: "https://pokeapi.co/api/v2/pokemon?limit=" + this.props.limit
        }
    }
    
    componentDidMount(){
        console.log(this.state.url)
        Axios.get(this.state.url)
            .then((response) => {
                this.setState({pokemons: response.data.results})
            })
            .catch((error) =>{
                console.log(error);
            })
    }
    
    pokemonData(pokemon) {
        let index = pokemon.url.substr(34)
        index = '/pokemons/' + index;
        
        return(
            <li key={pokemon.url}>
                <p></p>
                <Link to={index}>
                    {pokemon.name}
                </Link>
            </li>
        )
    }

    render(){
        return (
            <>
                <h1>PokemonList</h1>
                <ul>
                {
                this.state.pokemons.map(this.pokemonData)
                }
                </ul>
            </>
        );
    }   
}
export default PokemonList;