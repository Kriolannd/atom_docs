<template><div><h1 id="структура-бд" tabindex="-1"><a class="header-anchor" href="#структура-бд"><span>Структура БД</span></a></h1>
<p>На данной картинке представлена схема БД</p>
<p><img src="@source/images/atomskills_database.png" alt="Image"></p>
<h1 id="описание" tabindex="-1"><a class="header-anchor" href="#описание"><span>Описание</span></a></h1>
<h2 id="пользователи-и-роли" tabindex="-1"><a class="header-anchor" href="#пользователи-и-роли"><span>Пользователи и роли</span></a></h2>
<h3 id="app-user" tabindex="-1"><a class="header-anchor" href="#app-user"><span>app_user</span></a></h3>
<ul>
<li>id: integer - уникальный идентификатор пользователя;</li>
<li>password: text - зашифрованный пароль пользователя;</li>
<li>username: text - логин пользователя;</li>
</ul>
<h3 id="role" tabindex="-1"><a class="header-anchor" href="#role"><span>role</span></a></h3>
<ul>
<li>id: integer - уникальный идентификатор роли;</li>
<li>name: text - название роли;</li>
</ul>
<h3 id="app-user-roles" tabindex="-1"><a class="header-anchor" href="#app-user-roles"><span>app_user_roles</span></a></h3>
<ul>
<li>app_user_id: integer - идентификатор пользователя;</li>
<li>roles_id: integer - идентфикатор пользователя;</li>
</ul>
<p>Данная таблица разбивает отношение <strong>многие ко многим</strong> между пользователями и его ролями</p>
<h2 id="задания" tabindex="-1"><a class="header-anchor" href="#задания"><span>Задания</span></a></h2>
<h3 id="task" tabindex="-1"><a class="header-anchor" href="#task"><span>task</span></a></h3>
<ul>
<li>code: text - уникальный код задания;</li>
<li>content: text - ссылка на <strong>markdown</strong> файл</li>
<li>difficulty: integer - сложность задания;</li>
<li>time: integer - время в минутах, отведенное на выполнение задания;</li>
<li>title: text - заголовок задания;</li>
</ul>
<h3 id="task-progress" tabindex="-1"><a class="header-anchor" href="#task-progress"><span>task_progress</span></a></h3>
<ul>
<li>user_id: integer - идентификатор пользователя;</li>
<li>task_code: text - код задания;</li>
<li>status: integer - статус выполнения задания конкретным пользователем;</li>
</ul>
<h3 id="task-supplement" tabindex="-1"><a class="header-anchor" href="#task-supplement"><span>task_supplement</span></a></h3>
<ul>
<li>file: text - ссылка на файл приложения;</li>
<li>task_code: text - код задания;</li>
<li>title: text - заголовок приложения;</li>
</ul>
<h2 id="учебные-материалы" tabindex="-1"><a class="header-anchor" href="#учебные-материалы"><span>Учебные материалы</span></a></h2>
<h3 id="lesson" tabindex="-1"><a class="header-anchor" href="#lesson"><span>lesson</span></a></h3>
<ul>
<li>code: text - уникальный код учебного материала;</li>
<li>author: text - автор учебного материала;</li>
<li>content: text - ссылка на <strong>markdown</strong> файл с содержанием учебного материала;</li>
<li>title: text - заголовок учебного материала;</li>
</ul>
<h3 id="lesson-tasks" tabindex="-1"><a class="header-anchor" href="#lesson-tasks"><span>lesson_tasks</span></a></h3>
<ul>
<li>lessons_code: text - код учебного материала;</li>
<li>tasks_code: text - код задания;</li>
</ul>
<h3 id="lesson-supplement" tabindex="-1"><a class="header-anchor" href="#lesson-supplement"><span>lesson_supplement</span></a></h3>
<ul>
<li>file: text - ссылка файл приложения;</li>
<li>lesson_code: text - код учебного материала;</li>
<li>title: text - заголовок приложения;</li>
</ul>
<h2 id="теги" tabindex="-1"><a class="header-anchor" href="#теги"><span>Теги</span></a></h2>
<h3 id="trait" tabindex="-1"><a class="header-anchor" href="#trait"><span>trait</span></a></h3>
<ul>
<li>code: text - код тега;</li>
<li>description: text - описание тега;</li>
<li>name: text - название тега;</li>
</ul>
<h3 id="lesson-traits" tabindex="-1"><a class="header-anchor" href="#lesson-traits"><span>lesson_traits</span></a></h3>
<ul>
<li>lesson_code - код задания;</li>
<li>traits_code - код тега;</li>
</ul>
<h2 id="темы" tabindex="-1"><a class="header-anchor" href="#темы"><span>Темы</span></a></h2>
<h3 id="topic" tabindex="-1"><a class="header-anchor" href="#topic"><span>topic</span></a></h3>
<ul>
<li>code: text - код темы;</li>
<li>description: text - описание темы;</li>
<li>title: text - заголовок темы;</li>
</ul>
<h3 id="topic-traits" tabindex="-1"><a class="header-anchor" href="#topic-traits"><span>topic_traits</span></a></h3>
<ul>
<li>topic_code: text - код темы;</li>
<li>traits_code: text - код тега;</li>
</ul>
<h3 id="topic-lessons" tabindex="-1"><a class="header-anchor" href="#topic-lessons"><span>topic_lessons</span></a></h3>
<ul>
<li>topics_code: text - код темы;</li>
<li>lessons_code: text - код учебного материала;</li>
</ul>
</div></template>


