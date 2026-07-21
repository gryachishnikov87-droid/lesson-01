/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // 1. Проверяем, что после удаления пробелов строка не пустая
  // 2. Проверяем, что преобразованное значение является конечным числом (не NaN, не Infinity)
  return str.trim() !== "" && isFinite(Number(str));
}

// Проверка работы:
console.log(isNumeric("123"))     // true
console.log(isNumeric("12.3"))    // true
console.log(isNumeric("123abc"))  // false
console.log(isNumeric("abc"))     // false
console.log(isNumeric(" "))       // false

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
