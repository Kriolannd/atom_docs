export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Техническая документация ВелдБокс"} }],
  ["/api/auth.html", { loader: () => import(/* webpackChunkName: "api_auth.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/api/auth.html.js"), meta: {"t":"Авторизация и регистрация"} }],
  ["/api/", { loader: () => import(/* webpackChunkName: "api_index.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/api/index.html.js"), meta: {"t":"Документация API"} }],
  ["/api/lessons.html", { loader: () => import(/* webpackChunkName: "api_lessons.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/api/lessons.html.js"), meta: {"t":"Учебные материалы"} }],
  ["/api/tasks.html", { loader: () => import(/* webpackChunkName: "api_tasks.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/api/tasks.html.js"), meta: {"t":"Задания"} }],
  ["/api/topics.html", { loader: () => import(/* webpackChunkName: "api_topics.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/api/topics.html.js"), meta: {"t":"Темы"} }],
  ["/database/", { loader: () => import(/* webpackChunkName: "database_index.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/database/index.html.js"), meta: {"t":"Структура БД"} }],
  ["/project/backend.html", { loader: () => import(/* webpackChunkName: "project_backend.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/project/backend.html.js"), meta: {"t":"Backend-проект"} }],
  ["/project/frontend.html", { loader: () => import(/* webpackChunkName: "project_frontend.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/project/frontend.html.js"), meta: {"t":"Frontend-проект"} }],
  ["/project/", { loader: () => import(/* webpackChunkName: "project_index.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/project/index.html.js"), meta: {"t":"Руководство пользователя"} }],
  ["/solution_architecture/buttons.html", { loader: () => import(/* webpackChunkName: "solution_architecture_buttons.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/solution_architecture/buttons.html.js"), meta: {"t":"Кнопки"} }],
  ["/solution_architecture/database_model.html", { loader: () => import(/* webpackChunkName: "solution_architecture_database_model.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/solution_architecture/database_model.html.js"), meta: {"t":"Модель базы данных"} }],
  ["/solution_architecture/endpoints.html", { loader: () => import(/* webpackChunkName: "solution_architecture_endpoints.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/solution_architecture/endpoints.html.js"), meta: {"t":"API"} }],
  ["/solution_architecture/", { loader: () => import(/* webpackChunkName: "solution_architecture_index.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/solution_architecture/index.html.js"), meta: {"t":"Документация для разработчиков"} }],
  ["/solution_architecture/jwts.html", { loader: () => import(/* webpackChunkName: "solution_architecture_jwts.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/solution_architecture/jwts.html.js"), meta: {"t":"Сессии пользователей"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/atom_docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
