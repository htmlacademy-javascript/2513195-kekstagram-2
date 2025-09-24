import { COMMENTS_STEP } from './const.js';

// Контейнеры для комментариев и счетчики
const commentsListElement = document.querySelector('.social__comments');
const shownCountElement = document.querySelector('.social__comment-shown-count');
const totalCountElement = document.querySelector('.social__comment-total-count');
const commentsLoader = document.querySelector('.comments-loader');

// Хранилище комментариев и счетчик показанных
let comments = [];
let shownCommentsCount = 0;

const createCommentElement = ({ avatar, name, message }) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = avatar;
  img.alt = name;
  img.width = 35;
  img.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = message;

  li.append(img, text);
  return li;
};

// Показываем следующие комментарии
const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const nextComments = comments.slice(shownCommentsCount, shownCommentsCount + COMMENTS_STEP);

  nextComments.forEach((comment) => {
    fragment.append(createCommentElement(comment));
  });

  commentsListElement.append(fragment);
  shownCommentsCount += nextComments.length;

  shownCountElement.textContent = shownCommentsCount;
  totalCountElement.textContent = comments.length;

  if (shownCommentsCount >= comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

// Показ комментариев при открытии big picture
export const initComments = (data) => {
  comments = data;
  shownCommentsCount = 0;
  commentsListElement.innerHTML = '';
  renderComments();
};

// Сброс комментариев при закрытии big picture
export const resetComments = () => {
  comments = [];
  shownCommentsCount = 0;
  commentsListElement.innerHTML = '';
  commentsLoader.classList.remove('hidden');
};

// Обработчик кнопки "Загрузить ещё"
commentsLoader.addEventListener('click', renderComments);
