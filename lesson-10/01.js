/*
  Цель задания: Разработать функционал для удаления фильма из списка с использованием паттерна MVC. После удаления фильма, необходимо отобразить сообщение "Фильм успешно удалён!" в message-box

  При возникновении сложностей можете ознакомиться с пошаговым планом реализации ниже, но лучше попробовать сначала самостоятельно 🧙‍♂️

Пошаговый план реализации:

1. Реализовать метод deleteMovie в объекте model:
  - метод должен принимать id фильма, который необходимо удалить
  - метод должен удалить фильм из массива movies
  - метод должен обновить отображение фильмов на странице

2. Добавить обработчик события для удаления фильмов:
  - в метода view.init добавить обработчик события на список фильмов
  - используя делегирование событий, обработать клик на кнопке удаления фильма
  - при клике на кнопку удаления, получить id фильма из родительского элемента и передать его в метод deleteMovie объекта controller

3. Реализовать метод deleteMovie в объекте controller:
  - метод должен принимать id фильма
  - метод должен передать id фильма в метод deleteMovie объекта model
  - метод должен отобразить сообщение "Фильм успешно удалён!" в message-box
*/

const model = {
  movies: [],
  addMovie(title, description) {
    const id = Math.random()
    const newMovie = { id, title, description }
    this.movies.push(newMovie)
    view.renderMovies(this.movies)
  },
  // 1. Метод для удаления фильма из модели
  deleteMovie(id) {
    // Фильтруем массив, оставляя только фильмы с другими id
    // Обратите внимание на приведение типов (id из DOM — это строка, а в JS — число)
    this.movies = this.movies.filter(movie => String(movie.id) !== String(id))
    // Обновляем отображение списка на странице
    view.renderMovies(this.movies)
  }
}

const view = {
  init() {
    this.renderMovies(model.movies)

    const form = document.querySelector('.form')
    const inputTitle = document.querySelector('.input-title')
    const inputDescription = document.querySelector('.input-description')

    form.addEventListener('submit', function (event) {
      event.preventDefault()
      const title = inputTitle.value
      const description = inputDescription.value
      controller.addMovie(title, description)

      inputTitle.value = ''
      inputDescription.value = ''
    })

    // 2. Добавляем обработчик события удаления фильмов на сам список (делегирование)
    const list = document.querySelector('.list')
    list.addEventListener('click', function(event) {
      // Проверяем, что кликнули именно по кнопке удаления
      if (event.target.classList.contains('delete-button')) {
        // Находим родительский элемент li и забираем его id
        const movieElement = event.target.closest('.movie')
        const movieId = movieElement.id
        
        // Передаем id в контроллер
        controller.deleteMovie(movieId)
      }
    })
  },
  renderMovies(movies) {
    const list = document.querySelector('.list')
    let moviesHTML = ''

    for (const movie of movies) {
      moviesHTML += `
        <li id="${movie.id}" class="movie">
          <b class="movie-title">${movie.title}</b>
          <p class="movie-description">${movie.description}</p>
          <button class="delete-button" type="button">Удалить 🗑</button>
        </li>
      `
    }

    list.innerHTML = moviesHTML
  },
  displayMessage(message, isError = false) {
    const messageBox = document.querySelector('.message-box')
    messageBox.textContent = message
    if (isError) {
      messageBox.classList.remove('success')
      messageBox.classList.add('error')
    } else {
      messageBox.classList.remove('error')
      messageBox.classList.add('success')
    }
  },
}

const controller = {
  addMovie(title, description) {
    if (title.trim() !== '' && description.trim() !== '') {
      model.addMovie(title, description)
      view.displayMessage('Фильм добавлен успешно!')
    } else {
      view.displayMessage('Заполните все поля!', true)
    }
  },
  // 3. Метод контроллера для удаления фильма
  deleteMovie(id) {
    // Передаем id в модель для удаления из данных
    model.deleteMovie(id)
    // Выводим успешное сообщение на экран через View
    view.displayMessage('Фильм успешно удалён!')
  }
}

function init() {
  view.init()
}

document.addEventListener('DOMContentLoaded', init)
