
---
$category@: ads-analytics
formats:
- websites
- ads
- stories
teaser:
  text: Um pixel de rastreamento usado para contar visualizações de páginas.
---

<!--- Reformatted by Reftar! for AMP (go/reftar) on 2019-06-13 -->
<!---
       Copyright 2015 The AMP HTML Authors. Todos os direitos reservados.
       
       Licenciado sob a Licença Apache, Versão 2.0 (a "Licença"). O uso deste arquivo só é permitido em conformidade com a Licença.
       Uma cópia da Licença está disponível em
       
       http://www.apache.org/licenses/LICENSE-2.0
       
       A menos que exigido pela legislação aplicável ou acordado por escrito, o software fornecido de acordo com a Licença é distribuído "NO ESTADO EM QUE SE ENCONTRA", SEM GARANTIAS OU CONDIÇÕES DE QUALQUER TIPO, expressas ou implícitas.
       Consulte a Licença para ver informações sobre permissões e limitações para o idioma específico.
  -->

#<a name="amp-pixel"></a> `amp-pixel`

[TOC]

<table>
  <tr>
    <td class="col-fourty"><strong>Descrição</strong></td>
    <td>Pode ser usado como um pixel de rastreamento típico para contar visualizações de páginas.</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Layouts compatíveis</a></strong></td>
    <td>fixed, nodisplay</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong>Exemplos</strong></td>
    <td>Veja um exemplo de <a href="https://ampbyexample.com/components/amp-pixel/">amp-pixel</a> no site AMP By Example.</td>
  </tr>
</table>

##Comportamento

O componente `amp-pixel` se comporta como um pixel de rastreamento simples `img`. Ele usa um único URL, mas fornece variáveis que podem ser substituídas pelo componente na string de URL ao fazer a solicitação. Consulte a [seção de substituições](#substitutions) para ver mais detalhes.

Neste exemplo básico, o `amp-pixel` emite uma solicitação GET simples para o URL fornecido e ignora o resultado.

```html
<amp-pixel src="https://foo.com/tracker/foo"
    layout="nodisplay"></amp-pixel>
  ```
  
  [tip type="note"]
ao processar URLs de AMP no cabeçalho do referenciador das solicitações de análise, remova ou ignore o parâmetro `usqp`. Esse parâmetro é usado pelo Google para acionar experimentos para o Google AMP Cache.
[/tip]

##Atributos

#####src (obrigatório)

Um URL simples para um endpoint remoto que precisa ser o protocolo `https`.

#####referrerpolicy (opcional)

Este atributo é semelhante ao atributo `referrerpolicy` em `<img>`. No entanto, `no-referrer` é o único valor aceito. Se `referrerpolicy=no-referrer` for especificado, o cabeçalho de `referrer` será removido da solicitação HTTP.

```html
<amp-pixel src="https://foo.com/tracker/foo"
    layout="nodisplay"
    referrerpolicy="no-referrer"></amp-pixel>
  ```
  
#####allow-ssr-img (opcional)

Este atributo usado em anúncios AMP4ADS indica que, como parte da transformação de pós-validação, um elemento img pode ser colocado diretamente no elemento amp-pixel, permitindo que o ping seja enviado em paralelo com a busca/execução do ambiente de tempo de execução de AMP.
Isso significa que as macros no URL NÃO serão expandidas, então use-as somente se elas não estiverem presentes no src.

#####common attributes

Este elemento inclui [atributos comuns](https://www.ampproject.org/docs/reference/common_attributes) estendidos a componentes de AMP.

##Substituições

O `amp-pixel` permite todas as substituições de variáveis de URL padrão.
Consulte o [Guia de substituições](../spec/amp-var-substitutions.md) (em inglês) para ver mais informações.

No exemplo a seguir, uma solicitação pode ser feita para algo como `https://foo.com/pixel?0.8390278471201`, em que o valor ALEATÓRIO é gerado de forma aleatória em cada impressão.

```html
<amp-pixel src="https://foo.com/pixel?RANDOM"
    layout="nodisplay"></amp-pixel>
  ```
  
##Estilo

`amp-pixel` não deve ser estilizado.

##Validação

Veja as [regras do amp-pixel](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii) (link em inglês) nas especificações do validador de AMP.
