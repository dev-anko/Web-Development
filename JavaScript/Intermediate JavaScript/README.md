# Intermediate JavaScript
**Sayın okur unutma ki bunlar benim kişisel notlarım, anlatım tarzı biraz enteresan gelebilir :)**
**Buradaki notların kullanımlarını veyahut ilgili projeleri index.js dosyası içerisinde bulabilirsin. Her biri yorum satırı şeklinde olucak ancak hangi başlık ile ilgili olduklarınıda belirteceğim. Aç bir derleyici güle güle kullan. Yalnızca projeler yorum satırı şeklinde değil normal şekilde olucak.**

## Changing Casing in Text

- `toUpperCase()` fonksiyonu tüm karakterleri büyük harfe dönüştürür.
- `toLowerCase()` fonksiyonu tüm karakterleri küçük harfe dönüştürür.

---

## Basic Arithmetic and the Modulo Operator in Javascript

- Modulo dediği şey mod almak demek kalanı veriyor işte. Bu ne agresiflik birader?

---

## Increment and Decrement Expressions

- Hani şu bir ekleme ve çıkarma kısa yolları var ya, aha bak şunlar ya:
- `x++`, `x—-`, `x+=`, `x-=`;
- Burada şöyle bir durum var dikkat edilmesi gereken:
`var x = 3;`
`var y = x++;`
`y += 1;`
insan der ki x=3 evet sonra x'in bir fazlasını y'ye atamış sonra y'ye bir eklemiş sonuç 5 dönmeli. Mantıklı geliyor değil mi? Ama 4 döndürüyor. Çünkü bu javascriptte x++ diyip bir değişkene atadığın zaman o x++ çalışmıyor. Neden bilmem hiç araştırmadım çok merak ediyorsan git araştır kardeşim!

---

## Functions (burayı chatgpt'den aldım şimdilik sonra belki düzeltiriz ama gerek yok gibi ya)

- Bir fonksiyon, belirli bir işlevi yerine getiren bir kod bloğunu temsil eder. Bir fonksiyon tanımlandığında, bu işlev kodu belirli bir isme ve bir dizi parametreye sahip olur.
- Örnek bir fonksiyon tanımı:

```javascript
function sayHello() 
    {
        console.log("Merhaba, Dünya!");
    }
```

---

### Fonksiyon Çağırma:
- Bir fonksiyonu çalıştırmak veya çağırmak için fonksiyon adını ve parantezleri kullanmanız gerekir:

```javascript
sayHello(); // "Merhaba, Dünya!" yazdırır. Tabii, yukarıdaki fonksiyon ile kullanman lazım.
```
---

### Parametreler:
- Fonksiyonlara, işlevlerini yerine getirirken gereken verileri iletmek için parametreler ekleyebilirsiniz. Parametreler, fonksiyonun parantez içindeki değişkenlerdir.
- Örnek bir fonksiyon parametreleri:

```javascript
function greet(name) {
    console.log("Merhaba, " + name + "!");
}
```

- Fonksiyonu çağırırken parametre değerleri sağlanır:

```javascript
greet("Ahmet"); // "Merhaba, Ahmet!" yazdırır
```
---

### Dönüş Değeri:
- Bir fonksiyon, işlevini tamamladığında bir sonuç dönebilir. return ifadesi ile dönüş değeri belirtilir. Dönüş değeri, fonksiyonu çağıran yere aktarılır.

- Örnek bir fonksiyon dönüş değeri:

```javascript
function toplam(a, b) {
    return a + b;
}
```

- Dönüş değeri, bir değişkene atanabilir veya doğrudan kullanılabilir:

```javascript
var sonuc = toplam(5, 3); // sonuc = 8
```

---

### Anonim Fonksiyonlar:

- JavaScript'te isimsiz veya anonim fonksiyonlar da tanımlayabilirsiniz. Bu tür fonksiyonlar, genellikle başka bir fonksiyon içinde veya bir değişken olarak kullanılır.

- Örnek anonim fonksiyon:

```javascript
var toplama = function(a, b) {
    return a + b;
};
```

---

### Fonksiyon İfadeleri:
- JavaScript, fonksiyonları değer olarak kullanmanıza izin verir. Bir fonksiyonu bir değişkene atayabilir, başka bir fonksiyona argüman olarak geçirebilir veya dizi içinde saklayabilirsiniz.

- Örnek bir fonksiyon ifadesi:

```javascript
var selamlar = function(name) {
    console.log("Merhaba, " + name + "!");
};
```

- Bu, JavaScript'teki temel fonksiyon kavramlarını kapsar. Fonksiyonlar, kodunuzu daha organize hale getirmenize, tekrar kullanabilirliği artırmanıza ve karmaşık işlemleri kolayca yönetmenize yardımcı olur.