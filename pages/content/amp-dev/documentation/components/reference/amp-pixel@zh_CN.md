
---
$category@: ads-analytics
formats:
- websites
- ads
- stories
teaser:
  text: 一种跟踪像素，用于统计网页浏览量。
---

<!--- Reformatted by Reftar! for AMP (go/reftar) on 2019-06-13 -->
<!--- 版权所有 2015 The AMP HTML Authors。保留所有权利。
       
       根据 Apache 许可 2.0 版（以下简称“许可”）授权用户使用；您只有在遵循该许可的情况下才可使用本文件。您可以通过以下网址获得该许可的副本：
       
       http://www.apache.org/licenses/LICENSE-2.0
       
       除非适用法律要求或已达成书面协议，否则按照该许可分发的软件均“按原样”分发，不提供任何类型的担保或条件（无论明示或暗示）。有关该许可规定的具体语言管辖权限和限制，请参阅该许可。
  -->

#<a name="amp-pixel"></a>`amp-pixel`

[TOC]

<table>
  <tr>
    <td class="col-fourty"><strong>说明</strong></td>
    <td>可用作典型的跟踪像素来统计网页浏览量。</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">支持的布局</a></strong></td>
    <td>fixed、nodisplay</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong>示例</strong></td>
    <td>请参阅 AMP By Example 的 <a href="https://ampbyexample.com/components/amp-pixel/">amp-pixel 示例</a>。</td>
  </tr>
</table>

##行为

`amp-pixel` 组件的行为与简单的跟踪像素 `img` 类似。该组件只需要一个网址，但提供的变量可以在发出请求时被网址字符串中的组件替换。如需了解详情，请参阅[替换](#substitutions)部分。

在下面的基本示例中，`amp-pixel` 向给定网址发出一个简单的 GET 请求，之后忽略了结果。

```html
<amp-pixel src="https://foo.com/tracker/foo"
    layout="nodisplay"></amp-pixel>
  ```
  
  [tip type="ll callout('注意：</b><a class="type_note"]
在处理分析请求的引荐来源网址标头中包含的 AMP 网址时，请剔除或忽略 `usqp` 参数。该参数供 Google 用于触发针对 Google AMP 缓存的实验。
[/tip]

##属性

#####src（必需）

一个指向远程端点的简单网址，必须是 `https` 协议。

#####referrerpolicy（可选）

此属性类似于 `<img>` 上的 `referrerpolicy` 属性，但 `no-referrer` 是唯一可接受的值。如果指定了 `referrerpolicy=no-referrer`，则系统会从 HTTP 请求中移除 `referrer` 标头。

```html
<amp-pixel src="https://foo.com/tracker/foo"
    layout="nodisplay"
    referrerpolicy="no-referrer"></amp-pixel>
  ```
  
#####allow-ssr-img（可选）

AMP4ADS 广告素材中使用的此属性表示：作为验证后转换的一部分，img 元素可以直接放置在 amp-pixel 元素内，从而允许 ping 与 AMP runtime 获取/执行并行发送。请注意，这意味着网址中的所有宏都不会展开，因此请仅在它们不在 src 中出现时才使用此属性。

#####常见属性

此元素包含扩展到 AMP 组件的[常见属性](https://www.ampproject.org/docs/reference/common_attributes)。

##替换

`amp-pixel` 支持所有标准网址变量替换。如需了解详情，请参阅[替换指南](../spec/amp-var-substitutions.md)。

在下面的示例中，系统可能会向 `https://foo.com/pixel?0.8390278471201` 等对象发出请求，其中 RANDOM 值是在每次展示时随机生成的。

```html
<amp-pixel src="https://foo.com/pixel?RANDOM"
    layout="nodisplay"></amp-pixel>
  ```
  
##样式设置

不应设置 `amp-pixel` 的样式。

##验证

请参阅 AMP 验证工具规范中的 [amp-pixel 规则](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii)。
