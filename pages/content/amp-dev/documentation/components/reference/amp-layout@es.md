
<!--- Reformatted by Reftar! for AMP (go/reftar) on 2019-06-13 -->
<!---
       Copyright 2016 The AMP HTML Authors. Todos los derechos reservados.

       Con licencia Apache, versión 2.0 (en adelante, la "Licencia").
       Este archivo solo se puede utilizar según lo estipulado en la Licencia.
       Se puede obtener una copia de la Licencia en la siguiente página:

       http://www.apache.org/licenses/LICENSE-2.0

       A menos que lo exija la legislación aplicable o se acuerde por escrito, el software
       distribuido bajo la Licencia se proporciona "TAL CUAL", SIN NINGÚN
       TIPO DE GARANTÍA NI DE CONDICIÓN, ni expresa ni implícita.
       En la Licencia se puede consultar la información relativa a las limitaciones
       y a los permisos aplicables a cada idioma.
  -->

#<a name="amp-layout"></a> `amp-layout`

<table>
  <tr>
    <td width="40%"><strong>Descripción</strong></td>
    <td>Elemento contenedor genérico y multipropósito que aporta <a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">diseños</a> de AMP de gran utilidad</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Diseños admitidos</a></strong></td>
    <td>container, fill, fixed, fixed-height, flex-item, intrinsic y responsive</td>
  </tr>
</table>

##Descripción general

El componente `amp-layout` permite aplicar a cualquier elemento diseños adaptables basados en la relación de aspecto. Funciona de forma similar al atributo [layout](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) en los componentes AMP disponibles, pero admite cualquier etiqueta HTML como elemento secundario. Todos los demás diseños admitidos funcionan con `amp-layout` (por ejemplo, fixed-height, fixed, etc.).

**Ejemplo**

En este ejemplo se utiliza `amp-layout` para crear un contenedor adaptable alrededor de un círculo dibujado mediante SVG insertado.

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
      Lo sentimos, pero tu navegador no es compatible con SVG insertado.
    </svg>
  </amp-layout>
```

##Atributos

Este elemento incluye [atributos comunes](https://www.ampproject.org/docs/reference/common_attributes) que se aplican a los componentes de AMP.

##Validación

Consulta las [reglas de amp-layout](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii) en la especificación de la herramienta de validación de AMP.
