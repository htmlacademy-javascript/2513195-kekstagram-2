import { isEscapeKey } from './utils.js';
import { initComments, resetComments } from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');

const onDocumentKeydownEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

export function openBigPicture({ url, likes, description, comments }) {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCountElement.textContent = likes;
  descriptionElement.textContent = description;

  resetComments();
  initComments(comments);

  document.addEventListener('keydown', onDocumentKeydownEscape);
}

function closeBigPicture() {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydownEscape);
}

closeButton.addEventListener('click', () => closeBigPicture());
