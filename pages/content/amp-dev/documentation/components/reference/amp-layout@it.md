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
       Copyright 2016 The AMP HTML Authors. Tutti i diritti riservati.

       Rilasciato ai sensi della Licenza Apache, versione 2.0 (la "Licenza");
     è possibile utilizzare questo file esclusivamente in conformità con la Licenza.
     Una copia della Licenza è disponibile all'indirizzo

     http://www.apache.org/licenses/LICENSE-2.0

     Se non diversamente imposto dalla legge vigente o concordato per iscritto,
     il software rilasciato ai sensi della Licenza viene distribuito "COSÌ
     COM'È", SENZA GARANZIE O CONDIZIONI DI ALCUN TIPO, esplicite o implicite.
     Leggi la Licenza per conoscere le autorizzazioni e le limitazioni in vigore
     specifiche della lingua previste dalla Licenza.
-->

#<a name="amp-layout"></a> `amp-layout`

<table>
  <tr>
    <td width="40%"><strong>Descrizione</strong></td>
    <td>Un elemento contenitore generico e multiuso che rende disponibili i potenti <a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">layout</a> di AMP per qualsiasi elemento.</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Layout supportati</a></strong></td>
    <td>container, fill, fixed, fixed-height, flex-item, intrinsic, responsive</td>
  </tr>
</table>

##Panoramica

Il componente `amp-layout` permette di applicare layout adattabili basati sulle proporzioni a qualsiasi elemento. Il componente `amp-layout` funziona in modo simile all'attributo [layout](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) sui componenti AMP esistenti, ma supporta qualsiasi markup HTML come elemento secondario. Tutti gli altri layout supportati funzionano con `amp-layout`, ad esempio fixed-height, fixed ecc.

**Esempio**

In questo esempio viene utilizzato `amp-layout` per creare un contenitore adattabile attorno a un cerchio disegnato con il tag svg incorporato.

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
      Sorry, your browser does not support inline SVG.
    </svg>
  </amp-layout>
```

##Attributi

Questo elemento include [attributi comuni](https://www.ampproject.org/docs/reference/common_attributes) estesi ai componenti AMP.

##Convalida

Consulta le [regole amp-layout](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii) nella specifica dello Strumento di convalida AMP.
