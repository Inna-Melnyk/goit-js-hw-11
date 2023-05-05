export default function createGalleryMarkup(arr) {
  const galleryContainer = document.querySelector('.gallery');

  const markup = arr
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
        `<div class="photo-card">
          <a href="${largeImageURL}">
          <img class = "gallery-img" src="${webformatURL}" alt="${tags}" loading="lazy" width = "200"/>
            <div class="info">
                <p class="info-item">
                <b>Likes ${likes}</b>
                </p>
                <p class="info-item">
                <b>Views ${views}</b>
                </p>
                <p class="info-item">
                <b>Comments ${comments}</b>
                </p>
                <p class="info-item">
                <b>Downloads ${downloads}</b>
                </p>
            </div>
          </a>
        </div>`
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);
}
