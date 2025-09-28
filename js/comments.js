import { COMMENTS_STEP } from './const.js';

const commentsListElement = document.querySelector('.social__comments');
const shownCountElement = document.querySelector('.social__comment-shown-count');
const totalCountElement = document.querySelector('.social__comment-total-count');
const commentsLoader = document.querySelector('.comments-loader');

// Берём первый комментарий как шаблон
const commentTemplate = commentsListElement.querySelector('.social__comment');

// Хранилище комментариев и счётчик показанных
let comments = [];
let shownCommentsCount = 0;

// Создание элемента комментария через шаблон
const createCommentElement = ({ avatar, name, message }) => {
  const commentElement = commentTemplate.cloneNode(true);

  const img = commentElement.querySelector('.social__picture');
  img.src = avatar;
  img.alt = name;

  const p = commentElement.querySelector('.social__text');
  p.textContent = message;

  return commentElement;
};

// Рендер следующей порции комментариев
const renderComments = () => {
  const fragment = document.createDocumentFragment();
  const nextComments = comments.slice(shownCommentsCount, shownCommentsCount + COMMENTS_STEP);

  nextComments.forEach((comment) => {
    fragment.appendChild(createCommentElement(comment));
  });

  commentsListElement.appendChild(fragment);
  shownCommentsCount += nextComments.length;

  shownCountElement.textContent = shownCommentsCount;
  totalCountElement.textContent = comments.length;

  commentsLoader.classList.toggle('hidden', shownCommentsCount >= comments.length);
};

// Инициализация комментариев при открытии big picture
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

// Кнопка "Загрузить ещё"
commentsLoader.addEventListener('click', renderComments);
