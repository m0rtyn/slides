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

@import "styles.less"

<!-- slide class="milestone" data-notes="" -->

# 🧑‍💻 → 🧑‍💻🧑‍💻 Opensource. Почему разработчики делятся 


<!-- slide class="milestone" data-notes="..."-->
## Meta

<!-- slide id="hi" data-notes="Hello, my name is John Doe..."-->

![](../assets/troy-mccryre.png)

<!-- slide data-notes="..." -->

---
Dump from Notion
---

Ссылка на эту презентацию -> https://someta.site/talks/opensource

## Oпенсорс сегодня

Open source — это исходный код, который находится в свободном доступе для возможной модификации и распространения. Также это название имеют методология разработки, сообщество и философия.

Главное отличие Опенсорса в том, что код программы может быть изучен, доработан, использован и просто скопирован. Речь именно об исходном коде, который не включает в себя серверные мощности, инфрастуктуру, интеллектуальную собственность или людей стоящих за проектом.

Опенсорс стал основой информационных технологий. Представьте себе мир без Linux, Python, Firefox, a также без Git, Postgres, Django, Typescript, VSCode, React & Angular & Vue, Etherium, Kubernetes и далее.

—

В контексте этого доклада я буду говорить об опенсорс-проектах имея в виду репозитории доступные на Github. Исторически так сложилось, я расскажу об этом подробнее чуть позже.

—

Опенсорс набрал денежные обороты поскольку и всё больше конвертируется в деньги.

За опенсорс:

- награждают
- поддерживают пожервованиями и спонсорством
- нанимают
- консультируются
- поощрают кроптовалютой
- присылают футболки

—

Опенсорс это давно методология написания кода по-умолчанию. А текущий объём опенсорс-проектов покрывает большинство потребностей разработчиков. В опенсорсе также есть игры, списки материалов по многим темам, книги, научные работы и даже рецепт пива.

Кто из вас уже имеет профиль на Github и создавал там репозитории?

—

Звёздочки на Гитхабе ценятся выше лайков на фейсбуке/ВК поскольку за них вас могут нанять в компанию мечты или пригласить читать доклад.

Я считаю, что мы движемся ко всё более хитрым способам монетизации основанных на внимании людей, а не на прямой продаже.

Опенсорс становится основой для экономики, где деньги становятся всё более «текучими» и распространяются всё легче со всё меньшими комиссиями.

—

Что даёт участие в опенсорсе

- **причастность** к сообществу
- **реализация** как разработчика
- **влияние** на развитие проектов
- **репутация** в сообществе
- **карьера** в сообществе коррелирует с карьерой в компании
- **независимость** от компании и местонахождения

## Откуда взялся опенсорс

Отцом опенсорса считают Ричарда Столлмана за его заслуги, почтенный возраст, эпатажные выходки и категоричное о свободе ПО

—

Проект **GNU** стал **п**опулярной открытой разработкой Столлмана. Он был сделан в ответ закрытому **Unix**.

- ...

    Unix это семейство разнофункциональных утилит вместе с файловой системой

**GNU** расшифровывается как «*GNU is not Unix*»

- ...

    если вы слышали о GNU, но не знаете о чём речь, то это норма. У Столмана дико полыхает от того, что все знают о Линуксе, но не знают о GNU. Он постоянно уточняет, что стоит говорить не просто Линукс, а GNU/Linux, поскольку тут в тесной связке с GNU.

    Слова Столмана во время награждения премией Линуса Торвальдса:

    > So, very ironic things have happened, but nothing to match this. Giving the Linus Torvalds Award to the Free Software Foundation is sort of like giving the Han Solo Award to the rebel fleet.

—

Столлман является создателем ~~текстового редактора~~ фреймворка для текстовых редакторов — **Emacs** и патриархом церкви Emacs (не спрашивайте)

## Free software vs Open source

Разберёмся в терминах. Большинству известно деление на:

- *проприетарное ПО —* закрытый от изучения софт, который создан для продажи
- *опенсорс* — софт, в который можно заглянуть.

Но мы пойдём глубже

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7a5f706-08b7-4479-805e-2f1d83c41d99/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7a5f706-08b7-4479-805e-2f1d83c41d99/Untitled.png)

- Memes

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a097a8d-9ade-463b-b938-97735135218d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1a097a8d-9ade-463b-b938-97735135218d/Untitled.png)

### Open source vs Free software vs Public-domain software vs Freeware

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/933bccad-f357-4e0a-a66c-e744904bceb7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/933bccad-f357-4e0a-a66c-e744904bceb7/Untitled.png)

