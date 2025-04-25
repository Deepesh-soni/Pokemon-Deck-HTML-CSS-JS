// Fetch and render top 10 Pokémon for slider
async function renderPokemonSlider() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    const data = await res.json();
  
    const slider = document.getElementById("pokemon-slider");
    slider.innerHTML = "";
  
    for (const p of data.results) {
      const pokeData = await fetch(p.url).then(res => res.json());
  
      const card = document.createElement("div");
      card.className = "pokemon-card";
      card.innerHTML = `
        <img src="${pokeData.sprites.front_default}" alt="${pokeData.name}" />
        <h3>${pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}</h3>
      `;
      card.addEventListener("click", () => openModal(pokeData));
      slider.appendChild(card);
    }
  }
  
  function openModal(pokemon) {
    // Display Pokémon details in the modal
    const modal = document.getElementById("pokemon-modal");
    const modalName = document.getElementById("modal-name");
    const modalImg = document.getElementById("modal-img");
    const modalTypes = document.getElementById("modal-types");
    const modalAbilities = document.getElementById("modal-abilities");
    const modalStats = document.getElementById("modal-stats");
  
    modalName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    modalImg.src = pokemon.sprites.front_default;
    modalTypes.innerHTML = `<strong>Types:</strong> ${pokemon.types.map(t => t.type.name).join(", ")}`;
    modalAbilities.innerHTML = `<strong>Abilities:</strong> ${pokemon.abilities.map(a => a.ability.name).join(", ")}`;
    modalStats.innerHTML = `<strong>Stats:</strong> HP: ${pokemon.stats[0].base_stat}, Attack: ${pokemon.stats[1].base_stat}, Defense: ${pokemon.stats[2].base_stat}, Speed: ${pokemon.stats[5].base_stat}`;
  
    modal.style.display = "flex";
  }
  
  document.getElementById("close-modal").addEventListener("click", () => {
    const modal = document.getElementById("pokemon-modal");
    modal.style.display = "none";
  });
  
  renderPokemonSlider();
  