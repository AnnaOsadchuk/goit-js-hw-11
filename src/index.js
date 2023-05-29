import './css/styles.css';
import CatApi from './cat-api';
// import  catCardContainer from'./cat-cards.hbs';
const breedSelectEl = document.querySelector('.breed-select');
const cardContainer = document.querySelector('.cat-info');
breedSelectEl.addEventListener('change', onSelect);

CatApi.fetchBreeds().then(breeds => {
  breeds.map(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.text = breed.name;
    breedSelectEl.add(option);
  });
});

function onSelect(event) {
  const breedId = event.target.value;
  CatApi.fetchCatByBreed(breedId).then(image => {
    // Get image URL
    const imageUrl = image[0].url;
    // Fetch other breed information
    CatApi.fetchBreeds(breedId).then(breed => {
      const breedInfo = {
        name: breed.name,
        description: breed.description,
        temperament: breed.temperament,
      };
      cardContainer.innerHTML = createMarkup(imageUrl, breedInfo);
    });
  });
}

function createMarkup(imageUrl, breedInfo) {
  return `<img
        src="${imageUrl}"
        alt="${breedInfo.name}"
        width="400"
      />
      <div class="infromation">
        <h2>${breedInfo.name}</h2>
        <p class="text">${breedInfo.description}</p>
        <p class="text"><b>Temperament:</b> ${breedInfo.temperament}</p>
      </div>`;
}

// const DEBOUNCE_DELAY = 300;
// const refs = {
//   cardContainer: document.querySelector('.cat-info');
// }

// function fetchBreeds(query) {
// fetch(URL, { headers: { 'x-api-kay': API_KEY } })
//   .then(response => {
//     return response.json();
//   })

// .then(cat => {
//   console.log(cat);
//   const markup = catCardContainer(cat);
//   console.log(markup);
//   refs.cardContainer.innerHTML =
//
// })
// .catch(error => {
//   console.log(error);
// });
// }
// fetchBreeds();
