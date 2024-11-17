// 1. Seleccionar el contenedor donde se colocarán todas las tarjetas
const pokemonsContainer = document.querySelector(".pokemons");

// 2. URL base de la API de Pokémon
const apiUrl = "https://pokeapi.co/api/v2/pokemon/";

// 3. Número de Pokémon que queremos cargar
const totalPokemon = 20;

// 4. Función para obtener los datos de un Pokémon
function fetchPokemonData(id) {
  return fetch(`${apiUrl}${id}`).then((response) => {
    if (!response.ok) {
      throw new Error(`Error al obtener datos del Pokémon con ID ${id}`);
    }
    return response.json();
  });
}

// 5. Función para obtener los datos de la evolución del Pokémon
function fetchEvolutionData(speciesUrl, pokemonName) {
  return fetch(speciesUrl)
    .then((response) => response.json())
    .then((speciesData) => {
      const evolutionUrl = speciesData.evolution_chain.url;
      return fetch(evolutionUrl)
        .then((response) => response.json())
        .then((evolutionData) => {
          // Buscar el Pokémon actual en la cadena evolutiva
          let currentChain = evolutionData.chain;
          let preEvolution = null;

          while (currentChain) {
            // Verificar si el nombre actual coincide con el Pokémon
            if (currentChain.species.name === pokemonName) {
              return preEvolution ? preEvolution : null;
            }
            // Avanzar en la cadena
            preEvolution = currentChain.species.name;
            currentChain = currentChain.evolves_to[0];
          }
          return null; // Si no se encuentra, no tiene pre-evolución
        });
    });
}

// 6. Función para crear dinámicamente tarjetas de Pokémon
function createPokemonCard(data) {
  return fetchEvolutionData(data.species.url, data.name).then(
    (preEvolution) => {
      // Verificar si hay evolución
      const evolutionHTML = preEvolution
        ? `
          <p class="pokevoluciona">
            <span class="pokevoluciona__indice">Evoluciona de:</span>
            <span class="pokevoluciona__pokename">${preEvolution}</span>
          </p>`
        : "";

      // HTML de la tarjeta
      return `
        <div class="pokecard" title="Pokemon ${data.name}">
          <div class="pokecard__top">
            <div class="pokecard__imagen">
              <img src="${data.sprites.front_default}" alt="Pokemon ${
        data.name
      }" />
              <div class="pokename__id">ID / ${data.id}</div>
            </div>
          </div>
          <div class="pokecard__botton">
            <h2 class="pokename">${
              data.name.charAt(0).toUpperCase() + data.name.slice(1)
            }</h2>
            <ul class="pokecard__list">
              ${data.types
                .map((type) => `<li>${type.type.name.toUpperCase()}</li>`)
                .join("")}
            </ul>
            ${evolutionHTML}
          </div>
        </div>
      `;
    }
  );
}

// 7. Función para cargar y mostrar todos los Pokémon
function loadAllPokemon() {
  const promises = [];

  for (let id = 1; id <= totalPokemon; id++) {
    promises.push(fetchPokemonData(id).then((data) => createPokemonCard(data)));
  }

  // Resolver todas las promesas y agregar al contenedor
  Promise.all(promises)
    .then((cards) => {
      const allCardsHTML = cards.join(""); // Unir todas las tarjetas
      pokemonsContainer.innerHTML = allCardsHTML; // Agregar de una sola vez
    })
    .catch((error) => {
      console.error("Error al cargar los Pokémon:", error);
    });
}

// 8. Llamar a la función para cargar los Pokémon
loadAllPokemon();
