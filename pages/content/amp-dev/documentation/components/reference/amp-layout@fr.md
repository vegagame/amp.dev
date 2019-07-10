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
       Copyright 2016 The AMP HTML Authors. Tous droits réservés.

       Autorisation sous licence Apache, version 2.0 (la "Licence") ;
       n'utilisez ce fichier que dans le cadre de la Licence.
       Vous pouvez obtenir une copie de la Licence à l'adresse suivante :

       http://www.apache.org/licenses/LICENSE-2.0

       Sauf dispositions légales applicables ou accord écrit préalable, le logiciel
       distribué dans le cadre de la Licence est fourni "EN L'ÉTAT", À
       L'EXCLUSION DE TOUTE GARANTIE OU CONDITION DE QUELQUE NATURE QUE CE SOIT, expresse ou implicite.
       Consultez la Licence correspondant à la langue spécifique qui régit les autorisations et limitations applicables.
  -->

#<a name="amp-layout"></a> `amp-layout`

<table>
  <tr>
    <td width="40%"><strong>Description</strong></td>
    <td>Conteneur générique polyvalent qui permet d'appliquer les <a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">mises en page</a> AMP enrichies à n'importe quel élément.</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Mises en page compatibles</a></strong></td>
    <td>container, fill, fixed, fixed-height, flex-item, intrinsic, responsive</td>
  </tr>
</table>

##Aperçu

Le composant `amp-layout` vous permet d'appliquer à n'importe quel élément des mises en page réactives basées sur le format. Ce composant fonctionne de la même manière que l'attribut [layout](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) sur les composants AMP existants, si ce n'est qu'il accepte des balises HTML comme éléments enfants. Les autres mises en page compatibles fonctionnent toutes avec `amp-layout` (fixed-height, fixed, etc.).

**Exemple**

Dans l'exemple ci-dessous, le composant `amp-layout` est utilisé pour créer un conteneur réactif autour d'un cercle tracé avec un code SVG intégré.

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
      Sorry, your browser does not support inline SVG.
    </svg>
  </amp-layout>
```

##Attributs

Cet élément inclut des [attributs communs](https://www.ampproject.org/docs/reference/common_attributes) étendus aux composants AMP.

##Validation

Consultez les [règles relatives à amp-layout](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii) dans les spécifications du validateur AMP.
