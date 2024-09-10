// 1

for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// 2
const pokemons = [
    { id: 1, name: 'Bulbasaur' }, { id: 2, name: 'Ivysaur' }, { id: 3, name: 'Venusaur' },
    // (Se continua con el arreglo completo de Pokémons del archivo pastebin)
    { id: 150, name: 'Mewtwo' }, { id: 151, name: 'Mew' }
];

function mostrarPokemon() {
    const numero = parseInt(document.getElementById('numero').value);
    const pokemonList = document.getElementById('pokemonList');
    pokemonList.innerHTML = '';

    pokemons.forEach(pokemon => {
        if (pokemon.id % 5 === 0 && pokemon.id <= numero) {
            const li = document.createElement('li');
            li.textContent = pokemon.name;
            pokemonList.appendChild(li);
        }
    });
}

// 3
const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

arreglo.forEach(elemento => {
    if (typeof elemento === 'number') {
        console.log(elemento);
    }
});
