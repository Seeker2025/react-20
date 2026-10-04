export function PokemonDataView({ pokemon }){

    if (!pokemon || !pokemon.sprites) {
                                                    return null;
    }

    const { sprites, name, stats } = pokemon;

    return(
        <div>

            <img
            src={sprites.other['official-artwork'].front_default}
            alt="pic"
            width ="240"
            // height ="100"
            />
            <h2>{name}</h2>

            <ul>
                {stats.map(entry=>(
                    <li key={entry.stat.name}>
                        {entry.stat.name}: {entry.base_stat}
                    </li>
                ))}
            </ul>

        </div>
    )
}