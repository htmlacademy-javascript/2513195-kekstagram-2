import { openBigPicture } from './big-picture';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPictureElement = ({ url, description, likes, comments }) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const img = pictureElement.querySelector('.picture__img');
  img.src = url;
  img.alt = description;

  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  pictureElement.addEventListener('click', () => {
    openBigPicture({ url, description, likes, comments });
  });

  return pictureElement;
};

const clearOldPictures = () => {
  picturesContainer.querySelectorAll('.picture').forEach((item) => {
    item.remove();
  });
};

export const renderPictures = (pictures) => {
  clearOldPictures();
  const fragment = document.createDocumentFragment();

  pictures.forEach((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};
