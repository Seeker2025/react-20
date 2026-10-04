// import { Component  } from 'react';
import { useState   } from 'react';
import { ImSearch   } from 'react-icons/im';
import { toast      } from 'react-toastify';

const styles = { form: { marginBottom: 20, marginTop: 15 }}

export function PokemonForm ({ onSubmit }){
    // state = {
    //     pokemon: '',
    // }

    const [pokemonName, setPokemonName] = useState('');

    const handleNameChange = event =>{
    setPokemonName(event.currentTarget.value.toLowerCase());
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(pokemonName.trim() === ''){
            alert(`Введить ім'я покемона!`)
            toast.error(`Введить ім'я покемона`);
            return;
        }

        // console.log(this.state.pokemon);

       onSubmit(pokemonName);
       setPokemonName('');
    };

        return(
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                type="text"
                name="pokemon"
                value={pokemonName}
                onChange={handleNameChange}
                />
                <button type="submit">

                    <ImSearch style={{ marginRight: 8}}/>
                Найти    

                </button>
            </form>
            );
    
};