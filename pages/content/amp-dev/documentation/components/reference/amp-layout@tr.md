
<!--- Reformatted by Reftar! for AMP (go/reftar) on 2019-06-13 -->
<!---
       Copyright 2016 The AMP HTML Authors. Tüm Hakları Saklıdır.

       Apache Lisansı, Sürüm 2.0 ("Lisans") ile lisanslıdır; bu dosyayı Lisans koşulları dışında kullanamazsınız.
       Lisansın bir kopyasını şu adresten edinebilirsiniz:

       http://www.apache.org/licenses/LICENSE-2.0

       Geçerli yasa tarafından gerekli görülmediği veya yazılı olarak bir sözleşme yapılmadığı sürece, Lisanslı olarak dağıtılan yazılım açıkça veya zımni olarak HİÇBİR GARANTİ VEYA KOŞUL SUNULMADAN "OLDUĞU GİBİ" dağıtılır.
       Lisans kapsamında belirli bir dilde sağlanan izinleri ve uygulanan kısıtlamaları öğrenmek için söz konusu dille ilgili Lisans'a bakın.
  -->

#<a name="amp-layout"></a> `amp-layout`

<table>
  <tr>
    <td width="40%"><strong>Açıklama</strong></td>
    <td>AMP'nin güçlü <a href="https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute">düzenlerini</a> herhangi bir öğeye getiren genel, çok amaçlı bir kapsayıcı öğesi.</td>
  </tr>
  <tr>
    <td class="col-fourty"><strong><a href="https://www.ampproject.org/docs/guides/responsive/control_layout.html">Desteklenen Düzenler</a></strong></td>
    <td>container, fill, fixed, fixed-height, flex-item, intrinsic, responsive</td>
  </tr>
</table>

##Genel Bakış

`amp-layout` bileşeni, herhangi bir öğeye en boy oranına dayanan duyarlı düzenler uygulamanıza olanak tanır. `amp-layout` bileşeni, mevcut AMP bileşenlerinde [düzen](https://www.ampproject.org/docs/guides/responsive/control_layout#the-layout-attribute) özelliğine benzer şekilde çalışır ancak HTML işaretlemelerini alt öğe olarak destekler. Desteklenen diğer düzenlerin tümü `amp-layout` ile çalışır (ör. fixed-height, fixed vb.).

**Örnek**

Bu örnekte, satır içi SVG ile çizilmiş bir dairenin çevresinde duyarlı bir kapsayıcı oluşturmak için `amp-layout` kullanılmaktadır.

```html
<amp-layout layout="responsive" width="1" height="1">
  <svg viewBox="0 0 100 100">
    <circle cx="50%" cy="50%" r="40%" stroke="black" stroke-width="3" />
      Sorry, your browser does not support inline SVG.
    </svg>
  </amp-layout>
```

##Özellikler

Bu öğe, AMP bileşenlerine genişletilmiş [ortak özellikleri](https://www.ampproject.org/docs/reference/common_attributes) içerir.

##Doğrulama

AMP doğrulayıcı spesifikasyonunda [amp-layout kurallarına](https://github.com/ampproject/amphtml/blob/master/validator/validator-main.protoascii) bakın.
,false,false
