/*
В этом задании вам предстоит разработать интерактивный слайдер, который позволит пользователю переключаться между созданными нейросетью изображениями веб-технологий.
Изучите файл index.html. В этом задании надо будет работать с секцией "Урок 6". Разметка уже написано - нужно добавить только js-код.

Задание:
- Добавьте функциональность кнопкам "prev" и "next", чтобы при их нажатии изображение в теге `<img>` менялось на предыдущее или следующее
- Обеспечьте циклическое переключение изображений: после последнего изображения следует первое, и наоборот.

Адреса изображений находятся в массиве WEB_TECH_IMAGE
Первоначально отображается первое изображение из WEB_TECH_IMAGE

🧙‍♂️ Совет: обратите внимание на управление индексом текущего изображения — это ключ к успешному переключению изображений.
*/

const WEB_TECH_IMAGES = [
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/32f74d50-68d0-46aa-b035-7b3a5300d2c1_js-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/c8a1f4a6-1337-4899-bdfd-a8c9c7bb806a_css-magic-logo.jpg',
  'https://production-it-incubator.s3.eu-central-1.amazonaws.com/file-manager/Image/784380b9-6937-42a6-bdfe-869835820234_html-magic-logo.jpg',
]
// 1. Проверьте, что этот массив объявлен в самом верху файла (название как в вашем задании)
const web_tech_images = [
  'https://amazonaws.com',
  'https://amazonaws.com',
  'https://amazonaws.com',
];

// 2. Находим необходимые элементы на странице
const imageElement = document.getElementById('web-tech-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

// 3. Инициализируем переменную для хранения индекса текущего изображения
let currentIndex = 0;

// 4. Функция для обновления атрибута src у изображения
function updateImage() {
  // Используем ровно то имя массива, которое объявлено выше (web_tech_images)
  imageElement.src = web_tech_images[currentIndex];
}

// 5. Обработчик для кнопки "next" (вперед)
nextButton.addEventListener('click', () => {
  currentIndex++;
  // Если вышли за пределы массива, переходим к первому элементу
  if (currentIndex >= web_tech_images.length) {
    currentIndex = 0;
  }
  updateImage();
});

// 6. Обработчик для кнопки "prev" (назад)
prevButton.addEventListener('click', () => {
  currentIndex--;
  // Если ушли в минус, переходим к последнему элементу массива
  if (currentIndex < 0) {
    currentIndex = web_tech_images.length - 1;
  }
  updateImage();
});