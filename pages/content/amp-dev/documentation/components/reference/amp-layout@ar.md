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
حقوق الطبع والنشر 2016 لصالح "مؤلفو شفرة HTML لصفحات AMP". جميع الحقوق محفوظة.

تم الترخيص بموجب ترخيص Apache، الإصدار 2.0 (المشار إليه لاحقًا باسم "الترخيص")؛ ولا يحق لك استخدام هذا الملف إلا بما يتوافق مع الترخيص.
ويمكنك الحصول على نسخة من الترخيص على الصفحة

http://www.apache.org/licenses/LICENSE-2.0

ما لم يكن مطلوبًا بموجب القانون الساري أو تمت الموافقة عليه كتابةً، يتم توزيع البرنامج الذي يتم توزيعه بموجب الترخيص "كما هو"، وبدون أية ضمانات أو شروط من أي نوع، سواء كانت صريحة أو ضمنية.
راجِع الترخيص للاطّلاع على اللغة المحددة التي تحكم الأذونات والقيود بموجب الترخيص.
-->

#<a name="amp-layout"></a> `amp-layout`

<table>
  <tr>
    <td width="40%"><strong>الوصف</strong></td>
    <td>عنصر حاوية عام متعدد الأغراض يطبّق <a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">تنسيقات</a> AMP القوية على أي عنصر.</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">التنسيقات المعتمدة</a></strong></td>
    <td>container وfill وfixed وfixed-height وflex-item وintrinsic وresponsive</td>
  </tr>
</table>

##نظرة عامة

يتيح لك المكّوِن `amp-layout` تطبيق تصميمات استجابة تستند إلى نسبة العرض إلى الارتفاع على أي عنصر. يعمل المكوِّن `amp-layout` بشكل مشابه للسمة [layout](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) على مكونات AMP الموجودة لكنه يتيح عمل ترميز HTML كعناصر ثانوية. وتعمل جميع التنسيقات الأخرى مع `amp-layout` (مثل fixed-height وfixed وغيرها).

**مثال**

يستخدم المثال `amp-layout` لإنشاء حاوية استجابة حول دائرة مرسومة بالتنسيق SVG المضمّن.

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
    Sorry, your browser does not support inline SVG.
  </svg>
</amp-layout>
```

##السمات

يتضمن هذا العنصر [السمات المشتركة](https://www.ampproject.org/docs/reference/common_attributes) التي تشمل مكونات AMP.

##التحقق

اطِّلع على [قواعد amp-layout](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii) في مواصفات مدقق AMP.
