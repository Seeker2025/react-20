export function PokemonArr(props){

    return (
        <ul>
                {
                props.arrOfPokemons.map(itm =>{
                    return <li key = {itm.name}>
                               {itm.name}
                           </li>
                })
                }
        </ul>
        )
}