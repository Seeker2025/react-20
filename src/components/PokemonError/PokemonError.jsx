import  errorImage from "./error.png";

export function PokemonError({error}){
    return (
        <div role="alert">

            <img src={errorImage} width="240" alt="Error!"/>
            {console.log(error.message)}
            {console.log(error)}
            
            <h3>{error.message}</h3>

        </div>
    )
}