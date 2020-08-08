import React from 'react';
import Axios from 'axios';
import Styled from 'styled-components';

const InnerGrid = Styled.div`
    height: 250px;
    font-size: 24px;
    text-align: center;
    padding-top: 10px;
    background-color: grey;
    border-radius: 10px;
`;

class PokemonList2 extends React.Component{
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
            <>
                <InnerGrid>
                    <div className="innerGrid" key={pokemon.url}>
                    <p>{pokemon.name.toUpperCase()}</p>
                    <p>Type: {pokemon.type}</p>
                    <img src={pokemon.image} alt={pokemon.name}></img>
                    </div>
                </InnerGrid>
            </>
        )
    }

    render(){
        return (
            <>
                {
                this.state.pokemons.map(this.pokemonData)
                }
            </>
        );
    }   
}
export default PokemonList2;