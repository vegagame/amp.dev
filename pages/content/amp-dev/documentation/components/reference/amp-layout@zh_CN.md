
<!--- Reformatted by Reftar! for AMP (go/reftar) on 2019-06-13 -->
<!---
       版权所有 2016 The AMP HTML Authors。保留所有权利。

       根据 Apache 许可 2.0 版（以下简称“许可”）授权用户使用；您只有在遵循该许可的情况下才可使用本文件。您可以通过以下网址获得该许可的副本：

       http://www.apache.org/licenses/LICENSE-2.0

       除非适用法律要求或已达成书面协议，否则按照该许可分发的软件均“按原样”分发，不提供任何类型的担保或条件（无论明示或暗示）。有关该许可规定的具体语言管辖权限和限制，请参阅该许可。
  -->

#<a name="amp-layout"></a>`amp-layout`

<table>
  <tr>
    <td width="40%"><strong>说明</strong></td>
    <td>一个常规的多用途容器元素，可将 AMP 强大的<a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">布局</a>功能运用到任何元素上。</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">支持的布局</a></strong></td>
    <td>container、fill、fixed、fixed-height、flex-item、intrinsic、responsive</td>
  </tr>
</table>

##概述

借助 `amp-layout` 组件，您可以将基于宽高比的自适应布局应用于任何元素。`amp-layout` 组件与现有 AMP 组件的 [layout](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) 属性的工作原理相似，但前者支持用作子级的所有 HTML 标记。其他支持的布局均使用 `amp-layout`（例如 fixed-height、fixed 等）。

**示例**

此示例使用 `amp-layout` 在用内嵌 SVG 绘制的圆周围创建了一个自适应容器。

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
      抱歉，您的浏览器不支持内嵌 SVG。
    </svg>
  </amp-layout>
```

##属性

此元素包含扩展到 AMP 组件的[常见属性](https://www.ampproject.org/docs/reference/common_attributes)。

##验证

请参阅 AMP 验证工具规范中的 [amp-layout 规则](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii)。
