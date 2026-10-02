import { useState, useEffect    } from "react";
import { pokemonAPI             } from "components/services/pokemon-api";
import { PokemonDataView        } from "components/PokemonDataView";
import { PokemonPendingView     } from "components/PokemonPendingView/PokemonPendingView";
import { PokemonError           } from "components/PokemonError";
import { PokemonArr             } from "components/ALotOfPokemons";
// console.log(pokemonAPI);

                                                const Status = {
                                                    IDLE:     'idle',
                                                    PENDING:  'pending',
                                                    RESOLVED: 'resolved',
                                                    REJECTED: 'rejected',
                                                };


export function PokemonInfo ({ pokemonName }){
    const [ pokemon, setPokemon ] = useState(null)
    const [ error, setError ]     = useState(null)
    const [ arr, setArr ]         = useState([])
    const [ status, setStatus ]   = useState(Status.IDLE)  

    useEffect(() =>{

        //     console.log('Перший рендер');
        // if(!pokemonName){
        //     console.log('pokemonName це пустий рядок. fetch не робимо');
        //     return;
        // }
                

        pokemonAPI()
                                            .then(pokemon => {
                                                setArr(pokemon.results)
                                                // console.log(pokemon);
                                                // console.log(pokemon.results);
                                                setStatus(Status.RESOLVED);
                                            })
                                            .catch(error  => {
                                                setError(error);
                                                setStatus(Status.REJECTED);
                                            });

    }, [])
    
    useEffect(() =>{
         if(!pokemonName){
             console.log('pokemonName це пустий рядок. fetch не робимо');
            return;
         }
        setStatus( Status.PENDING );

        pokemonAPI(pokemonName)
                                            .then(pokemon => {
                                                setPokemon(pokemon);
                                                // console.log(pokemon);
                                                // console.log(pokemon.results);
                                                setStatus(Status.RESOLVED);
                                            })
                                            .catch(error  => {
                                                setError(error);
                                                setStatus(Status.REJECTED);
                                            });
                    
    }, [pokemonName])

    /* We log the `pokemon` state value to the console after it has been updated. */
    useEffect(() => {
        console.log("pokemon state:", pokemon)
                    }, [pokemon]);
    useEffect(() => {
        console.log("pokemon arr:", arr)
                    }, [arr]);                

return(
    <>
    <h2>List of Pokémon</h2>
    { <PokemonArr arrOfPokemons = {arr}/> }
    {
    status === 'idle' && <div>Введите имя покемона.</div>
    }

    {
    status === 'pending' && <PokemonPendingView pokemonName = {pokemonName}/>
    }

    {
    status === 'rejected' &&  <PokemonError error = {error}/>
    }

    { 
    status === 'resolved' && <PokemonDataView pokemon = {pokemon}/>
    }             
    </>
    )
}