import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

import { renderPhoto } from './partalsJs/marcup.js';
import { getImages } from './partalsJs/getImages.js';
import { refreshPage } from './partalsJs/simpleBox.js';

const form = document.querySelector('.submitForm');
const input = document.querySelector('.submitInput');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.loadMore');
const MY_KEY = '41590527-3cc425bd48b0e10304cc9b3d1';
axios.defaults.baseURL = 'https://pixabay.com';

form.addEventListener('submit', onSearch);

closeLoader();

let currentPage = 1;
const numberOfImagesPerPage = 40;
let name = '';

async function onSearch(event) {
  event.preventDefault();

  gallery.innerHTML = '';
  name = input.value.trim();

  showLoader();

  errorChecking(name);

  try {
    const images = await getImages(
      name,
      MY_KEY,
      currentPage,
      numberOfImagesPerPage
    );

    if (images.hits.length === 0) {
      closeLoader();
      input.value = '';

      iziToast.error({
        title: 'Error',
        timeout: '2000',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
        position: 'topRight',
      });
      return;
    }

    gallery.insertAdjacentHTML('beforeend', renderPhoto(images.hits));
    refreshPage.refresh();
  } catch (error) {
    console.log(error);
  }
  loadMoreBtn.classList.remove('is-hidden');
}

loadMoreBtn.addEventListener('click', isLoadMore);

async function isLoadMore() {
  event.preventDefault();

  currentPage++;

  name = input.value.trim();

  try {
    const images = await getImages(
      name,
      MY_KEY,
      currentPage,
      numberOfImagesPerPage
    );

    const totalHits = images.totalHits;
    let countPage = totalHits / numberOfImagesPerPage;

    if (currentPage >= countPage) {
      loadMoreBtn.classList.add('is-hidden');
      closeLoader();
      currentPage = 1;
      input.value = '';
      iziToast.info({
        title: 'Info',
        timeout: '5000',
        message: "We're sorry, but you've reached the end of search results.",
        messageColor: '#FAFAFB',
        backgroundColor: '#00FF00',
        position: 'topRight',
      });
      return;
    }

    if (currentPage < countPage) {
      loadMoreBtn.classList.remove('is-hidden');
      showLoader();
      gallery.innerHTML += renderPhoto(images.hits);
      makeSmoothScrolling();
      closeLoader();
    }
  } catch (error) {
    console.log(error);
  }
}

function errorChecking(name) {
  if (name === '') {
    closeLoader();

    throw iziToast.error({
      title: 'Error',
      timeout: '1000',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
      position: 'topRight',
    });
  }
}

function showLoader() {
  loader.style.display = 'block';
}
function closeLoader() {
  loader.style.display = 'none';
}

function makeSmoothScrolling() {
  const galleryItemHeight = document
    .querySelector('.gallery li')
    .getBoundingClientRect().height;

  window.scrollBy({
    top: galleryItemHeight * 2,
    left: 0,
    behavior: 'smooth',
  });
}
