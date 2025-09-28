import { isEscapeKey } from './utils.js';
import { MAX_HASHTAGS, COMMENT_MAX_LENGTH, HASHTAGS_REGEXP } from './const.js';

const uploadForm = document.querySelector('.img-upload__form');
const uploadFileControl = uploadForm.querySelector('#upload-file');
const photoEditorForm = uploadForm.querySelector('.img-upload__overlay');
const photoEditorResetBtn = photoEditorForm.querySelector('#upload-cancel');

const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const onPhotoEditorResetBtnClick = () => closePhotoEditor();

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if(document.activeElement === hashtagInput || document.activeElement === commentInput) {
      evt.stopPropagation();
    } else {
      uploadForm.reset();
      closePhotoEditor();
    }
  }
};

function closePhotoEditor () {
  photoEditorForm.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  photoEditorResetBtn.removeEventListener('click', onPhotoEditorResetBtnClick);
  uploadFileControl.value = '';
}

export const initUploadPhotoModal = () => {
  uploadFileControl.addEventListener('change', () => {
    photoEditorForm.classList.remove('hidden');
    document.body.classList.add('modal-open');
    photoEditorResetBtn.addEventListener('click', onPhotoEditorResetBtnClick);
    document.addEventListener('keydown', onDocumentKeydown);
  });
};

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const validateComment = (value) => value.length <= COMMENT_MAX_LENGTH;
pristine.addValidator(commentInput, validateComment, 'Комментарий не должен превышать 140 символов');

