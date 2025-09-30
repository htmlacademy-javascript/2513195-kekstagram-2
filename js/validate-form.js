import { MAX_HASHTAGS, COMMENT_MAX_LENGTH, HASHTAGS_REGEXP, INVALID_DESCRIPTION, INVALID_HASHTAG_COUNT, INVALID_HASHTAG_SYMBOLS, INVALID_HASHTAG_UNIQUE } from './const.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const commentInput = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const validateComment = (value) => value.length <= COMMENT_MAX_LENGTH;

const arrayHashtags = (value) => value.trim().toLowerCase().split(' ').filter((hashtag) => hashtag);

const isUniqueHashtags = (value) => {
  const hashtags = arrayHashtags(value);
  return hashtags.length === new Set(hashtags).size;
};

const isCorrectHashtags = (value) => arrayHashtags(value).every((hashtag) => HASHTAGS_REGEXP.test(hashtag));
const isCorrectAmountHashtags = (value) => arrayHashtags(value).length <= MAX_HASHTAGS;

pristine.addValidator(hashtagInput, isUniqueHashtags, INVALID_HASHTAG_UNIQUE);
pristine.addValidator(hashtagInput, isCorrectHashtags, INVALID_HASHTAG_SYMBOLS);
pristine.addValidator(hashtagInput, isCorrectAmountHashtags, INVALID_HASHTAG_COUNT);
pristine.addValidator(commentInput, validateComment, INVALID_DESCRIPTION);

export const isValid = () => pristine.validate();

export const resetValidation = () => {
  pristine.reset();
};
