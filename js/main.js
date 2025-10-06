import { renderPictures } from './render.js';
import { initUploadPhotoModal } from './form.js';
import { getPhotos } from './api.js';
import { showErrorMessage } from './utils.js';

getPhotos()
  .then((photos) => {
    renderPictures(photos);
    //init filters
  })
  .catch(() => {
    showErrorMessage();
  });

initUploadPhotoModal();
