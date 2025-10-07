import { ERROR_TIME } from './const';

const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;

export const isEscapeKey = (evt) => evt.key === 'Escape';

export const showErrorMessage = () => {
  const errorMessage = dataErrorTemplate.cloneNode(true);
  body.append(errorMessage);
  setTimeout(() => {
    errorMessage.remove();
  }, ERROR_TIME);
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
