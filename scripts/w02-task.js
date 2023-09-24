/* W02-Task - Profile Home Page */




/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Omonu Johnson";
let currentYear = "Freshmen";
let profilePicture = "images/johnson1.png";
let foodFavourite = ['rice', ' garri', ' eba', ' amala', ' Nigerian jollof'];


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = Object.assign(new Image(), { alt: 'omonu johnson Image' });
imageElement.src = 'images/johnson1.png'
document.getElementById('imagecontainer').appendChild(imageElement);




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
// imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */


foodElement.textContent = `${foodFavourite}`;
const newFavouriteFood = 'beans';
foodFavourite.push(newFavouriteFood);
foodElement.innerHTML += `<br>${foodFavourite}`;
foodFavourite.shift();
foodElement.innerHTML += `<br>${foodFavourite}`;
foodFavourite.pop();
foodElement.innerHTML += `<br>${foodFavourite}`;







