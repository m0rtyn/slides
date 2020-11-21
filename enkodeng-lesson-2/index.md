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
# Атомарный дизайн и Styled components
<p style="font-size: 5em">⚛️ & 💅</p>

<!-- slide -->
### 🛢 Материалы

- [styled-components.com](https://styled-components.com/)
- [Перевод книги про атомарный дизайн](https://medium.com/%D0%B0%D1%82%D0%BE%D0%BC%D0%B0%D1%80%D0%BD%D1%8B%D0%B9-%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD/atomic-design-foreword-4960ad17bc1a)
- [Atomic Design 101](https://uxdesign.cc/atomic-design-101-8c5106d77717)
- [Использованный способ сделать переключение темы](https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/)
  
<!-- slide -->

## Atomic design

<!-- slide data-notes=""-->

### Зачем

<!-- slide data-notes="
компонентный подход уже давно не новшество для разработчиков, но до дизайна он дошёл с задержкой
"-->

#### Общий язык с дизайнерами


<!-- slide data-notes="
дискретизация, квантование, кирпичики
"-->
#### Разбиение на «атомы»


<!-- slide data-notes=""-->
#### Модель для масштабирования

<!-- slide data-notes="
- Единый способ писать код и взаимодействовать в команде
- Критерий оценки на ревью кода
"-->
#### Понятная аналогия

<!-- slide data-notes=""-->
#### Изоляция и переиспользуемость

<!-- slide data-notes=""-->
### Что

<!-- slide data-notes="
Atoms are the smallest possible components, such as buttons, titles, inputs or event color pallets, animations, and fonts.

<br/><br/>
They can be applied on any context, globally or within other components and templates, besides having many states, such as this example of button: disabled, hover, different sizes, etc.
"-->
#### Atoms

То что нельзя разбить на более мелкие подкомпоненты

<!-- slide data-notes="
They are the composition of one or more components of atoms.

<br/><br/>
Here we begin to compose complex components and reuse some of those components.

<br/><br/>
Молекулы могут иметь свои собственные свойства и создавать функции, используя атомы, которые сами по себе не имеют никакой функции или действия.
" -->
#### Molecules

<!-- slide data-notes="
Organisms are the combination of molecules that work together or even with atoms that compose more elaborate interfaces. A

<br/><br/>
Аt this level, the components begin to have the final shape, but they are still ensured to be independent, portable and reusable enough to be reusable in any content.
" -->
#### Organisms


<!-- slide data-notes="
In this state we stop composing components and begin to set their context.

<br/><br/>
Moreover, the templates create relationships between the organisms and others components through positions, placements and patterns of the pages but it doesn’t have any style, color or component rendered. That’s why it looks like a wireframe.
" -->
#### Templates


<!-- slide data-notes="
Pages are the navigate parts of the application and it’s where the components are distributed in one specific template.

<br/><br/>
The components get real content and they’re connected with the whole application. At this stage, we can test the efficiency of the design system to analyse if all the components are independent enough or if we need to split them in smaller parts.
" -->
#### Pages

 
<!-- slide data-notes="
" --> 
## Styled components

<!-- slide data-notes="
<br>
" -->
### Зачем

- Стилизация 🤦‍♂️
- Синтаксис
- Динамичность
- Изоляция
- Компоненты это классы
- Тестирование
- Решение болей

<!-- slide data-notes="
" -->
#### Решение болей
  
- Automatic critical CSS
- No class name bugs
- Easier deletion of CSS
- Simple dynamic styling
- Painless maintenance
- Automatic vendor prefixing

<!-- slide data-notes="
" -->
### Что

<!-- slide data-notes="
" -->
#### Tagged Template Literals


```js
// These are equivalent:
fn`some string here`
fn(['some string here'])
```

<!-- slide data-notes="
" -->
```jsx
  let person = 'Martyn';

  function myTag(strings, personExp) {
    let str0 = strings[0]; // "That "
    let str1 = strings[1]; // " is a moron"

    newStr = personExp === "Martyn" ? " is a cool man 😎" : personExp

    // We can even return a string built using a template literal
    return `${str0}${personExp}${newStr}`;
  }

  let output = myTag`That ${ person } is a moron`;

  console.log(output);
  // That Martyn is a cool man 😎 
```

<!-- slide data-notes="
" -->
#### Props

```jsx
const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  padding: 0.25em 1em;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

<!-- slide data-notes="
" -->
#### Extending

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2f9b86d0-ffb2-4dc7-a23f-8a68e4653105/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201120T154806Z&X-Amz-Expires=86400&X-Amz-Signature=08b01afabd380eff1769ceb3e5a3ccad6e4da6adf79ab9d774417f820cc5411a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

<!-- slide data-notes="

<br/><br/>
If the styled target is a simple element (e.g. styled.div), styled-components passes through any known HTML attribute to the DOM. If it is a custom React component (e.g. styled(MyComponent)), styled-components passes through all props.

<br/><br/>
This example shows how all props of the Input component are passed on to the
DOM node that is mounted, as with React elements.

<br/><br/>
Note how the inputColor prop is not passed to the DOM, but type and defaultValue are. That is styled-components being smart enough to filter non-standard attributes automatically for you.
" -->
#### Props filtering

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/23d9ca12-0358-4791-af99-946167fb3080/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201120T153819Z&X-Amz-Expires=86400&X-Amz-Signature=1c904ba629e6b4e81898b3b4a5794c9b865fcdaa9943ee22f6052afa218ba42d&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)


<!-- slide data-notes="
scss-like syntax
" -->
#### Pseudoelements, pseudoselectors, and nesting

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/167d85ae-fd57-4729-b8d2-5a8d8b6f9543/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201120T153920Z&X-Amz-Expires=86400&X-Amz-Signature=3b2087bf629bc7977f091e0c71cae60e791745b221b384a81fbfd87cac61d052&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

<!-- slide data-notes="
" -->
#### Dynamic attributes and overrides

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3f37877a-0529-462e-9e7e-36e87fb9170b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201120T154000Z&X-Amz-Expires=86400&X-Amz-Signature=43577b2f70115d66d2536598210af2912d106d432da9debb1a11855b4152c255&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

<!-- slide data-notes="
" -->
#### css`` interpolation

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/00dc106c-e289-4118-9a1d-adb082136dae/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20201120%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20201120T155210Z&X-Amz-Expires=86400&X-Amz-Signature=f5adc40bfb3715c5036bc3027854ab44b41a36dbe681d1837a5270f87b741910&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22)

