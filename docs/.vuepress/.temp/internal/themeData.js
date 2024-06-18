export const themeData = JSON.parse("{\"encrypt\":{},\"darkmode\":\"enable\",\"locales\":{\"/\":{\"lang\":\"ru-RU\",\"navbarLocales\":{\"langName\":\"Русский\",\"selectLangAriaLabel\":\"Выберите язык\"},\"metaLocales\":{\"author\":\"Автор\",\"date\":\"Дата написания\",\"origin\":\"Оригинал\",\"views\":\"Просмотры страницы\",\"category\":\"Категория\",\"tag\":\"Тэги\",\"readingTime\":\"Время чтения\",\"words\":\"Слова\",\"toc\":\"На этой странице\",\"prev\":\"Предыдущая\",\"next\":\"Следующая\",\"lastUpdated\":\"Последнее обновление\",\"contributors\":\"Контрибьюторы\",\"editLink\":\"Редактировать эту страницу\",\"print\":\"Печать\"},\"outlookLocales\":{\"themeColor\":\"Цвет темы\",\"darkmode\":\"Режим темы\",\"fullscreen\":\"Полный экран\"},\"routeLocales\":{\"skipToContent\":\"Перейти к основному содержанию\",\"notFoundTitle\":\"Страница не найдена\",\"notFoundMsg\":[\"Здесь ничего нет.\",\"Как мы сюда попали?\",\"Это четыре-о-четыре.\",\"Похоже, у нас есть несколько неработающих ссылок.\"],\"back\":\"Вернуться назад\",\"home\":\"Вернуться на главную\",\"openInNewWindow\":\"Открыть в новом окне\"},\"navbar\":[{\"text\":\"Главная\",\"link\":\"/\"},{\"text\":\"Схема БД\",\"link\":\"/database/\"},{\"text\":\"Архитектура\",\"link\":\"/solution_architecture/\"},{\"text\":\"Проект\",\"link\":\"/project/\"}],\"sidebar\":[\"/\",{\"text\":\"Устройство модели БД\",\"link\":\"/database/\",\"prefix\":\"/database/\",\"collapsible\":true},{\"text\":\"Архитектура приложения\",\"link\":\"/solution_architecture/\",\"prefix\":\"/solution_architecture/\",\"collapsible\":true},{\"text\":\"Схема проекта\",\"link\":\"/project/\",\"prefix\":\"/project/\",\"collapsible\":true,\"children\":[\"frontend.html\",\"backend.html\"]},{\"text\":\"Документация API\",\"prefix\":\"/api/\",\"collapsible\":true,\"children\":[\"auth.html\",\"lessons.html\",\"tasks.html\",\"topics.html\"]}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
