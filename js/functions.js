/* eslint-disable no-console */

//5.16. Функции возвращаются

function isMeetingWithinWorkday(workStart, workEnd, meetingStart, duration) {
  // вспомогательная функция: преобразует строку "часы:минуты" в минуты от начала суток
  function toMinutes(timeStr) {
    const [h, m] = timeStr.split(':').map(Number);
    return h * 60 + m;
  }

  const workStartMin = toMinutes(workStart);
  const workEndMin = toMinutes(workEnd);
  const meetingStartMin = toMinutes(meetingStart);
  const meetingEndMin = meetingStartMin + duration;

  return meetingStartMin >= workStartMin && meetingEndMin <= workEndMin;
}

console.log(isMeetingWithinWorkday('08:00', '17:30', '14:00', 90));
console.log(isMeetingWithinWorkday('8:0', '10:0', '8:0', 120));
console.log(isMeetingWithinWorkday('08:00', '14:30', '14:00', 90));
console.log(isMeetingWithinWorkday('8:00', '17:30', '08:00', 900));

// Функция для проверки длины строки
// function checkStringLength (string, maxLength) {
//   return string.length <= maxLength;
// }

const checkStringLength = (string, maxLength) => string.length <= maxLength;

// eslint-disable-next-line no-console
console.log(checkStringLength('привет', 5)); // выдает ошибку, если равно

// Функция для проверки, является ли строка палиндромом
function checkIfPalindrome (string) {
  // eslint-disable-next-line prefer-const
  let upperCleanedString = string.replaceAll(' ', '').toUpperCase();
  let reversedString = '';
  for (let i = upperCleanedString.length - 1; i >= 0; i--) {
    reversedString += upperCleanedString[i];
  }
  return upperCleanedString === reversedString;
}

// eslint-disable-next-line no-console
console.log(checkIfPalindrome('Лёша на полке клопа нашёл '));

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN:
function extractDigits (string) {
  let digits = '';
  string = string.toString();

  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      digits += string[i];
    }
  }
  return parseInt(digits, 10);
}

// eslint-disable-next-line no-console
console.log(extractDigits('123 привет!'));

//вариант решения 2
function extractDigits1 (string) {
  let digits = '';
  string = string.toString();

  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt (string[i], 10))) {
      digits += string[i];
    }
  }
  return parseInt(digits, 10);
}

// eslint-disable-next-line no-console
console.log(extractDigits1('sfdsdfasdfsdf'));

