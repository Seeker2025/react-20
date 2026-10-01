import  errorImage from "./error.png";

export function PokemonError(){
    return (
        <div role="alert">

            <img src={errorImage} width="240" alt="sadcat"/>
            {/* <h3>{message}</h3> */}

        </div>
    )
}