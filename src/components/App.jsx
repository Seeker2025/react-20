import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Finder } from './Finder';
// import { SignupForm } from './Form';
// import { SignupForm02 } from './Form02';
////// Pokemons
import { PokemonInfo } from 'components/Pokemon';
import { PokemonForm } from 'components/PokemonForm';


export class App extends Component{

    state = {
          pokemonName: '',
    };

    handleFormSubmit = (value) =>{
      this.setState({pokemonName: value})
    }

  render(){
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      React homework template

        <Finder/>

        {/* <SignupForm  />
        <SignupForm02/> */}


  <h2>Enter a pokemon name</h2>
        {/* <h3>bulbasaur</h3>
        <h3>ivysaur</h3>
        <h3>charmander</h3>
        <h3>charizard</h3>
        <h3>squirtle</h3>
        <h3>ditto</h3> */}
        <PokemonForm onSubmit    =  {this.handleFormSubmit}/>
        <PokemonInfo pokemonName =  {this.state.pokemonName}/>

        <ToastContainer />

    </div>
    )
  }
}
