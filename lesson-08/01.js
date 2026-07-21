/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords() {}
function capitalizeWords(str) {
  if (!str) return str;
  
  let result = str[0].toUpperCase();
  
  for (let i = 1; i < str.length; i++) {
      // Если предыдущий символ был пробелом, делаем текущий заглавным
      if (str[i - 1] === ' ') {
          result += str[i].toUpperCase();
      } else {
          result += str[i];
      }
  }
  
  return result;
}

// Проверка:
console.log(capitalizeWords("hello world from javascript")); 
// Выведет: "Hello World From Javascript"
