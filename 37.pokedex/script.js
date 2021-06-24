const poke_container = document.getElementById('poke-container')
const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/"

const pokemon_count = 152
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}


const main_types = Object.keys(colors)

async function fetchPokemons(){
    for(let i = 1; i<pokemon_count;i++){
        await getPokemon(i)
    }
}



async function getPokemon(id){
    const pokemon_url = `${pokemonAPI}${id}`
    const res = await fetch(pokemon_url)
    const data = await res.json()

    createPokemonCard(data)
    



}


const createPokemonCard = (pokemon)=>{


    const id = pokemon.id.toString().padStart(3, '0')
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find((type)=>poke_types.indexOf(type)>-1)
    const color = colors[type]
    const pokemonEl = document.createElement('div')

    pokemonEl.style.backgroundColor=color;
    pokemonEl.classList.add('pokemon')
    pokemonEl.innerHTML=
    `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info-container">
        <span class="pokemon-number">#${id}</span>
        <h3 class="pokemon-name">${name}</h3>
        <small class="type">Type:<span>${type}</span></small>
    </div>
    `

    poke_container.appendChild(pokemonEl)
}
fetchPokemons();