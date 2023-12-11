# jQuery

## What is jQuery?

- John Resig abi demiş ki bu JavaScript çok uzun ve karışık ben bunu kısaltırım demiş ve jQuery doğmuş.

## How to Incorporate jQuery into Websites

- jQuery CDN ile projelere eklenebileceği gibi yüklenerekte eklenebilir ancak her iki koşuldada javascrip src'sinden önce jQuery kaynağının eklenmesi önemlidir.

## Selecting Elements with jQuery

- Bir elementi seçmek için kullandığımız `document.querySelector` kodu jQuery'de `$` işaretine dönüşüyor.

Bir kaç örnek verelim:
```javascript
$("h1").css("color","red");
// yukarıdaki kod genel kullanımdır seçersin, css'ini seçersin, özelliğini ve 
// değerini seçersin.
console.log($("h1").css("color"));
// buda sana o özelliğin değerini döndürür.
```
```javascript
$("h1").addClass("big-title"); //h1 öğesine big-title classını ekledik
//aynı şekilde add yerine removeClass kullanarak kaldırabilirsinde.
//eğer birden fazla sınıf eklemek istersen boşluk bırakarak aynı tırnak içinde
//ekleyebilirsin
$("h1").addClass("big-title margin-50");
// ayrıca bunu sorgulayabilirsinde
$("h1").hasClass("margin-50");
```

## Manipulating text with jQuery
```javascript
$("h1").text("Bye"); //bu şekilde ancak diyelim ki bunu button'a uyguladın
// gider bütün buttonları değiştirir. ikinci yol ise:
$("h1").html("<em>Hey</em>"); // bu ikisinin farkı şudur .html ile değiştirirsen
// html etiketlerinidde dikkate alır .text kullanırsan pure text'tir.
```

## Manipulating Attributes with jQuery

```javascript
console.log($("img").attr("src")); // bu kod img öğesinin src değerini döndürür.
// attribute değerini değiştirmek için aşağıdaki kod:
$("a").attr("href","https://www.yahoo.com"); // a etiketinin href özeelliğini yahoo
// ile değiştirmeye yarar.
```

## Adding Event Listeners with jQuery
```javascript
// h1 elementine tıklandığında rengini mor yapan kod:
$("h1").click(function() {
	$("h1").css("color","purple");
}); //event listinerı direk çat diye ekleyebiliyoruz.
//--------------------------------------------------------------
//bunu tuş algılama olarakta kullanabilirsin.
$("input").keydown(function(event) {
console.log(event.key);
}); // eğer ki bunu input html öğesi yerine PlayDrum projesindeki gibi tüm sayfaya
// eklemek istiyorsan html öğeni body veya document yapabilirsin.
$("h1").on("mouseover", funciton(){
	$("h1").css("color","purple")}); //mouse h1'in üstüne gelince rengi mor olur.
```

## Adding and Removing Elements with jQuery

- jQuery kullanarak html öğeleri eklemek mümkündür. Temel çalışma mantığı bir öğe seçilir ve o öğenin neresine ne ekleneceği tarzında çalışır:
1. before: `$(”h1”).before(”<button>New</button>”);` h1 öğesinden önce button ekler.
2. after: h1 öğesinden sonra button ekler.
3. prepend: yine önce ekler ancak h1 etiketinin içinde olacak şekilde ekler.
4. append: sonra ekler ancak h1 etikenin içinde olacak şekilde ekler
- Prepend ve append’i çok anlamadım bakacağım. Şimdi anladım bakmaya gerek yok tam olarak yazdığım şekilde olmuş 😀
- Öğe kaldırmak için ise $(”h1”).remove(); kullanılır yani remove() fonksyionu ile halledilir.

