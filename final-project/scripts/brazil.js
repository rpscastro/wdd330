//WEATHER
//select HTML elements in the document
const brazilInfo = document.querySelector('.info');

const apiUrl =
    "https://restcountries.com/v3.1/name/brazil";

async function apiFetchBrazilInfo() {
    try {
        const response = await fetch(apiUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResultsBrazil(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetchBrazilInfo();

function displayResultsBrazil(data) {
    brazilInfo.innerHTML = `
                
                    <h3>Information</h3>
                    <p><span class="label">Official name: </span>${data[0].name.official}</p>
                    <p><span class="label">Native name (Portuguese): </span>${data[0].name.nativeName.por.official}</p>
                    <p><span class="label">Currency: </span>${data[0].currencies.BRL.symbol} - ${data[0].currencies.BRL.name}</p>
                    <p><span class="label">Capital: </span>${data[0].capital}</p>
                    <p><span class="label">Language: </span>${data[0].languages.por}</p>
                    <p><span class="label">Area: </span>${data[0].area.toLocaleString('en-US')} km<sup>2</sup></p>
                    <p><span class="label">Population: </span>${data[0].population.toLocaleString('en-US')} inhabitants</p>
                    <picture>
                        <source media="(min-width: 700px)" srcset="${data[0].flags.png}">
                        <img src="${data[0].flags.png}" loading="lazy"
                            alt="${data[0].flags.alt}">
                    </picture>
              
    `   
}
