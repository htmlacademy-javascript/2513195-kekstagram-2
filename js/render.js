import { openBigPicture } from './big-picture';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Создание элемента одной миниатюры
const createPictureElement = ({ url, description, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const img = pictureElement.querySelector('.picture__img');
  img.src = url;
  img.alt = description;

  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  //Обработчик клика по миниатюре: открываем big picture
  pictureElement.addEventListener('click', () => {
    openBigPicture({ url, description, likes, comments });
  });

  return pictureElement;
};

// Рендер всех миниатюр
export const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};
