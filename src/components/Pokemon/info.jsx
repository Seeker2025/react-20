import { useState, useEffect } from "react";
import { pokemonAPI } from "components/services/pokemon-api";

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

        pokemonAPI
        .fetchPokemon(pokemonName)
        .then(pokemon => {
            setPokemon(pokemon);
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

    if (status === 'rejected'){
        return <PokemonErrorView message = {error.message}/>
    }

    if (status === 'resolve'){
        return <PokemonDateView pokemon = {pokemon}/>
    }
} 