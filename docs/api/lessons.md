# Учебные материалы

### **Параметры запроса на получение всех учебных материалов**
#### Путь

`GET /lessons/{code}`
#### Заголовки
#### Параметры пути
#### Параметры запроса
#### Структура ответа
```
[
    {
        "code": "lsn001",
        "title": "Практика сварки",
        "traits": [
            {
                "code": "sn1",
                "title": "fdsfs",
                "description": "go down"
            }
        ]
    }
]
```
---
<br/><br/>

### **Параметры запроса на получение конкретного учебного материала**
#### Путь

`GET /lessons/{code}`
#### Заголовки
#### Параметры пути

`code`&nbsp;&nbsp;<span style="color:gray">string</span>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #FF8100">Обязательное поле</span><br/><br/>
Код учебного материала
#### Параметры запроса
#### Структура ответа
```
{
    "code": "lsn001",
    "title": "Практика сварки",
    "content": "# Я здесь с тобой",
    "traits": [
        {
            "code": "sn1",
            "title": "fdsfs",
            "description": "go down"
        }
    ],
    "supplement": [
        "title": "sdafda",
        "file": "coco.md"
    ]
}
```
