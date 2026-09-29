import { useState, useEffect } from "react";
import { pokemonAPI } from "components/services/pokemon-api";
import { PokemonDataView } from "components/PokemonDataView";
import { PokemonPendingView } from "components/PokemonPendingView/PokemonPendingView";
console.log(pokemonAPI);



const Status = {
    IDLE:     'idle',
    PENDING:  'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',
};

export function PokemonInfo ({ pokemonName }){
    const [ pokemon, setPokemon ] = useState(null)
    const [ error, setError ]     = useState(null)
    const [ status, setStatus ]   = useState(Status.IDLE)  
    
    useEffect(() =>{
        setStatus( Status.PENDING );

        
       pokemonAPI(pokemonName)
        .then(pokemon => {
            setPokemon(pokemon);
            console.log(pokemon);
            
            setStatus(Status.RESOLVED);
        })
        .catch(error  => {
            setError(error);
            setStatus(Status.REJECTED);
        });
    }, [pokemonName])

    if (status === 'idle'){
        return <div>Введите имя покемона.</div>
    }

    if (status === 'pending'){
        return <PokemonPendingView pokemonName = {pokemonName}/>
    }

    // if (status === 'rejected'){
    //     return <PokemonErrorView message = {error.message}/>
    // }

        if (status === 'resolved'){
            return <PokemonDataView pokemon = {pokemon}/>
        }
} 