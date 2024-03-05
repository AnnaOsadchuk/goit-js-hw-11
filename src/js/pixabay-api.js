export default function searchPixa(searchQuery) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '36683727-e929c153efd1b0d2cc7c4f38c';
  const QUERY = `${searchQuery}`;
  const IMAGE_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SEFESEARCH = 'true';
  const Link = `${BASE_URL}?key=${API_KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientastion=${ORIENTATION}&seferearch=${SEFESEARCH}`;
  const gallery = document.querySelector('.gallery');

  const message =
    'Sorry, there are no images matching your search query. Please try again!';

  return fetch(Link)
    .then(resp => {
      if (!resp.ok) {
        throw new Error(message);
      }
      return resp.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        gallery.innerHTML = '';
        throw new Error(message);
      }

      return data.hits.slice(0, 9);
    });
}
