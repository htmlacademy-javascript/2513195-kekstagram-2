const NAMES = [
  'Гарри',
  'Гермиона',
  'Рон',
  'Невил',
  'Драко',
  'Полумна',
  'Миртл',
  'Джинни',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const PHOTOS_COUNT = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_COMMENTS_AMOUNT = 0;
const MAX_COMMENTS_AMOUNT = 30;

const MIN_PHOTO_ID = 1;
const MAX_PHOTO_ID = 25;

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getUniqueId = createRandomIdFromRangeGenerator(MIN_PHOTO_ID, MAX_PHOTO_ID);

const createIdGenerator = () => {
  let lastGeneratedId = 0;
  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const getCommentId = createIdGenerator();

const getComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomInteger(MIN_AVATAR_ID, MAX_AVATAR_ID)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});


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

const arrayPhotos = Array.from({ length: PHOTOS_COUNT }, generatePhotoData);


// const getPhotos = () => {
//   const photos = [];
//   for (let i = 1; i <= PHOTOS_COUNT; i++) {
//     photos.push(generatePhotoData(i))
//   }
//   return photos;
// };


