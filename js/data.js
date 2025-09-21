import { MESSAGES, NAMES, MAX_AVATAR_ID, MAX_COMMENTS_AMOUNT, MAX_LIKES, MAX_MESSAGES_AMOUNT, MAX_PHOTO_ID, MIN_AVATAR_ID, MIN_COMMENTS_AMOUNT, MIN_LIKES, MIN_MESSAGES_AMOUNT, MIN_PHOTO_ID, PHOTOS_COUNT } from './const';
import { createIdGenerator, createRandomIdFromRangeGenerator, getRandomArrayElement, getRandomInteger } from './utils';

const getUniqueId = createRandomIdFromRangeGenerator(MIN_PHOTO_ID, MAX_PHOTO_ID);

const getCommentId = createIdGenerator();

const getRandomMessage = () => getRandomArrayElement(MESSAGES);

const getComment = () => {
  const sentences = Array.from({ length: getRandomInteger(MIN_MESSAGES_AMOUNT, MAX_MESSAGES_AMOUNT) },getRandomMessage);
  return {
    id: getCommentId(),
    avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
    message: sentences.join(' '),
    name: getRandomArrayElement(NAMES)
  };
};


const generatePhotoData = () => {
  const photoID = getUniqueId();
  return {
    id: photoID,
    url: `photos/${photoID}.jpg`,
    description: `Моя фотография №${photoID}`,
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(MIN_COMMENTS_AMOUNT, MAX_COMMENTS_AMOUNT) }, getComment)
  };
};

export const arrayPhotos = Array.from({ length: PHOTOS_COUNT }, generatePhotoData);
