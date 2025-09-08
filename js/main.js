// Нам нужен массив из 25 объектов, каждый объект — это фотография с полями:
// id — уникальный идентификатор от 1 до 25
// url — 'photos/{{i}}.jpg'
// description — строка (можно придумать)
// likes — случайное число от 15 до 200
// comments — массив объектов с полями:
// id — уникальный идентификатор
// avatar — 'img/avatar-{{1..6}}.svg'
// message — одно или два случайных предложения
// name — случайное имя
// {
//   id: ,           // уникальный идентификатор фотографии
//   url: '',        // адрес картинки вида photos/{{i}}.jpg
//   description: '',// описание фотографии
//   likes: ,        // количество лайков (число)
//   comments: [     // массив комментариев
//     {
//       id: ,       // уникальный идентификатор комментария
//       avatar: '', // адрес аватарки вида img/avatar-{{1..6}}.svg
//       message: '',// текст комментария
//       name: ''    // имя автора комментария
//     },
//     {
//       id: ,       // уникальный идентификатор комментария
//       avatar: '', // адрес аватарки вида img/avatar-{{1..6}}.svg
//       message: '',// текст комментария
//       name: ''    // имя автора комментария
//     },
//     // ...другие комментарии
//   ]
// }


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

const SIMILAR_PHOTO_COUNT = 25;

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
};

const getUniqueId = createRandomIdFromRangeGenerator(1, 25);


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
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES)
});


const generatePhotoData = () => {
  const i = getUniqueId();
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: `Моя фотография №${i}`,
    likes: getRandomInteger(15, 200),
    comments: Array.from({ length: getRandomInteger(0, 30) }, getComment)
  };
};

const similarPhotos = Array.from({ length: SIMILAR_PHOTO_COUNT }, generatePhotoData);


// const getPhotos = () => {
//   const photos = [];
//   for (let i = 1; i <= SIMILAR_PHOTO_COUNT; i++) {
//     photos.push(generatePhotoData(i))
//   }
//   return photos;
// };


