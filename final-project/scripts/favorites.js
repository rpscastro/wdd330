//FETCH READING JSON FILES
const cards = document.querySelector('#cards');

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];


function renderFavorites(favorites) {
    if (favorites.length === 0) {
        cards.innerHTML = "<p>No favorite states added yet.</p>";
        return;
    }
    const html = favorites.map(
        (favorite) => `<div class="card team_info">
    <picture>
      <img src=${favorite.flag} alt="Flag of ${favorite.name}" loading="lazy" >
    </picture>
    <div>
      <h3 id="title">${favorite.name}</h3>
      <p><span class="label">UF:</span> ${favorite.sigla}</p>
      <p><span class="label">Region:</span> ${favorite.region}</p>
      <button onclick="removeStateFromFavorites('${favorite.sigla}');">Remove</button>
    </div>
    </div>`
    );
    cards.innerHTML = html.join("");
}

function removeStateFromFavorites(sigla) {
    favorites = favorites.filter(fav => fav.sigla !== sigla);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites(favorites);
}


renderFavorites(favorites);

