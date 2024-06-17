import comp from "E:/atom_docs/docs/.vuepress/.temp/pages/api/index.html.vue"
const data = JSON.parse("{\"path\":\"/api/\",\"title\":\"Документация API\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.01,\"words\":2},\"filePathRelative\":\"api/index.md\"}")
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
