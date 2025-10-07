
// select the DOM elements for output
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
// use the date object
const today = new Date();


year.innerHTML = `&copy ${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;
