// Функция для проверки длины строки
function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('привет', 5); // выдает ошибку, если равно

// Функция для проверки, является ли строка палиндромом
function checkIfPalindrome (string) {
  let upperCleanedString = string.replaceAll(' ', '').toUpperCase();
  let reversedString = '';
  for (let i = upperCleanedString.length - 1; i >= 0; i--) {
    reversedString += upperCleanedString[i];
  }
  return upperCleanedString === reversedString;
}

checkIfPalindrome('Лёша на полке клопа нашёл ');

//Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
//Если в строке нет ни одной цифры, функция должна вернуть NaN:
function (string) {

}
