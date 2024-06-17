import comp from "E:/atom_docs/docs/.vuepress/.temp/pages/database/index.html.vue"
const data = JSON.parse("{\"path\":\"/database/\",\"title\":\"Структура БД\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Пользователи и роли\",\"slug\":\"пользователи-и-роли\",\"link\":\"#пользователи-и-роли\",\"children\":[{\"level\":3,\"title\":\"app_user\",\"slug\":\"app-user\",\"link\":\"#app-user\",\"children\":[]},{\"level\":3,\"title\":\"role\",\"slug\":\"role\",\"link\":\"#role\",\"children\":[]},{\"level\":3,\"title\":\"app_user_roles\",\"slug\":\"app-user-roles\",\"link\":\"#app-user-roles\",\"children\":[]}]},{\"level\":2,\"title\":\"Задания\",\"slug\":\"задания\",\"link\":\"#задания\",\"children\":[{\"level\":3,\"title\":\"task\",\"slug\":\"task\",\"link\":\"#task\",\"children\":[]},{\"level\":3,\"title\":\"task_progress\",\"slug\":\"task-progress\",\"link\":\"#task-progress\",\"children\":[]},{\"level\":3,\"title\":\"task_supplement\",\"slug\":\"task-supplement\",\"link\":\"#task-supplement\",\"children\":[]}]},{\"level\":2,\"title\":\"Учебные материалы\",\"slug\":\"учебные-материалы\",\"link\":\"#учебные-материалы\",\"children\":[{\"level\":3,\"title\":\"lesson\",\"slug\":\"lesson\",\"link\":\"#lesson\",\"children\":[]},{\"level\":3,\"title\":\"lesson_tasks\",\"slug\":\"lesson-tasks\",\"link\":\"#lesson-tasks\",\"children\":[]},{\"level\":3,\"title\":\"lesson_supplement\",\"slug\":\"lesson-supplement\",\"link\":\"#lesson-supplement\",\"children\":[]}]},{\"level\":2,\"title\":\"Теги\",\"slug\":\"теги\",\"link\":\"#теги\",\"children\":[{\"level\":3,\"title\":\"trait\",\"slug\":\"trait\",\"link\":\"#trait\",\"children\":[]},{\"level\":3,\"title\":\"lesson_traits\",\"slug\":\"lesson-traits\",\"link\":\"#lesson-traits\",\"children\":[]}]},{\"level\":2,\"title\":\"Темы\",\"slug\":\"темы\",\"link\":\"#темы\",\"children\":[{\"level\":3,\"title\":\"topic\",\"slug\":\"topic\",\"link\":\"#topic\",\"children\":[]},{\"level\":3,\"title\":\"topic_traits\",\"slug\":\"topic-traits\",\"link\":\"#topic-traits\",\"children\":[]},{\"level\":3,\"title\":\"topic_lessons\",\"slug\":\"topic-lessons\",\"link\":\"#topic-lessons\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.76,\"words\":229},\"filePathRelative\":\"database/index.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
