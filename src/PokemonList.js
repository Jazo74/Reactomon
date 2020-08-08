import React from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
import Styled from 'styled-components';

const InnerGrid = Styled.div`
    height: 220px;
    font-size: 24px;
    text-align: center;
    padding-top: 20px;
`;

class PokemonList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            pokemons: [],
            url: "https://pokeapi.co/api/v2/pokemon?limit=" + this.props.limit
        }
    }
     
    componentDidMount(){
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
            <InnerGrid>
                <div key={pokemon.url}>
                    <Link to={index}>
                        {pokemon.name}
                    </Link>
                </div>
            </InnerGrid>
        )
    }

    render(){
        //console.log(this.state.url)
        return (
            <>
                {
                this.state.pokemons.map(this.pokemonData)
                }
            </>
        );
    }   
}
export default PokemonList;