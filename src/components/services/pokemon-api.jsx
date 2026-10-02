function pokemonAPI( name ){
   
    const url = name
            ?
          `https://pokeapi.co/api/v2/pokemon/${name}`
            :
          `https://pokeapi.co/api/v2/pokemon/`

    return fetch(url)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            return Promise.reject(
                new Error(`Нет покемона с именем ${name}`)
            );
        })
    }


export { pokemonAPI };