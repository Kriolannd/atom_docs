# Задания

### **Параметры запроса на получение всех заданий**
#### Путь

`GET /tasks`
#### Заголовки
#### Параметры пути
#### Параметры запроса
#### Структура ответа
```
[
    {
        "code": "lsn001",
        "title": "Практика сварки",
        "difficulty": 5
    }
]
```
---
<br/><br/>

### **Параметры запроса на получение конкретного задания**
#### Путь

`GET /tasks/{code}`
#### Заголовки
#### Параметры пути

`code`&nbsp;&nbsp;<span style="color:gray">string</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #FF8100">Обязательное поле</span><br/><br/>
Код задания
#### Параметры запроса
#### Структура ответа
```
{
    "code": "lsn001",
    "title": "Практика сварки",
    "content": "# Я здесь с тобой",
    "difficulty": 5,
    "time": 60,
    "supplement": [
        "title": "sdafda",
        "file": "coco.md"
    ]
}
```
---
<br/><br/>

### **Параметры запроса на старт задания**
#### Путь

`POST /tasks/{code}/start`
#### Заголовки
#### Параметры пути

`code`&nbsp;&nbsp;<span style="color:gray">string</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #FF8100">Обязательное поле</span><br/><br/>
Код задания
#### Параметры запроса
#### Структура ответа

---
<br/><br/>

### **Параметры запроса на отправку решения по заданию**
#### Путь

`POST /tasks/{code}/submit`
#### Заголовки
#### Параметры пути

`code`&nbsp;&nbsp;<span style="color:gray">string</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #FF8100">Обязательное поле</span><br/><br/>
Код задания
#### Параметры запроса
#### Структура ответа
```
{

}
```