- 
    - **Open Source** сосредоточен на доступности исходного кода: возможности изменять его и делиться им
    - **Free software** и **Public-domain software** сосредоточены на свободе использовать программу, изменять ее и делиться ею.
    - **Freeware**, по своей сути, преследует коммерческие цели и потенциальную монетизацию. Часто встречается как финмодель «Freemium».

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed9b45de-a55f-4a25-91a9-7cbf0bdf50fc/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ed9b45de-a55f-4a25-91a9-7cbf0bdf50fc/Untitled.png)

- Источники
    - [https://blog.usejournal.com/understanding-open-source-and-free-software-licensing-c0fa600106c9](https://blog.usejournal.com/understanding-open-source-and-free-software-licensing-c0fa600106c9)
    - [https://www.wikiwand.com/en/Proprietary_software](https://www.wikiwand.com/en/Proprietary_software)

### Очень краткая история опенсорса

- 1950+ — начало компьютерной эпохи
- 1960+ — развитие коммерчесского ПО
- 1970+ — ПО стало копируемым
- 1983+ — Столлман опубликовал GNU, манифест свободного ПО и основал FSF
- 1989+ — Тим Бернерс-Ли опубликовал спецификацию WWW
- 1990+ — Торвальдс сделал Линукс, появился sourceforge.com, появился Linux Foundation
- 1998 — на Freeware Summit утвердили термин Open source
- Ранние 2000 — тёрки и скандалы вокруг свободного ПО, появился Python Software Foundation
- 2002+ — Появление AWS и развитие облачных серверов
- 2005 — Торвальдс сделал Git
- 2008+ — Появился Github и его альтернативы, появился Android
- 2010+ — Появились Docker и Kubernetes
- 2017 — Microsoft стал крупнейшим поставщиком опенсорса
- 2018 — Github куплен Microsoft'ом
- 2021+ 👈  Мы где-то здесь

—

Идею открытого ПО не стоит приписывать одному человеку. Она «витала в воздухе» в ранние годы IT-индустрии.

OSS стал дико развиваться с появлением **Github**, который предоставил удобный интерфейс и облачный хостинг для Git-репозиториев.

- Источники
    - Фильм «Революционная ОС»

    [History of free and open-source software | Wikiwand](https://www.wikiwand.com/en/History_of_free_and_open-source_software)

    [Timeline of GitHub | Wikiwand](https://www.wikiwand.com/en/Timeline_of_GitHub)

    [https://spiceprogram.org/history/](https://spiceprogram.org/history/)

    [https://maximilianmichels.com/2021/history-of-open-source/](https://maximilianmichels.com/2021/history-of-open-source/)

    [https://www.oreilly.com/pub/pr/636](https://www.oreilly.com/pub/pr/636)

## Мифы об опенсорсе

- свободное ПО это про Линукс 🤷‍♂️
- коммерческое ПО более успешное финансово чем опенсорсное 🤷‍♂️
- опенсорс это коммунизм 🤷‍♂️
- опенсорс сделает вас популярным 🤷‍♂️

## Чем полезен опенсорс

> Делайте опенсорс если вы хотите изменить мир — Андрей Ситник

- Diversity (Разнообразие)
- Доступность к коду
- Passion Economy
- Развитие навыков
- Публичность/прозрачность
- Автономность

## Как вкатиться в опенсорс

Во-первых, стоит послушать этот доклад 😅

—

Опенсорс это альтруизм, потому что он существует за счёт людей, которые хотят делиться ресурсами с остальными.

- 

    Если бы в опенсорсе существовали только личные репозитории, которые не стремятся привлекать других к совместной разработке, то не получилось бы многих популярных проектов. Поэтому основой опенсорс-активности является помогать и делиться.

### Об альтруизме

⁉️ Здесь я спекулирую и интерпретирую. Я сформировал собственную модель почему кто-то активно пишет в опенсорс, а кто-то его только использует. Дело в потребностях.

—

По данным исследования из книги 80000 часов, людям по достижению определённой суммы дохода и уровня благополучия дополнительное повышение этих метрих приносит всё меньше и меньше «счастья», по обратной экспоненте.

- 

    Stevenson, Betsey, and Justin Wolfers. Subjective well-being and income: Is there any evidence of satiation? No. w18992. National Bureau of Economic Research, 2013 Archived link

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e8b5531-ecb7-4c7d-b645-bdf6eaa7bd48/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8e8b5531-ecb7-4c7d-b645-bdf6eaa7bd48/Untitled.png)

—

Зато таким людям всё больше приносит удовольствия акт помощи и разделения ресурсов с другими людьми. На основе этого я понимаю и опенсорс.

—

Я убеждён в том, что делятся кодом те, кто:

- удовлетворены в потребностях низшего порядка
- давно и легко пишут код
- принимают и понимают аспекты опенсорса: английский язык, гитхаб, асинхронные коммуникации, прозрачность, добровольность
- 

    Поэтому если у вас есть желание быть с опенсорсом, но почему-то не выходит, то обратите внимание к себе. А достаточно ли у вас денег для ощущения безопасности и удовлетворённости, а спокойны ли вы своей специальностью, а есть ли у вас свободное время на творчество?

### Карьера в опенсорсe

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7099abc-6e0e-40da-b8ae-a3cb89dc6a8f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7099abc-6e0e-40da-b8ae-a3cb89dc6a8f/Untitled.png)

### Оформление проекта

—

#### Доступность опенсорс-проектов

Документация — дверь в ваш проект и самый важный элемент

—

#### Чёткое описание сути проекта

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab7982cc-2077-4e71-83f2-67c44c8a803f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab7982cc-2077-4e71-83f2-67c44c8a803f/Untitled.png)

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af431921-f5d8-4282-90f3-01691e8c450f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/af431921-f5d8-4282-90f3-01691e8c450f/Untitled.png)

#### Опорные элементы в описании

- изображения
- сниппеты кода
- списки
- заголовки
- эмодзи

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad39bbde-fdea-4184-a304-65e2a75e5b3a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad39bbde-fdea-4184-a304-65e2a75e5b3a/Untitled.png)

—

#### Подробный алгоритм использования проекта

- Источники:

    [Андрей Ситник - Продвижение опенсорс-проектов](https://www.youtube.com/watch?v=SbgqR79nPd0)

### Как можно помочь сообществу

- ядро
- общение и образование
- экосистема
- документация
- спонсорство

### Коллективные опенсорс-события

#### Google summer of code

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/72a17f19-acd0-43a1-8228-1f9e4bf33685/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/72a17f19-acd0-43a1-8228-1f9e4bf33685/Untitled.png)

#### Hacktoberfest

#### CoMMON

## Лицензии

BSD самая открытая лицензия. Самая распространнённая в опенсорсе — MIT

—

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e14e563-a1ac-45a4-9e95-74f1c90bd2a7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e14e563-a1ac-45a4-9e95-74f1c90bd2a7/Untitled.png)

## Риски для опенсорса

- hype driven
- Риски безопасности
    - утечки в Эфириуме
- Лицензирование
- Риски качества
- Источники:
    - [https://www.whitesourcesoftware.com/resources/blog/top-3-open-source-risks-and-how-to-beat-them/](https://www.whitesourcesoftware.com/resources/blog/top-3-open-source-risks-and-how-to-beat-them/)
    - [https://www.infocyte.com/blog/2019/06/18/7-risks-posed-by-open-source-software-and-how-to-defend-yourself/](https://www.infocyte.com/blog/2019/06/18/7-risks-posed-by-open-source-software-and-how-to-defend-yourself/)
    - [https://www.compact.nl/en/articles/the-risks-of-open-source-software-for-corporate-use/](https://www.compact.nl/en/articles/the-risks-of-open-source-software-for-corporate-use/)

## Кому нужен опенсо2рс

- Разработчикам
- Компаниям
- Государствам
- Науке

## Скандалы опенсорса

- баны репозиториев и аккаунтов на гитхабе
- лицензия Реакт
- копирайт-троллинг
- этические скандалы приводящие к снятию ключевых персон с руководящих должностей
- Блокчеин-тёрки
- «импортозамещение», когда компании боятся блокировки Гитхаб/Гитлаб/Битбакет
- Источники

    [https://www.synopsys.com/blogs/software-security/top-10-open-source-legal-issues-2019/](https://www.synopsys.com/blogs/software-security/top-10-open-source-legal-issues-2019/)

## Дополнительно

инженеры нетфликс:

“Good enough for running in production, but not good enough for Github”

- Маш, спасибо, что дала докладу название в расписании. Это мне помогло оттолкнуться для начала.  Я развил идею доклада.

    Предлагаю сделать название таким: «Open source: почему разработчики делятся».

    Во-первых, мне интересно рассказать о причинах почему в IT ценятся и развиваются проекты с открытым кодом. Хочу провести разницу между «Это проект будет принадлежать всем» и «Я хочу чтобы моим проектом пользовались и другие». 

    Во-вторых, слово «делятся» двусмысленно и я могу пошутить на этот счёт в самом начале. Могу сделать забавное изображение к первому слайду. Что-то вроде картинки где программист делится на две части как клетка.  Как тебе идея?

Этот доклад тоже опенсорсный и доступен для ваших правок

- [ ]  добавил ссылку на репо



