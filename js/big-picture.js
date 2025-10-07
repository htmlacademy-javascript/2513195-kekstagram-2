import { initComments, resetComments } from './comments.js';
import { removeWindowControl, setWindowControl } from './window-behavior.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');

export function openBigPicture({ url, likes, description, comments }) {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCountElement.textContent = likes;
  descriptionElement.textContent = description;

  resetComments();
  initComments(comments);
  setWindowControl(closeBigPicture);
}

function closeBigPicture() {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

closeButton.addEventListener('click', () => {
  closeBigPicture();
  removeWindowControl();
});
