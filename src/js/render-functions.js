export default function createMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
        
        <a class="gallery-link" href="${largeImageURL}" >
          <img class="gallery-image" 
            src="${webformatURL}"
            alt="${tags}"
            width="360px"
            height="200px"
          />

          <ul class="gallery-item js-gallery">
            <label>
              Likes
              <li>${likes}</li>
            </label>
            <label>
                Views
                <li>${views}</li>
             </label>
            <label>
              Comments
              <li>${comments}</li>
              </label>
            <label>
              Downloads
              <li>${downloads}</li>
            </label>
          </ul>
         </a>       
      </li>`
    )
    .join('');
}
