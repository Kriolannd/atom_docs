# Frontend-проект
Frontend представлен в виде **Vue3** приложения. Приложение запускается в виде Single Page Application с помощью live-сервера **Vite**.
В проекте используются следующие основные библиотеки и расширения:
- PrimeVue - библиотека готовых компонентов;
- PrimeIcons - библиотека иконок;
- Tailwind - css-фреймворк;
- Postcss - программа, автоматизирующая рутинные операции CSS;
- Axios - http-клиент;
- File-saver - утилита для сохранения файлов;
- Vue-router - утилита для организации маршрутизации между страницами;

## Схема проекта в виде дерева **ASCII**
```
src/
├─ interfaces/
│  ├─ submit.ts
│  ├─ token.ts
├─ router/
│  ├─ index.ts
├─ services/
│  ├─ CustomerService.ts
│  ├─ someEntity.ts
│  ├─ taskService.ts
│  ├─ tokenInterceptor.ts
│  ├─ topicService.ts
├─ utilites/
│  ├─ eventBus.ts
│  ├─ redirect.ts
│  ├─ severityEnum.ts
│  ├─ someEnum.ts
│  ├─ submitRequest.ts
├─ views/
│  ├─ About.vue
│  ├─ Add.vue
│  ├─ Contacts.vue
│  ├─ Login.vue
│  ├─ Main.vue
│  ├─ Primary.vue
│  ├─ ProductService.ts
│  ├─ Register.vue
│  ├─ Task.vue
│  ├─ Tasks.vue
│  ├─ TasksAndMaterials.vue
├─ App.vue
├─ index.css
├─ main.ts
public/
├─ favicon.ico
├─ office-supplies.jpg
new_file
Dockerfile
index.html
package-lock.json
package.json
postcss.config.js
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
env.d.ts

```