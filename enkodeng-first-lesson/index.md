---
presentation:
  theme: white.css
  margin: 0.1
  minScale: 0.2
  maxScale: 1.5
  controls: true
  progress: true
  slideNumber: true
  keyboard: true
  overview: true
  center: false
  touch: true
  shuffle: false
  enableSpeakerNotes: true
  fragments: true
  hideAddressBar: true
  transition: 'slide'
  transitionSpeed: 'default'
  backgroundTransition: 'default'
---

@import "../styles.less"

<!-- slide style="font-size: 0.8em" class="milestone" data-notes="" -->
# Разработка изолированных компонентов
<p style="font-size: 5em">🧱</p>

<!-- slide id="hi" sdata-notes="Меня зовут Мартын. Я фронтендер в Коде, а ещё я читаю доклады и веду стажировки"-->
### 🤚 Привет

![](../assets/troy-mccryre.png)

<!-- slide -->
### Кто я

- Во фронтенде 4.5 лет
- Писал на трёх фреймворках 
- Переехал в Калининград за спокойствием

<!-- slide -->

<a href="http://www.youtube.com/watch?v=p-LFh5Y89eM"><img width="100%" src="http://img.youtube.com/vi/p-LFh5Y89eM/0.jpg" /></a>

<!-- slide -->

## Зачем

<!-- slide data-notes="
сторибук стоит использовать даже если разработчик всего один
"-->

### Bus factor


<!-- slide data-notes="
</br></br>
в сторибук мы изолируем UI от приложения: state, bisness logic, context

</br></br>
Изоляция компонента — 5 мин

</br></br>
в stories тяжелее пробрасывать состояние и внешние данные, а значим разработка будет стремиться к автономности компонента -->
"-->

### Зависимость от контекста


<!-- slide -->

### Дублирование компонентов

> — Зачем сделал кнопку?
> — а я откуда знал?

<!-- slide -->

### Время сборки
        
<!-- slide -->

### Шеринг

<!-- slide data-notes="
компонент может находиться глубоко в приложении и до него сложно добраться

</br></br>
Stories как юзкейсы — 5 мин

CSF — is an emerging standard for component examples

</br></br>
тестирование пограничных случаев — 2 мин?

как unit-тесты, истории позволяют взглянуть на наш компонент со стороны и оценить его работу объективнее

</br></br>
power search — 0 мин, на LiveCoding
"-->

### Тестирование и дебаг


<!-- slide data-notes="
Расширяемость
</br>
- essential addons: Actions, Controls, Viewport, Backgrounds, Toolbars & gloabls
</br>
- core addons: Knobs, Events, Docs, CssResources, etc
</br>- controls vs knobs
"-->

### Addons — 10 мин

<!-- slide data-notes="
</br>
- august</br>
- zero-config setup</br>
- controls</br>
    - args changing via UI</br>
- stories composition</br>
- auto-generated args</br>
    - initial values</br>
    - dynamical changing with Controls</br>
    - auto-generated Controls and Actions</br>
" -->

## Storybook 6.0

<!-- slide data-notes="
- истории стоит актуализировать, либо падения будут накапливаться</br>
- это минус всякой дополнительной технологии при бандловой файловой структуре — необходимость создавать одноимённые файлы и папки, что добавляет уровень вложенности при импортах</br>
"-->

## Минусы


<!-- slide -->
### 🛢 Материалы

- [Интро в Сторибук](https://www.learnstorybook.com/intro-to-storybook/)
- [Макет приложения](https://www.figma.com/file/HbaePNYYfSLoizyVOKDevM/Tasker-Copy?node-id=0%3A174)
- [Серверный API](https://documenter.getpostman.com/view/8858534/SW7dX7JG#97c7e1ce-0a37-4d6d-89af-aba8f34f1f4c)
- [Вычислительная сложность](https://www.wikiwand.com/ru/%D0%92%D1%8B%D1%87%D0%B8%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C#/%D0%90%D1%81%D0%B8%D0%BC%D0%BF%D1%82%D0%BE%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C)
- [Цикломатическая сложность](https://www.wikiwand.com/ru/%D0%A6%D0%B8%D0%BA%D0%BB%D0%BE%D0%BC%D0%B0%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C)
- [Новые (опять) принципы написания компонентов от дяди Дэна](https://overreacted.io/writing-resilient-components/)

