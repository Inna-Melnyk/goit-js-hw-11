import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import Notiflix from 'notiflix';
import PicturesApiServices from './img-sevises';
import createGalleryMarkup from './create-gallery-markup';

const searchForm = document.getElementById('search-form');
const galleryContainer = document.querySelector('.gallery');

const picturesApiServices = new PicturesApiServices();

searchForm.addEventListener('submit', onSearch);
window.addEventListener('scroll', onScroll);

function onSearch(evt) {
  evt.preventDefault();

  window.scrollTo(0, 0);

  picturesApiServices.name = evt.currentTarget.elements.searchQuery.value;
  picturesApiServices.resetPage();

  picturesApiServices
    .fetchPictures()
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
      }

      galleryContainer.innerHTML = '';
      createGalleryMarkup(hits);
    })
    .catch(message => {
      Notiflix.Notify.failure(`Sorry, there is an error: ${message}`);
    });

  evt.currentTarget.elements.searchQuery.value = '';
}

function onScroll(evt) {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    picturesApiServices
      .fetchPictures()
      .then(({ hits }) => {
        if (hits.length === 0) {
          Notiflix.Notify.info('No more pictures');
        }
        createGalleryMarkup(hits);
      })
      .catch(message => {
        Notiflix.Notify.info(`No more pages with pictures`);
      });
  }
}
