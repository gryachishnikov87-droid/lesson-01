/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70 // тестовое значение, можно изменять
let grade
// your code


if (score >= 90 && score <= 100) {
  grade = 'a'
} else if (score >= 80 && score <= 89) {
  grade = 'b'
} else if (score >= 70 && score <= 79) {
  grade = 'c'
} else if (score >= 50 && score <= 69) {
  grade = 'd'
} else if (score >= 0 && score <= 49) {
  grade = 'f'
} else {
  grade = 'Некорректный балл'
}

console.log(grade) // Выведет: c
