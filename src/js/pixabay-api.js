export default function searchPixa(searchQuery) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '36683727-e929c153efd1b0d2cc7c4f38c';
  const QUERY = `${searchQuery}`;
  const IMAGE_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SEFESEARCH = 'true';
  const Link = `${BASE_URL}?key=${API_KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientastion=${ORIENTATION}&seferearch=${SEFESEARCH}`;

  return fetch(Link).then(resp => {
    const message =
      'Sorry, there are no images matching your search query. Please try again!';

    if (!resp.ok) {
      throw new Error(message);
    }
    return resp.json();
  });
}
