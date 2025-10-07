//WEATHER
// select HTML elements in the document
// const weatherIcon = document.createElement('img');
// const figure = document.querySelector('figure');
// const currentTemp = document.querySelector('#current-temp');
// const captionDesc = document.createElement('figcaption');

// const weatherUrl =
//     "https://api.openweathermap.org/data/2.5/weather?lat=-23.56&lon=-46.63&appid=224306604573e3bc0b8418de93f6708d&units=metric";

// async function apiFetchWeather() {
//     try {
//         const response = await fetch(weatherUrl);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//             displayResultsWeather(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }
// apiFetchWeather();


// function displayResultsWeather(data) {
//     currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;C`;
//     const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
//     let desc = data.weather[0].description.toUpperCase();
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = `${desc}`;
//     figure.appendChild(weatherIcon);
//     figure.appendChild(captionDesc);
// }

//FORECAST
// select HTML elements in the document
// const forecastHtml = document.querySelector('#forecast');

// const forecastUrl =
//     "https://api.openweathermap.org/data/2.5/forecast?lat=-23.56&lon=-46.63&appid=224306604573e3bc0b8418de93f6708d&units=metric";

// async function apiFetchForecast() {
//     try {
//         const response = await fetch(forecastUrl);
//         if (response.ok) {
//             const data = await response.json();
//             console.log(data);
//             displayResultsForecast(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// apiFetchForecast();


// function displayResultsForecast(data) {

//     forecastHtml.innerHTML = `
//        <h3>Forecast</h3>
//             <p><span class="label">${displayWeekDay(data.list[8].dt_txt)}: </span>${data.list[8].main.temp}&deg;C.</p>  
//             <p><span class="label">${displayWeekDay(data.list[16].dt_txt)}: </span>${data.list[16].main.temp}&deg;C.</p>   
//             <p><span class="label">${displayWeekDay(data.list[24].dt_txt)}: </span>${data.list[24].main.temp}&deg;C.</p>
//       `
// }

// function displayWeekDay(date_txt) {
//     let date = new Date(date_txt);
//     const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     const dayIndex = date.getDay();
//     return daysOfWeek[dayIndex];
// }

/*** Slide Show***/

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}