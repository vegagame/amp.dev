---
$category@: layout
teaser:
  text: >-
    The amp-layout` component allows you to apply aspect-ratio based responsive
    layouts to any element. The `amp-layout` component works similarly to the
    layout.
$title: amp-layout
---
<!--© Авторы HTML с технологией AMP, 2016. Все права защищены.

       Лицензия Apache версии 2.0 (далее "Лицензия");
     этот файл можно использовать только в соответствии с Лицензией.
     Чтобы приобрести копию Лицензии, перейдите по ссылке:

     http://www.apache.org/licenses/LICENSE-2.0

     Если иное не требуется действующим законодательством или не оговорено в письменном виде, программное обеспечение, распространяемое по Лицензии, распространяется "КАК ЕСТЬ", БЕЗ КАКИХ-ЛИБО ГАРАНТИЙ И УСЛОВИЙ, явных или подразумеваемых.
     Определения используемых в Лицензии понятий, с помощью которых оговариваются разрешения и ограничения, приводятся в тексте Лицензии.
-->

#<a name="amp-layout"></a> `amp-layout`

<table>
  <tr>
    <td width="40%"><strong>Описание</strong></td>
    <td>Элемент универсального общего контейнера, который позволяет использовать эффективные <a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">макеты</a> AMP в любом элементе.</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Поддерживаемые макеты</a></strong></td>
    <td>container, fill, fixed, fixed-height, flex-item, intrinsic, responsive</td>
  </tr>
</table>

##Обзор

Компонент `amp-layout` позволяет применять адаптивные макеты на основе соотношения сторон к любому элементу. Этот компонент похож по принципу действия на атрибут [layout](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) в имеющихся компонентах AMP, но в качестве дочерних элементов поддерживает любую разметку HTML. С компонентом `amp-layout` совместимы все поддерживаемые макеты, например fixed-height, fixed и т. д.

**Пример**

В приведенном ниже примере компонент `amp-layout` используется для создания адаптивного контейнера вокруг круга, нарисованного с помощью встроенного кода SVG.

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
      Ваш браузер не поддерживает встроенного кода SVG.
    </svg>
  </amp-layout>
```

##Атрибуты

Этот элемент содержит [распространенные атрибуты](https://www.ampproject.org/docs/reference/common_attributes), расширенные до компонентов AMP.

##Проверка

О правилах для amp-layout читайте в [спецификации валидатора AMP](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii).
