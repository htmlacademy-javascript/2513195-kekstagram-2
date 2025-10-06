import { Popups } from './const.js';
const body = document.body;

const getTemplate = (type) => document.querySelector(`#${type}`).content.querySelector(`.${type}`);

const templates = {
  [Popups.SUCCESS]: getTemplate(Popups.SUCCESS),
  [Popups.ERROR]: getTemplate(Popups.ERROR),
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);
  body.append(popup);

  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
    }
  });
};
