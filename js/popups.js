import { Popups } from './const.js';
import { removeWindowControl, setWindowControl } from './window-behavior.js';
const body = document.body;

const getTemplate = (type) => document.querySelector(`#${type}`).content.querySelector(`.${type}`);

const templates = {
  [Popups.SUCCESS]: getTemplate(Popups.SUCCESS),
  [Popups.ERROR]: getTemplate(Popups.ERROR),
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);
  body.append(popup);
  setWindowControl(() => {
    popup.remove();
  });
  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
      removeWindowControl();
    }
  });
};
