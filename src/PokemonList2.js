import React from 'react';
import Axios from 'axios';

class PokemonList2 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pokemons: []
        }
    }

    componentDidMount(){
        Axios.get("https://pokeapi.co/api/v2/pokemon?limit=30")
            .then((response) => {
                Axios.all(response.data.results.map(item => {
                    return Axios.get(item.url)
                }))
                .then((responses) => {
                    this.setState({pokemons: responses.map((response) => 
                        {
                        return {
                        name: response.data.name,
                        type: response.data.types[0].type.name,
                        image: response.data.sprites.front_default
                        }
                        })
                    })
                })
                .catch((error) => {
                console.log(error);
                })
            })
            .catch((error) =>{
                console.log(error);
            })
    }
    
    pokemonData(pokemon) {
        return(
            <li key={pokemon.name}>
                <p>Name: {pokemon.name}</p>
                <p>Type: {pokemon.type}</p>
                <img src={pokemon.image} alt={pokemon.name}></img>
                <hr></hr>
            </li>
        )
    }

    render(){
        return (
            <>
                <h1>PokemonList 2</h1>
                <ul>
                {
                this.state.pokemons.map(this.pokemonData)
                }
                </ul>
            </>
        );
    }   
}
export default PokemonList2;