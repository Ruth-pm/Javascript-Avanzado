document.querySelector("#search").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

async function getPokemon(e) {
e.preventDefault();
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => { console.log(data)
      document.querySelector(".pokemonBox").innerHTML = `
      <div>
        <img
          src="${data.sprites.other.dream_world.front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h2>${capitalizeFirstLetter(data.name)}</h2>
      </div>`;
    })
}