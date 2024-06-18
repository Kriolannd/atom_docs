import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { hopeTheme } from 'vuepress-theme-hope'

export default defineUserConfig({
  lang: 'ru-RU',
  title: 'ВелдБокс',
  description: 'Здесь вы познаете силу',
  base: '/atom_docs/',
  theme: hopeTheme({
    darkmode: 'enable',
    navbar: [
      {text: 'Главная', link: '/'},
      {text: 'Схема БД', link: '/database/'},
      {text: 'Архитектура', link: '/solution_architecture/'},
      {text: 'Проект', link: '/project/'},
    ],
    sidebar: [
      '/',
      {
        text: 'Устройство модели БД',
        link: '/database/',
        prefix: '/database/',
        collapsible: true,
      },
      {
        text: 'Архитектура приложения',
        link: '/solution_architecture/',
        prefix: '/solution_architecture/',
        collapsible: true,
      },
      {
        text: 'Схема проекта',
        link: '/project/',
        prefix: '/project/',
        collapsible: true,
        children: [
          "frontend.html",
          "backend.html"
        ]
      },
      {
        text: 'Документация API',
        prefix: '/api/',
        collapsible: true,
        children: [
          "auth.html",
          "lessons.html",
          "tasks.html",
          "topics.html"
        ]
      }
    ],
  }),
  bundler: viteBundler(),
})
