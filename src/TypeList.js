import React from 'react';
import Axios from 'axios';

class TypeList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            types: []
        }
    }

    componentDidMount(){
        Axios.get("https://pokeapi.co/api/v2/type")
            .then((response) => {
                //console.log(response.data.results);
                this.setState({types: response.data.results})
            })
            .catch((error) =>{
                console.log(error);
            })
    }

    typeData(type) {
        return(
            <li key={type.url}>
                <a href={type.url}>{type.name}</a>
            </li>
        )
    }

    render(){
        return (
            <>
                <h1>Type List:</h1>
                <ul>
                {
                this.state.types.map(this.typeData)
                }
                </ul>
            </>
        );
    }   
}
export default TypeList;