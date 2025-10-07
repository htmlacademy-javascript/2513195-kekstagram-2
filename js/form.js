import { isValid, resetValidation } from './validate-form.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { showPopup } from './popups.js';
import { Popups, SubmitButtonText } from './const.js';
import { sendData } from './api.js';
import { removeWindowControl, setWindowControl } from './window-behavior.js';

export const uploadForm = document.querySelector('.img-upload__form');
const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');
const submitButton = uploadForm.querySelector('.img-upload__submit');
const imagePreview = uploadForm.querySelector('.img-upload__preview img');
const effectsRadios = uploadForm.querySelectorAll('.effects__preview');

const onPhotoEditorResetBtnClick = (evt) => {
  evt.preventDefault();
  closePhotoEditor();
  removeWindowControl();
};

function closePhotoEditor() {
  photoEditorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);

  uploadForm.reset();
  resetValidation();
  resetScale();
  resetEffects();
}

const canCloseWindow = () => !(document.activeElement === hashtagInput || document.activeElement === commentInput);

const setPreview = () => {
  const file = uploadFileControl.files[0];
  const url = URL.createObjectURL(file);
  imagePreview.src = url;
  effectsRadios.forEach((radio) => {
    radio.style.backgroundImage = `url("${url}")`;
  });
};

export const initUploadPhotoModal = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    document.body.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
    setPreview();
    setWindowControl(closePhotoEditor, canCloseWindow);
  });
};

const blockButton = (isBlocked = true) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? SubmitButtonText.SUBMITTING : SubmitButtonText.IDLE;
};

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (isValid()) {
    blockButton();
    sendData(new FormData(uploadForm))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        closePhotoEditor();
        removeWindowControl();
        showPopup(Popups.SUCCESS);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
      .finally(() => {
        blockButton(false);
      });
  }
});
