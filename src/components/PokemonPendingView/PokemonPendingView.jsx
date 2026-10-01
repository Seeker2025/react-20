import { ImSpinner } from 'react-icons/im';
import { PokemonDataView } from 'components/PokemonDataView';
import  pendingImage from './pending.png';

const styles ={

    }

export function PokemonPendingView({ pokemonName }){

    const pokemon ={
        name: pokemonName,
        sprites: {
            other: {
                'official-artwork': {
                    front_default: pendingImage,
                },
            },
        },

        stats: [],
    }
    
    return (
        <div role="alert">
            <div style={styles.spinner}>
            <ImSpinner size="23" className="icon-spin"/>
            Загружаем...
            <PokemonDataView pokemon = { pokemon }/>
            </div>
        </div>
    );
}