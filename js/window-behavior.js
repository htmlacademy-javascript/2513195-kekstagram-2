import { isEscapeKey } from './utils.js';

const windows = [];
let listener = null;

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    const lastElementIndex = windows.length - 1;

    if(windows[lastElementIndex].condition && !windows[lastElementIndex].condition()){
      return;
    }

    windows[lastElementIndex].closeWindow();
    windows.length -= 1;

    if (!windows.length) {
      listener = null;
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  }
};

export const setWindowControl = (closeWindow, condition = null) => {
  windows.push({ closeWindow, condition });
  if (!listener) {
    listener = document.addEventListener('keydown', onDocumentKeydown);
  }
};

export const removeWindowControl = () => {
  windows.length -= 1;

  if (!windows.length) {
    listener = null;
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};
