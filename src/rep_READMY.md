<!-- ==========================СЛАЙДЕРИ========================== -->

Приклад HTML структури слайдера:

<div class="your-class">
  <div>your content</div>
  <div>your content</div>
  <div>your content</div>
</div>

У нас в макеті є 3 типи слайдерів. На div, в якому буде знаходитись контент
слайдера замість .your-class задаємо наступні класи:

.slick-header - для слайдера в хедері

.slick-small - для слайдерів з малими квадратними картинками

.slick-details - для слайдерів в секціях Details of our restaurant та Details of
our hotel

Інспектуємо слайдер і стилізуємо його через класи, які бачимо на елементах
слайдера (.slick-track, мені здеється, краще не чіпати).

Детальніше: https://github.com/NataliiaValko/demo_js/blob/main/src/js/slick.js

<!-- ==========================МОДАЛКИ========================== -->

// 1. На кнопку відкриття модалки додати клас js-open-modal, атрибут
data-modal="1" (1 це номер модалки, значення довільне).

// 2. В кінці боді створити один спільний бекдроп з класом js-backdrop-modal, в
який вкласти усі модалки

// 3. На кнопки закриття модалок повішати клас js-modal-close

// 4. На саму модалку задати клас modal, // атрибут data-modal="1" (де 1 це
довільне значення, але має співпадати з таким самим атрибутом на кнопці, яка
відкривала цю модалку)

Детальніше: https://github.com/NataliiaValko/demo_js/blob/main/src/js/modal.js

<!-- ==========================ЗАДАННЯ RGBA КОЛЬОРУ ЧЕРЕЗ ЗМІННІ========================== -->

Для цього використовуємо спеціальні змінні з припискою -rgb

// Приклади використання rgb-змінних для отримання rgba кольорів з різною
прозорістю: // rgba(var(--name-rgb), 0), rgba(var(--name-rgb), 0.35),
rgba(var(--name-rgb), 0.8),

<!-- ==========================РЕСАЙЗ/ЗМІНА ФОРМАТУ КАРТИНОК З ВИКОРИСТАННЯМ ФУНКЦІОНАЛУ БІБЛІОТЕКИ SHARP ========================== -->

Припустимо, нам потрібно налаштувати відображення зображення шириною 587px при
min-width:1440px для звичайних дисплеїв та ретини. Для цього нам потрібно було б
взяти 2 картинки шириною 587px та 1174px відповідно і використовувати наступний
запис source в елементі picture:

<source
          srcset="
            ./images/Phoenix.png  1x,
            ./images/Phoenix@2x.png  2x
          "
          media="(min-width:1440px)"
          sizes=""
          type="image/png"
        />

Проте, ми можемо досягнути того ж ефекту, використовуючи лише одне вихідне
зображення з високою роздільною здатністю. Для цього використовуємо URL
оригінальної картинки, дописуємо в кінці "?" та "width=X", де X - необхідна нам
кількість у пікселях в ширину, яку ми хочемо отримати для вихідної картинки.
Отримаємо наступний запис:

<source
          srcset="
            ./images/Phoenix.png?width=587  1x,
            ./images/Phoenix.png?width=1174  2x
          "
          media="(min-width:1440px)"
          sizes=""
          type="image/png"
        />
Цей функціонал надає нам бібліотека Sharp, яка знаходить в node_modules. 
До речі, аналогічним чином воно працює і для src  в елемені img.
Припустимо, що ми хочемо отримати такі ж зображення, але в форматі webp.
Використвоуэмо наступний запис (не забуваємо змінити значення type з "image/png"
на "image/webp"):

 <source
          srcset="
            ./images/Phoenix.png?as=webp&width=587  1x,
            ./images/Phoenix.png?as=webp&width=1174  2x
          "
          media="(min-width:1440px)"
          sizes=""
          type="image/webp"
        />

Якщо ми хочемо використати цей підхід лише для переводу зображень у формат webp,
то запис матиме наступний вигляд:

<source
          srcset="
            ./images/Phoenix.png?as=webp  1x,
            ./images/Phoenix@2x.png?as=webp  2x
          "
          media="(min-width:1440px)"
          sizes=""
          type="image/webp"
        />

<!-- ==========================КАСТОМНИЙ СЕЛЕКТ========================== -->

Додати клас .js-select

<div class="flex-box js-inputmask">
    <select name="testselect" class="js-select">
      <option value="1">option1</option>
      <option value="11">option11</option>
      <option value="111">option111</option>
      <option value="1111">option1111</option>
      <option value="test">test</option>
      <option value="test1">test1</option>
      <option value="car">car</option>
      <option value="car1">car1</option>
    </select>
    <select name="testselect" class="js-select">
      <option value="1">option1</option>
      <option value="11">option11</option>
      <option value="111">option111</option>
      <option value="1111">option1111</option>
    </select>
    <select name="testselect" class="js-select"></select>
      <option value="1">option1</option>
      <option value="11">option11</option>
      <option value="111">option111</option>
      <option value="1111">option1111</option>
    </select>
  </div>

<!-- ==========================МАСКА ДЛЯ ІНПУТА========================== -->

Обов'язково використовувати інпут з type="text", інші бібліотека не підтримує!
Додаємо клас .js-inputmask

<input type="text" class="tel js-inputmask" name="tel" />
