export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"t":"Документация AtomSkills"} }],
  ["/deploy/", { loader: () => import(/* webpackChunkName: "deploy_index.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/deploy/index.html.js"), meta: {"t":"Инструкция по развертыванию"} }],
  ["/user_case/authorization.html", { loader: () => import(/* webpackChunkName: "user_case_authorization.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/user_case/authorization.html.js"), meta: {"t":"Авторизация"} }],
  ["/user_case/", { loader: () => import(/* webpackChunkName: "user_case_index.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/user_case/index.html.js"), meta: {"t":"Руководство пользователя"} }],
  ["/user_case/send_data.html", { loader: () => import(/* webpackChunkName: "user_case_send_data.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/user_case/send_data.html.js"), meta: {"t":"Отправка данных"} }],
  ["/dev_docs/buttons.html", { loader: () => import(/* webpackChunkName: "dev_docs_buttons.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/dev_docs/buttons.html.js"), meta: {"t":"Кнопки"} }],
  ["/dev_docs/database_model.html", { loader: () => import(/* webpackChunkName: "dev_docs_database_model.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/dev_docs/database_model.html.js"), meta: {"t":"Модель базы данных"} }],
  ["/dev_docs/endpoints.html", { loader: () => import(/* webpackChunkName: "dev_docs_endpoints.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/dev_docs/endpoints.html.js"), meta: {"t":"API"} }],
  ["/dev_docs/", { loader: () => import(/* webpackChunkName: "dev_docs_index.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/dev_docs/index.html.js"), meta: {"t":"Документация для разработчиков"} }],
  ["/dev_docs/jwts.html", { loader: () => import(/* webpackChunkName: "dev_docs_jwts.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/dev_docs/jwts.html.js"), meta: {"t":"Сессии пользователей"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/karelio/Projects/atom_docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);
