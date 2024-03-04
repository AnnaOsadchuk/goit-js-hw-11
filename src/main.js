import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Error_png from './img/error-icon.png';

import createMarkup from './js/render-functions';
import searchPixa from './js/pixabay-api';

const gallery = document.querySelector('.gallery');
const input = document.querySelector('.input-search');
const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  const searchQuery = input.value;
  searchPixa(searchQuery)
    .then(response => {
      const images = response.hits.slice(0, 9);
      const markup = createMarkup(images);
      gallery.innerHTML = '';
      gallery.insertAdjacentHTML('beforeend', markup);
      new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(message => {
      iziToast.error();
      ({
        title: 'Error',
        titleColor: '#FFFFFF',
        titleSize: '16px',
        messageSize: '16px',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        message: `${message}`,
        position: 'topRight',
        timeout: 3000,
        iconUrl: Error_png,
      });
    });
}
