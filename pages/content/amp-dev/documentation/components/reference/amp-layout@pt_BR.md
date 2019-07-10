---
$category@: layout
teaser:
  text: >-
    The amp-layout` component allows you to apply aspect-ratio based responsive
    layouts to any element. The `amp-layout` component works similarly to the
    layout.
$title: amp-layout
---
<!--- Reformatted by Reftar! for AMP (go/reftar) on 2019-06-13 -->
<!---
       Copyright 2016 The AMP HTML Authors. Todos os direitos reservados.

       Licenciado sob a Licença Apache, Versão 2.0 (a "Licença"). O uso deste arquivo só é permitido em conformidade com a Licença.
       Uma cópia da Licença está disponível em

       http://www.apache.org/licenses/LICENSE-2.0

       A menos que exigido pela legislação aplicável ou acordado por escrito, o software fornecido de acordo com a Licença é distribuído "NO ESTADO EM QUE SE ENCONTRA", SEM GARANTIAS OU CONDIÇÕES DE QUALQUER TIPO, expressas ou implícitas.
       Consulte a Licença para ver informações sobre permissões e limitações para o idioma específico.
  -->

#<a name="amp-layout"></a> `amp-layout`

<table>
  <tr>
    <td width="40%"><strong>Descrição</strong></td>
    <td>Um elemento de contêiner genérico e multifuncional que permite adicionar os <a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">layouts</a> avançados de AMP a qualquer elemento.</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Layouts compatíveis</a></strong></td>
    <td>container, fill, fixed, fixed-height, flex-item, intrinsic, responsive</td>
  </tr>
</table>

##Visão geral

O componente `amp-layout` permite aplicar a qualquer elemento layouts responsivos com base na proporção. O componente `amp-layout` funciona de maneira semelhante ao atributo [layout](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) em componentes AMP existentes, mas aceita qualquer marcação HTML como filha. Todos os outros layouts compatíveis funcionam com `amp-layout` (por exemplo, fixed-height, fixed etc.).

**Exemplo**

Este exemplo usa o `amp-layout` para criar um contêiner responsivo em torno de um círculo desenhado com SVG in-line.

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
      Sorry, your browser does not support inline SVG.
    </svg>
  </amp-layout>
```

##Atributos

Este elemento inclui [atributos comuns](https://www.ampproject.org/docs/reference/common_attributes) estendidos a componentes de AMP.

##Validação

Consulte as [regras de amp-layout](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii) (link em inglês) nas especificações do validador de AMP.
