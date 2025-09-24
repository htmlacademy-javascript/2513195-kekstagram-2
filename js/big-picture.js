import { isEscapeKey } from './utils.js';
import { initComments, resetComments } from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const likesCountElement = bigPictureElement.querySelector('.likes-count');
const descriptionElement = bigPictureElement.querySelector('.social__caption');
const closeButton = bigPictureElement.querySelector('.big-picture__cancel');

// Обработчик нажатия клавиши Escape на документе
const onDocumentKeydownEscape = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

// Функция открытия модального окна с большой фотографией
export function openBigPicture({ url, likes, description, comments }) {
  bigPictureElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  bigPictureImg.src = url;
  bigPictureImg.alt = description;
  likesCountElement.textContent = likes;
  descriptionElement.textContent = description;

  resetComments(); // Сброс комментариев перед показом новых
  initComments(comments); // показываем комментариев

  // Добавляем обработчик нажатия Escape на документ
  document.addEventListener('keydown', onDocumentKeydownEscape);
}

// Функция закрытия модального окна
function closeBigPicture() {
  bigPictureElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydownEscape);
}

// Добавляем обработчик клика по кнопке закрытия
closeButton.addEventListener('click', () => closeBigPicture());
