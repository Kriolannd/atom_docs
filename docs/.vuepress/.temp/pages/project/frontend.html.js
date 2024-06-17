import comp from "E:/atom_docs/docs/.vuepress/.temp/pages/project/frontend.html.vue"
const data = JSON.parse("{\"path\":\"/project/frontend.html\",\"title\":\"Frontend-проект\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":6},\"filePathRelative\":\"project/frontend.md\"}")
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
