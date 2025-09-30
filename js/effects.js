import { DEFAULT_EFFECT, Effects } from './const.js';

const uploadForm = document.querySelector('.img-upload__form');
const effectsList = uploadForm.querySelector('.effects__list');
const sliderElement = uploadForm.querySelector('.effect-level__slider');
const effectValue = uploadForm.querySelector('.effect-level__value');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');
const sliderContainer = uploadForm.querySelector('.effect-level');

let currentEffect = DEFAULT_EFFECT;

const isDefault = () => currentEffect === DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  ...Effects[currentEffect].slider,
  connect: 'lower',
  format: {
    to: function (value) {
      return parseFloat(value);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const showSlider = () => {
  if (isDefault()) {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
  }
};

const render = () => {
  if (isDefault()) {
    imagePreview.style.filter = '';
  } else {
    const { style, units } = Effects[currentEffect];
    imagePreview.style.filter = `${style}(${effectValue.value}${units})`;
  }
};

const updateSlider = () => {
  const { slider } = Effects[currentEffect];
  sliderElement.noUiSlider.updateOptions(slider);
};

effectsList.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  showSlider();
  updateSlider();
});

sliderElement.noUiSlider.on('update', () => {
  effectValue.value = sliderElement.noUiSlider.get();
  render();
});

export const resetEffects = () => {
  currentEffect = DEFAULT_EFFECT;
  showSlider();
  render();
};

resetEffects();
