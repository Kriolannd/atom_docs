import comp from "E:/atom_docs/docs/.vuepress/.temp/pages/project/backend.html.vue"
const data = JSON.parse("{\"path\":\"/project/backend.html\",\"title\":\"Backend-проект\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":6},\"filePathRelative\":\"project/backend.md\"}")
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
