import { Filters, RANDOM_COUNT } from './const.js';
import { renderPictures } from './render.js';
import { debounce } from './utils.js';

const filters = document.querySelector('.img-filters');
const filtersForm = filters.querySelector('.img-filters__form');

let localPhotos;
const renderPicturesWithDebounce = debounce(renderPictures);

export const initFilters = (pictures) => {
  localPhotos = [...pictures];
  filters.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  filtersForm.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const filtersActions = {
  [Filters.DEFAULT]: () => localPhotos,
  [Filters.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length),
  [Filters.RANDOM]: () => [...localPhotos].sort(() => Math.random() - 0.5).slice(0, RANDOM_COUNT)
};

filtersForm.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');

  if (button) {
    setActiveButton(button);
    renderPicturesWithDebounce(filtersActions[target.id]());
  }
});