## Website Animations with jQuery
- hide(); → Öğeyi gizler.
- .show(); → Öğeyi gösterir.
- .toggle(); → Gizliyse gösterir, gösteriliyse gizler.
- .fadeIn(), .fadeOut(), .fadeToggle(); → Bunlar ise öğeyi gizlemek yerine opaklığını düşürür artırırlar ve bu sayede sayfanın düzeni bozulmaz.
- slideUp(), slideDown(), slideToggle(); → Daha tatlı bir animasyon ile açıp kapatma efektir gibi uygular.
- .animate({}); → bunun içerisine css yazılır ve özel cssleri uygular. Yalnızca sayısal değerlere sahip CSS’leri kullanabilirsin.
- Tüm bunları zincirleyerek kullanabilirsin ve sırasına göre olurlar.

## Özet
- Query ile birlikte gelen hazır fonksiyonlar
- .text() : seçilen elementin textini değiştirir.
- .html() : seçilen elementin htmlini değiştirir.
- .attr() : seçilen elementin attributeunu değiştirir.
- .title() : seçilen elementin titleını değiştirir.
- .css() : seçilen elementin cssini değiştirir.
- .val() : seçilen elementin value değerini değiştirir.
- .click() : seçilen elemente click eventi ekler.
- .addClass() : seçilen elemente class ekler.
- .removeClass() : seçilen elementten class siler.
- .toggleClass() : seçilen elemente class ekler veya siler.
- .append() : seçilen elementin içerisine içerik ekler.
- .prepend() : seçilen elementin içerisine içerik ekler.
- .after() : seçilen elementin ardına içerik ekler.
- .before() : seçilen elementin öncesine içerik ekler.
- .hide() : seçilen elementi gizler.
- .show() : seçilen elementi gösterir.
- .toggle() : seçilen elementi gizler veya gösterir.
- .slideUp() : seçilen elementi yukarı doğru gizler.
- .slideDown() : seçilen elementi aşağı doğru gizler.
- .slideToggle() : seçilen elementi yukarı veya aşağı doğru gizler.
- .fadeIn() : seçilen elementi yavaşça gösterir.
- .fadeOut() : seçilen elementi yavaşça gizler.
- .fadeToggle() : seçilen elementi yavaşça gösterir veya gizler.
- .animate() : seçilen elemente animasyon ekler.
- .stop() : seçilen elementin animasyonunu durdurur.
- .each() : seçilen elementler üzerinde döngü kurar.
- .parent() : seçilen elementin parentını seçer.
- .parents() : seçilen elementin parentlarını seçer.
- .children() : seçilen elementin childrenlarını seçer.
- .find() : seçilen elementin içerisinde arama yapar.
- .siblings() : seçilen elementin kardeşlerini seçer.
- .prev() : seçilen elementin bir önceki kardeşini seçer.
- .next() : seçilen elementin bir sonraki kardeşini seçer.
- .eq() : seçilen elementin belirtilen index numarasındaki kardeşini seçer.

- query ile element seçme
- $("h1") : h1 elementini seçer.
- $(".class") : classı class olan elementleri seçer.
- $("#id") : idsi id olan elementleri seçer.
- $("*") : tüm elementleri seçer.
- $("h1,h2") : h1 ve h2 elementlerini seçer.
- $("div p") : div içerisindeki p elementlerini seçer.
- $("div > p") : divin içerisindeki doğrudan p elementlerini seçer.
- $("div + p") : divden sonraki p elementini seçer.

- DOM'da querySelector veya querySelectorAll kullanarak yaptığımız seçimleri jQuery ile de yapabiliriz.
- Örneğin;
- document.querySelector("h1") yerine $("h1") kullanabiliriz.
- document.querySelectorAll("li") yerine $("li") kullanabiliriz.
- document.querySelector("#title") yerine $("#title") kullanabiliriz.
- kısaca jQuery ile seçim yapmak için $ işaretini kullanıyoruz.
- $ işaretinden sonra seçim yapmak istediğimiz elementin ismini yazıyoruz.
- Örneğin;
- $("h1") : h1 elementini seçer.
- $(".class") : classı class olan elementleri seçer.
- $("#id") : idsi id olan elementleri seçer.
- $("*") : tüm elementleri seçer.