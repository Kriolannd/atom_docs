import comp from "/Users/karelio/Projects/atom_skills/atom_docs/docs/.vuepress/.temp/pages/project/frontend.html.vue"
const data = JSON.parse("{\"path\":\"/project/frontend.html\",\"title\":\"Frontend-проект\",\"lang\":\"ru-RU\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Схема проекта в виде дерева ASCII\",\"slug\":\"схема-проекта-в-виде-дерева-ascii\",\"link\":\"#схема-проекта-в-виде-дерева-ascii\",\"children\":[]}],\"readingTime\":{\"minutes\":0.39,\"words\":118},\"filePathRelative\":\"project/frontend.md\"}")
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
