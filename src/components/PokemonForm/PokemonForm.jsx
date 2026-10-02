import { Component  } from 'react';
import { ImSearch   } from 'react-icons/im';
import { toast      } from 'react-toastify';

const styles = { form: { marginBottom: 20, marginTop: 15 }}

export class PokemonForm extends Component{
    state = {
        pokemon: '',
    }

    handleNameChange = event =>{
    this.setState({ pokemon: event.currentTarget.value.toLowerCase()});
    }

    handleSubmit = event => {
        event.preventDefault();

        if(this.state.pokemon.trim() === ''){
            alert('Введите имя покемона')
            toast.error('Введите имя покемона!');
            return;
        }

        console.log(this.state.pokemon);
        

        this.props.onSubmit(this.state.pokemon);
        this.setState({ pokemon: ''})
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit} style={styles.form}>
                <input
                type="text"
                name="pokemon"
                value={this.state.pokemon}
                onChange={this.handleNameChange}
                />
                <button type="submit">

                    <ImSearch style={{ marginRight: 8}}/>
                Найти    

                </button>
            </form>
        );
    }
};