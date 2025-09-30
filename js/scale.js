import { Scale } from './const.js';

const uploadForm = document.querySelector('.img-upload__form');
const minusButton = uploadForm.querySelector('.scale__control--smaller');
const plusButton = uploadForm.querySelector('.scale__control--bigger');
const input = uploadForm.querySelector('.scale__control--value');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');

let currentScale = Scale.DEFAULT;

const render = () => {
  input.value = `${currentScale}%`;
  imagePreview.style.transform = `scale(${currentScale}%)`;
};

minusButton.addEventListener('click', () => {
  currentScale = Math.max(currentScale - Scale.STEP, Scale.MIN);
  render();
});

plusButton.addEventListener('click', () => {
  currentScale = Math.min(currentScale + Scale.STEP, Scale.MAX);
  render();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};

resetScale();
