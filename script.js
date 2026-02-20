const searchInput = document.getElementById('searchInput');
const pokemonGrid = document.getElementById('pokemonGrid');
const loading = document.getElementById('loading');
const modal = document.getElementById('pokemonModal');
const closeModal = document.querySelector('.close');

const pokemonName = document.getElementById('pokemonName');
const pokemonId = document.getElementById('pokemonId');
const pokemonImage = document.getElementById('pokemonImage');
const pokemonTypes = document.getElementById('pokemonTypes');
const statsList = document.getElementById('statsList');
const pokemonHeight = document.getElementById('pokemonHeight');
const pokemonWeight = document.getElementById('pokemonWeight');
const abilitiesList = document.getElementById('abilitiesList');

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const TOTAL_POKEMON = 151; // First generation
let allPokemon = [];

// Fetch all Pokemon
async function fetchAllPokemon() {
    try {
        loading.style.display = 'block';
        const promises = [];
        
        // Fetch first 151 Pokemon (Generation 1)
        for (let i = 1; i <= TOTAL_POKEMON; i++) {
            promises.push(fetch(`${API_URL}${i}`).then(res => res.json()));
        }
        
        allPokemon = await Promise.all(promises);
        displayPokemonGrid(allPokemon);
        loading.style.display = 'none';
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        loading.textContent = 'Error loading Pokemon. Please refresh the page.';
    }
}

// Display Pokemon grid
function displayPokemonGrid(pokemonList) {
    pokemonGrid.innerHTML = '';
    
    pokemonList.forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'pokemon-card-small';
        card.onclick = () => showPokemonDetails(pokemon);
        
        const img = document.createElement('img');
        img.src = pokemon.sprites.front_default;
        img.alt = pokemon.name;
        
        const name = document.createElement('h3');
        name.textContent = pokemon.name;
        
        const id = document.createElement('div');
        id.className = 'pokemon-id';
        id.textContent = `#${String(pokemon.id).padStart(3, '0')}`;
        
        const types = document.createElement('div');
        types.className = 'pokemon-types';
        pokemon.types.forEach(typeInfo => {
            const typeBadge = document.createElement('span');
            typeBadge.className = `type-badge type-${typeInfo.type.name}`;
            typeBadge.textContent = typeInfo.type.name;
            types.appendChild(typeBadge);
        });
        
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(id);
        card.appendChild(types);
        pokemonGrid.appendChild(card);
    });
}

// Show Pokemon details in modal
function showPokemonDetails(data) {
    // Set basic info
    pokemonName.textContent = data.name;
    pokemonId.textContent = `#${String(data.id).padStart(3, '0')}`;
    pokemonImage.src = data.sprites.front_default;
    pokemonImage.alt = data.name;

    // Display types
    pokemonTypes.innerHTML = '';
    data.types.forEach(typeInfo => {
        const typeBadge = document.createElement('span');
        typeBadge.className = `type-badge type-${typeInfo.type.name}`;
        typeBadge.textContent = typeInfo.type.name;
        pokemonTypes.appendChild(typeBadge);
    });

    // Display stats
    statsList.innerHTML = '';
    data.stats.forEach(statInfo => {
        const statBar = document.createElement('div');
        statBar.className = 'stat-bar';
        
        const statName = document.createElement('div');
        statName.className = 'stat-name';
        const displayName = statInfo.stat.name === 'hp' ? 'HP' : statInfo.stat.name.replace('-', ' ');
        statName.innerHTML = `
            <span>${displayName}</span>
            <span>${statInfo.base_stat}</span>
        `;
        
        const statProgress = document.createElement('div');
        statProgress.className = 'stat-progress';
        
        const statFill = document.createElement('div');
        statFill.className = 'stat-fill';
        const percentage = Math.min((statInfo.base_stat / 255) * 100, 100);
        statFill.style.width = `${percentage}%`;
        
        statProgress.appendChild(statFill);
        statBar.appendChild(statName);
        statBar.appendChild(statProgress);
        statsList.appendChild(statBar);
    });

    // Display height and weight
    pokemonHeight.textContent = `${(data.height / 10).toFixed(1)} m`;
    pokemonWeight.textContent = `${(data.weight / 10).toFixed(1)} kg`;

    // Display abilities
    abilitiesList.innerHTML = '';
    data.abilities.forEach(abilityInfo => {
        const abilityBadge = document.createElement('span');
        abilityBadge.className = 'ability-badge';
        abilityBadge.textContent = abilityInfo.ability.name.replace('-', ' ');
        abilitiesList.appendChild(abilityBadge);
    });

    // Show modal
    modal.style.display = 'block';
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = allPokemon.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm) ||
        pokemon.id.toString().includes(searchTerm)
    );
    displayPokemonGrid(filtered);
});

// Close modal
closeModal.onclick = () => {
    modal.style.display = 'none';
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Load all Pokemon on page load
fetchAllPokemon();