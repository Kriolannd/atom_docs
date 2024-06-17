import comp from "E:/atom_docs/docs/.vuepress/.temp/pages/dev_docs/endpoints.html.vue"
const data = JSON.parse("{\"path\":\"/dev_docs/endpoints.html\",\"title\":\"API\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"dev_docs/endpoints.md\"}")
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
