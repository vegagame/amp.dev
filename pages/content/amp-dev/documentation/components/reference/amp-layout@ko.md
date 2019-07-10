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
       Copyright 2016 The AMP HTML Authors. All Rights Reserved.

       Apache 라이선스 버전 2.0(이하 '라이선스')에 따라 사용이 허가되었으므로, 라이선스를 준수하지 않는 경우 이 파일을 사용할 수 없습니다.
       라이선스의 사본은 다음에서 가져올 수 있습니다.

       http://www.apache.org/licenses/LICENSE-2.0

       해당 법률에 따라 요구되거나 서면으로 동의한 경우를 제외하고, 본 라이선스에 따라 배포된 소프트웨어는 어떠한 종류의 명시적 또는 묵시적 보증 또는 조건도 없이 있는 그대로 배포됩니다.
       라이선스의 허가 및 제한사항에 관한 구체적인 문구는 라이선스를 참조하시기 바랍니다.
  -->

#<a name="amp-layout"></a> `amp-layout`

<table>
  <tr>
    <td width="40%"><strong>설명</strong></td>
    <td>AMP의 강력한 <a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">레이아웃</a>을 모든 요소에 적용하는 일반적인 다목적 컨테이너 요소입니다.</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">지원되는 레이아웃</a></strong></td>
    <td>container, fill, fixed, fixed-height, flex-item, intrinsic, responsive</td>
  </tr>
</table>

##개요

`amp-layout` 구성요소를 사용하면 가로세로 비율 기반 반응형 레이아웃을 모든 요소에 적용할 수 있습니다. `amp-layout` 구성요소는 기존 AMP 구성요소의 [layout](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) 속성과 비슷하게 작동하지만 HTML 마크업을 하위 요소로 지원합니다. 기타 지원되는 모든 레이아웃은 모두 `amp-layout`과 함께 작동합니다(예: fixed-height, fixed 등).

**예**

이 예에서는 `amp-layout`을 사용하여 인라인 SVG로 그린 원 주변에 반응형 컨테이너를 만듭니다.

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
      Sorry, your browser does not support inline SVG.
    </svg>
  </amp-layout>
```

##속성

이 요소에는 AMP 구성요소로 확장된 [공통 속성](https://www.ampproject.org/docs/reference/common_attributes)이 포함됩니다.

##유효성 검사

AMP 유효성 검사기 사양의 [amp-layout 규칙](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii)을 참조하세요.
