import comp from "E:/atom_docs/docs/.vuepress/.temp/pages/dev_docs/index.html.vue"
const data = JSON.parse("{\"path\":\"/dev_docs/\",\"title\":\"Документация для разработчиков\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.07,\"words\":20},\"filePathRelative\":\"dev_docs/index.md\"}")
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
