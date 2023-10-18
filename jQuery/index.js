// jQuery nedir?
// jQuery, JavaScript işlevselliğini kullanarak HTML belgeleri üzerinde çalışmak için kullanılan bir JavaScript kütüphanesidir.
// jQuery, HTML belgeleri üzerinde gezinmeyi, HTML olaylarına tepki vermeyi, AJAX uygulamaları oluşturmayı, animasyonları
// oluşturmayı ve jQuery eklentileri kullanarak kullanıcıya sunulan çok sayıda hazır özelliği kullanmayı kolaylaştırır.

$("h1").css("color","red");
// yukarıdaki kod genel kullanımdır seçersin, css'ini seçersin, özelliğini ve 
// değerini seçersin.
console.log($("h1").css("color"));
// buda sana o özelliğin değerini döndürür.

//jQuery ile birlikte gelen hazır fonksiyonlar
// .text() : seçilen elementin textini değiştirir.
// .html() : seçilen elementin htmlini değiştirir.
// .attr() : seçilen elementin attributeunu değiştirir.
// .title() : seçilen elementin titleını değiştirir.
// .css() : seçilen elementin cssini değiştirir.
// .val() : seçilen elementin value değerini değiştirir.
// .click() : seçilen elemente click eventi ekler.
// .addClass() : seçilen elemente class ekler.
// .removeClass() : seçilen elementten class siler.
// .toggleClass() : seçilen elemente class ekler veya siler.
// .append() : seçilen elementin içerisine içerik ekler.
// .prepend() : seçilen elementin içerisine içerik ekler.
// .after() : seçilen elementin ardına içerik ekler.
// .before() : seçilen elementin öncesine içerik ekler.
// .hide() : seçilen elementi gizler.
// .show() : seçilen elementi gösterir.
// .toggle() : seçilen elementi gizler veya gösterir.
// .slideUp() : seçilen elementi yukarı doğru gizler.
// .slideDown() : seçilen elementi aşağı doğru gizler.
// .slideToggle() : seçilen elementi yukarı veya aşağı doğru gizler.
// .fadeIn() : seçilen elementi yavaşça gösterir.
// .fadeOut() : seçilen elementi yavaşça gizler.
// .fadeToggle() : seçilen elementi yavaşça gösterir veya gizler.
// .animate() : seçilen elemente animasyon ekler.
// .stop() : seçilen elementin animasyonunu durdurur.
// .each() : seçilen elementler üzerinde döngü kurar.
// .parent() : seçilen elementin parentını seçer.
// .parents() : seçilen elementin parentlarını seçer.
// .children() : seçilen elementin childrenlarını seçer.
// .find() : seçilen elementin içerisinde arama yapar.
// .siblings() : seçilen elementin kardeşlerini seçer.
// .prev() : seçilen elementin bir önceki kardeşini seçer.
// .next() : seçilen elementin bir sonraki kardeşini seçer.
// .eq() : seçilen elementin belirtilen index numarasındaki kardeşini seçer.

//jquery ile element seçme
// $("h1") : h1 elementini seçer.
// $(".class") : classı class olan elementleri seçer.
// $("#id") : idsi id olan elementleri seçer.
// $("*") : tüm elementleri seçer.
// $("h1,h2") : h1 ve h2 elementlerini seçer.
// $("div p") : div içerisindeki p elementlerini seçer.
// $("div > p") : divin içerisindeki doğrudan p elementlerini seçer.
// $("div + p") : divden sonraki p elementini seçer.

// DOM'da querySelector veya querySelectorAll kullanarak yaptığımız seçimleri jQuery ile de yapabiliriz.
// Örneğin;
// document.querySelector("h1") yerine $("h1") kullanabiliriz.
// document.querySelectorAll("li") yerine $("li") kullanabiliriz.
// document.querySelector("#title") yerine $("#title") kullanabiliriz.
// kısaca jQuery ile seçim yapmak için $ işaretini kullanıyoruz.
// $ işaretinden sonra seçim yapmak istediğimiz elementin ismini yazıyoruz.
// Örneğin;
// $("h1") : h1 elementini seçer.
// $(".class") : classı class olan elementleri seçer.
// $("#id") : idsi id olan elementleri seçer.
// $("*") : tüm elementleri seçer.