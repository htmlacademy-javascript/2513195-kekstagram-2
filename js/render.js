/*   <!-- Шаблон изображения случайного пользователя -->
<template id="picture">
<a href="#" class="picture">
  <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
  <p class="picture__info">
    <span class="picture__comments"></span>
    <span class="picture__likes"></span>
  </p>
</a>
</template>
<!-- Контейнер для изображений от других пользователей -->
    <section class="pictures  container">
      <h2 class="pictures__title  visually-hidden">Фотографии других пользователей</h2>
*/

// Контейнер для фотографий
const picturesContainer = document.querySelector('.pictures');
// Шаблон миниатюры
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Функция для создания миниатюры
const createPictureElement = ({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const img = pictureElement.querySelector('.picture__img');
  img.src = url;
  img.alt = description;

  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;

  return pictureElement;
};

// Функция для отрисовки всех фотографий
export const renderPictures = (pictures) => {
  const fragment = document.createDocumentFragment();

  pictures.forEach((photo) => {
    const pictureElement = createPictureElement(photo);
    fragment.appendChild(pictureElement);
  });

  picturesContainer.appendChild(fragment);
};
