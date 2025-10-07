import { renderPictures } from './render.js';
import { initUploadPhotoModal } from './form.js';
import { getPhotos } from './api.js';
import { showErrorMessage } from './utils.js';
import { initFilters } from './filters.js';

getPhotos()
  .then((photos) => {
    renderPictures(photos);
    initFilters(photos);
  })
  .catch(() => {
    showErrorMessage();
  });

initUploadPhotoModal();
