import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'
import { shikiPlugin } from "@vuepress/plugin-shiki"

export default defineUserConfig({
  lang: 'ru-RU',
  title: 'AtomSkills',
  description: 'Здесь вы познаете силу',
  base: '/atom_docs/',
  theme: hopeTheme({
    darkmode: 'disable',
    navbar: [
      {text: 'Главная', link: '/'},
      {text: 'Развертка', link: '/deploy/'},
      {text: 'Dev-документация', link: '/dev_docs/'},
    ],
    sidebar: [
      '/',
      '/deploy/',
      {
        text: 'Документация для разработчиков',
        link: '/dev_docs/',
        prefix: '/dev_docs/',
        collapsible: true,
        children: [
          "database_model.html",
          "endpoints.html",
          "buttons.html",
          "jwts.html"
        ]
      },
      {
        text: 'Руководство пользователя',
        link: '/user_case/',
        prefix: '/user_case/',
        collapsible: true,
        children: [
          "authorization.html",
          "send_data.html"
        ]
      }
    ],
  }),
  bundler: viteBundler(),
})
