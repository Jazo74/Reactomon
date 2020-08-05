import React from 'react';
import Axios from 'axios';
//import { withRouter } from 'react-router';

class PokemonDetail extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            pokemonData: {}
        }
    }
    componentDidMount(){
        const url = "https://pokeapi.co/api/v2/pokemon/" + this.props.match.params.id
        Axios.get(url)
            .then((response) => {
                console.log(response.data);
                this.setState({pokemonData: 
                    {
                    name: response.data.name,
                    image: response.data.sprites.front_default,
                    id: response.data.id,
                    type1: response.data.types[0].type.name,
                    }
                })
            })
            .catch((error) =>{
                console.log(error);
            })
    }
    
    render(){
        return (
            <>
                <h1>Detail</h1>
                <p>Name: {this.state.pokemonData.name}</p>
                <p>Id: {this.state.pokemonData.id}</p>
                <p>Type 1: {this.state.pokemonData.type1}</p>
                <img src={this.state.pokemonData.image} alt={this.state.pokemonData.name}></img>

            </>
        );
    }   
}
export default PokemonDetail;