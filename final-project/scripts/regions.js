//FETCH READING JSON FILES
const statesUrl = "https://brasilapi.com.br/api/ibge/uf/v1";
const flagsUrl = "https://apis.codante.io/bandeiras-dos-estados";
const cards = document.querySelector('#cards');

let dataStates = [];
let statesFlags = [];

async function apiFetchStatesInfo() {
    try {
        const response = await fetch(statesUrl);
        if (response.ok) {
            dataStates = await response.json();
            console.log(dataStates);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


async function apiFetchStatesFlags() {
    try {
        const response = await fetch(flagsUrl); 
        if (response.ok) {
            statesFlags = await response.json();
            console.log(statesFlags);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function getStatesData() {
    Promise.all([apiFetchStatesInfo(), apiFetchStatesFlags()]).then(() => {
        renderStates(dataStates);
    });
}



function renderStates(states){
    const html = states.map(
        (state) => `<div class="card team_info">
    <picture>
      <img src=${statesFlags.find(estado => estado.uf === state.sigla).flag_url} alt="Flag of ${state.nome}" loading="lazy" >
    </picture>
    <div>
      <h3 id="title">${state.nome}</h3>
      <p><span class="label">UF:</span> ${state.sigla}</p>
      <p><span class="label">Region:</span> ${state.regiao.nome}</p>
      <button onclick="addStateToFavorites('${state.sigla}');">Add to Favorites</button>
    </div>
    </div>`
    );
    cards.innerHTML = html.join("");
}

/* reset Function */
function reset() {
    while (cards.firstChild) {
        cards.removeChild(cards.firstChild);
    }
}

/* filterTeams Function */
function filterStates(states) {
    this.reset();

    let filter = document.querySelector("#region-filter").value;


    switch (filter) {
        case "midwest":
            renderStates(states.filter(state => (state.regiao.nome == "Centro-Oeste")));
            break;
        case "north":
            renderStates(states.filter(state => (state.regiao.nome == "Norte")));
            break;
        case "northeast":
            renderStates(states.filter(state => (state.regiao.nome == "Nordeste")));
            break;
        case "south":
            renderStates(states.filter(state => (state.regiao.nome == "Sul")));
            break;
        case "southeast":
            renderStates(states.filter(state => (state.regiao.nome == "Sudeste")));
            break;
        case "all":
            renderStates(states);
            break;

    }

}

function addStateToFavorites(sigla) {
    
    const state = dataStates.find(s => s.sigla === sigla);
    
    const newFavoriteState = {
        name: state.nome,
        sigla: state.sigla,
        region: state.regiao.nome,
        flag: statesFlags.find(estado => estado.uf === state.sigla).flag_url
    };
  
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let containsState = favorites.find(s => s.sigla === sigla);
    if (!containsState) {
        favorites.push(newFavoriteState);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayMessage(state.nome, "has been added to your favorites!");
    } else {
        displayMessage(state.nome, "is already in your favorites!");
    }       
}


const messageBox = document.querySelector('#dialogBox');

function displayMessage(state, message) {

    messageBox.innerHTML = '';
    messageBox.innerHTML = `
        <div>
        <p><strong>${state}</strong> ${message}</p>
        </div>
        <button id="closeBtn">Close</button>
    `;
    const closeModal = document.querySelector('#closeBtn');
    closeModal.addEventListener("click", () => messageBox.close());
    messageBox.showModal();
}


getStatesData();

/* Event Listener */
document.querySelector("#region-filter").addEventListener("change", () => { filterStates(dataStates) });