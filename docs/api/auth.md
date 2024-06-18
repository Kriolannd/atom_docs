# Авторизация и регистрация

### **Параметры запроса на регистрацию пользователя**
#### Путь

`POST /auth/signup`
#### Заголовки
#### Параметры пути
#### Параметры запроса

`username`&nbsp;&nbsp;<span style="color:gray">string</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #FF8100">Обязательное поле</span><br/><br/>
Логин регистрируемого пользователя

---
`password`&nbsp;&nbsp;<span style="color:gray">string</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #FF8100">Обязательное поле</span><br/><br/>
Пароль регистрируемого пользователя

---
#### Структура ответа
<br/><br/>

### **Параметры запроса на авторизацию пользователя**
#### Путь

`POST /auth/login`
#### Заголовки
#### Параметры пути
#### Параметры запроса

`username`&nbsp;&nbsp;<span style="color:gray">string</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #FF8100">Обязательное поле</span><br/><br/>
Логин пользователя, запрашивающего авторизацию

---
`password`&nbsp;&nbsp;<span style="color:gray">string</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #FF8100">Обязательное поле</span><br/><br/>
Пароль пользователя, запрашивающего авторизацию

---
#### Структура ответа
