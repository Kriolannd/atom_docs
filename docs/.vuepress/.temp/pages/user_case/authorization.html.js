import comp from "/Users/karelio/Projects/atom_skills/atom_docs/docs/.vuepress/.temp/pages/user_case/authorization.html.vue"
const data = JSON.parse("{\"path\":\"/user_case/authorization.html\",\"title\":\"Авторизация\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":5},\"filePathRelative\":\"user_case/authorization.md\"}")
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
