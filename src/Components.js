import React from 'react';

export class Home extends React.Component{
    render(){
        return <h1>Home</h1>;
    }   
}

export class PokemonList extends React.Component{
    constructor(){
        super();
        this.state = {
            firstState: "elso state",
            //secondState: this.props.name
        }
    }
    
    update(){
        this.setState({firstState : this.refs.inputA.value})
    }
    render(){
        return (
        <>
            <h1>Pokemons {this.props.name} - {this.state.firstState}</h1>

            <input type="text" ref="inputA"></input>
            
            <button onClick={this.update.bind(this)}>Ok</button>
            <p>{this.state.firstState}</p>
        </>
        )
    }   
}



export class TypeList extends React.Component{
    render(){
        return <h1>Types</h1>;
    }   
}

export class PokemonDetail extends React.Component{
    render(){
        return <h1>Types</h1>;
    }   
}