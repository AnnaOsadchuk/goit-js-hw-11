import './css/styles.css';

const DEBOUNCE_DELAY = 300;

const URL = 'https://api.thecatapi.com/v1/breed';
const API_KEY =
  'live_cqc4WO0R0arjDsXazePzOjsOOy0evFB8pHbbpLI2fQRxLXEXEB0UVKfDjFamGZWp';
let arrayCats = [];

// fetchBreeds() {
//     return fetch(`${URL}?limit=1&api_key=${API_KEY}`).then(response => {
//         return response.json();
//     });
// };

fetch(URL, { headers: { 'x-api-kay': API_KEY } })
  .then(response => {
    return response.json();
  })
  .then(cat => {
    console.log(cat);
  })
  .catch(error => {
    console.log(error);
  });
