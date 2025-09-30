export const NAMES = [
  'Гарри',
  'Гермиона',
  'Рон',
  'Невил',
  'Драко',
  'Полумна',
  'Миртл',
  'Джинни',
];

export const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

export const PHOTOS_COUNT = 25;

export const MIN_LIKES = 15;
export const MAX_LIKES = 200;

export const MIN_COMMENTS_AMOUNT = 0;
export const MAX_COMMENTS_AMOUNT = 30;

export const MIN_PHOTO_ID = 1;
export const MAX_PHOTO_ID = 25;

export const MIN_AVATAR_ID = 1;
export const MAX_AVATAR_ID = 6;

export const MIN_MESSAGES_AMOUNT = 1;
export const MAX_MESSAGES_AMOUNT = 1;

export const COMMENTS_STEP = 5;

export const COMMENT_MAX_LENGTH = 140;
export const MAX_HASHTAGS = 5;
export const HASHTAGS_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

export const INVALID_DESCRIPTION = `Комментарий не должен превышать ${COMMENT_MAX_LENGTH} символов`;
export const INVALID_HASHTAG_UNIQUE = 'Нельзя повторять хэштеги';
export const INVALID_HASHTAG_SYMBOLS = 'Хештег начинается с # и состоит только из букв и цифр длиной не больше 20 символов';
export const INVALID_HASHTAG_COUNT = `Нельзя добавлять больше ${MAX_HASHTAGS} хэштегов`;

export const Scale = {
  DEFAULT: 100,
  MIN: 25,
  MAX: 100,
  STEP: 25
};

export const EFFECTS = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none',
};

export const Effects = {
  [EFFECTS.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: '',
    units: ''
  },
  [EFFECTS.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    units: ''
  },
  [EFFECTS.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    units: ''
  },
  [EFFECTS.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    units: '%'
  },
  [EFFECTS.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    units: 'px'
  },
  [EFFECTS.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    units: ''
  },
};

export const DEFAULT_EFFECT = EFFECTS.NONE;
