<template><div><h1 id="frontend-проект" tabindex="-1"><a class="header-anchor" href="#frontend-проект"><span>Frontend-проект</span></a></h1>
<p>Frontend представлен в виде <strong>Vue3</strong> приложения. Приложение запускается в виде Single Page Application с помощью live-сервера <strong>Vite</strong>.
В проекте используются следующие основные библиотеки и расширения:</p>
<ul>
<li>PrimeVue - библиотека готовых компонентов;</li>
<li>PrimeIcons - библиотека иконок;</li>
<li>Tailwind - css-фреймворк;</li>
<li>Postcss - программа, автоматизирующая рутинные операции CSS;</li>
<li>Axios - http-клиент;</li>
<li>File-saver - утилита для сохранения файлов;</li>
<li>Vue-router - утилита для организации маршрутизации между страницами;</li>
</ul>
<h2 id="схема-проекта-в-виде-дерева-ascii" tabindex="-1"><a class="header-anchor" href="#схема-проекта-в-виде-дерева-ascii"><span>Схема проекта в виде дерева <strong>ASCII</strong></span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├─ interfaces/</span></span>
<span class="line"><span>│  ├─ submit.ts</span></span>
<span class="line"><span>│  ├─ token.ts</span></span>
<span class="line"><span>├─ router/</span></span>
<span class="line"><span>│  ├─ index.ts</span></span>
<span class="line"><span>├─ services/</span></span>
<span class="line"><span>│  ├─ CustomerService.ts</span></span>
<span class="line"><span>│  ├─ someEntity.ts</span></span>
<span class="line"><span>│  ├─ taskService.ts</span></span>
<span class="line"><span>│  ├─ tokenInterceptor.ts</span></span>
<span class="line"><span>│  ├─ topicService.ts</span></span>
<span class="line"><span>├─ utilites/</span></span>
<span class="line"><span>│  ├─ eventBus.ts</span></span>
<span class="line"><span>│  ├─ redirect.ts</span></span>
<span class="line"><span>│  ├─ severityEnum.ts</span></span>
<span class="line"><span>│  ├─ someEnum.ts</span></span>
<span class="line"><span>│  ├─ submitRequest.ts</span></span>
<span class="line"><span>├─ views/</span></span>
<span class="line"><span>│  ├─ About.vue</span></span>
<span class="line"><span>│  ├─ Add.vue</span></span>
<span class="line"><span>│  ├─ Contacts.vue</span></span>
<span class="line"><span>│  ├─ Login.vue</span></span>
<span class="line"><span>│  ├─ Main.vue</span></span>
<span class="line"><span>│  ├─ Primary.vue</span></span>
<span class="line"><span>│  ├─ ProductService.ts</span></span>
<span class="line"><span>│  ├─ Register.vue</span></span>
<span class="line"><span>│  ├─ Task.vue</span></span>
<span class="line"><span>│  ├─ Tasks.vue</span></span>
<span class="line"><span>│  ├─ TasksAndMaterials.vue</span></span>
<span class="line"><span>├─ App.vue</span></span>
<span class="line"><span>├─ index.css</span></span>
<span class="line"><span>├─ main.ts</span></span>
<span class="line"><span>public/</span></span>
<span class="line"><span>├─ favicon.ico</span></span>
<span class="line"><span>├─ office-supplies.jpg</span></span>
<span class="line"><span>new_file</span></span>
<span class="line"><span>Dockerfile</span></span>
<span class="line"><span>index.html</span></span>
<span class="line"><span>package-lock.json</span></span>
<span class="line"><span>package.json</span></span>
<span class="line"><span>postcss.config.js</span></span>
<span class="line"><span>tailwind.config.js</span></span>
<span class="line"><span>tsconfig.app.json</span></span>
<span class="line"><span>tsconfig.json</span></span>
<span class="line"><span>tsconfig.node.json</span></span>
<span class="line"><span>vite.config.ts</span></span>
<span class="line"><span>env.d.ts</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


