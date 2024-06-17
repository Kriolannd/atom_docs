import comp from "E:/atom_docs/docs/.vuepress/.temp/pages/solution_architecture/database_model.html.vue"
const data = JSON.parse("{\"path\":\"/solution_architecture/database_model.html\",\"title\":\"Модель базы данных\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":11},\"filePathRelative\":\"solution_architecture/database_model.md\"}")
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
