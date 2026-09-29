function pokemonAPI( name ){
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then(response => {
            if(response.ok){
                return response.json();
            }
            return Promise.reject(
                new Error(`Нет покемона с именем ${name}`)
            );
        })
        // .then(pokemon => this.setState({ pokemon, status: 'resolved' }))
        // .catch(error => this.setState({ error, status: 'rejected' }))
};

export { pokemonAPI };