import comp from "E:/atom_docs/docs/.vuepress/.temp/pages/user_case/send_data.html.vue"
const data = JSON.parse("{\"path\":\"/user_case/send_data.html\",\"title\":\"Отправка данных\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":6},\"filePathRelative\":\"user_case/send_data.md\"}")
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
