const BASE_URL = 'https://api.thecatapi.com/v1';
// const API_KEY =
//   'live_cqc4WO0R0arjDsXazePzOjsOOy0evFB8pHbbpLI2fQRxLXEXEB0UVKfDjFamGZWp';

function fetchBreeds(breedId = undefined) {
  const URL = `${BASE_URL}/breeds/${breedId !== undefined ? breedId : ''}`;
  return fetch(URL)
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

function fetchCatByBreed(breedId) {
  return fetch(`${BASE_URL}/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response.json();
    })
    .catch(error => console.log(error));
}

export default { fetchBreeds, fetchCatByBreed };
