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

## Random Number Generation in JavaScript

- JavaScript dilinde random sayı oluşturmak için Math.random() methodunu kullanıyoruz. Ancak burada ufak bir sorunumuz var. Bu Math.random() methodu yalnızca 0 ile 0.9 arasında sayı üretiyor. Örneğin:
```javascript
console.log(Math.random()); // 0.8126817835974416 16 ondalıklı basamak.
```

- Bu durumdan yapmamız gereken şey şu, 0'dan sonraki sayılara odaklanmak. Örneğin bizim üreteceğimiz maksimum sayının 100 olmasını istiyoruz ve Math.random() methodu maksimum 0.999... sayısını üretebiliyor. Eğer biz bu sayıyı 100 ile çarparsak üretilen maksimum sayı 99,99999... olacaktır. Mantığı anladın değil mi? Ama hala bir sorunumuz var. Biz tam sayı üretmek istiyoruz. Bu durumda bize virgülden sonraki kısmı silen bir method lazım. Bunun için Math.floor() fonksionunu kullanacağız. Şimdi üretebileceği sayı maksimum 100 (100 dahil değil) olan bir random sayı üreticisi yazalım:

```javascript
let a = Math.random();
console.log(Math.floor(a*100)) // 0-100 arası sayı döndürecektir.
```
- Burada ufak bir trick vereceğim, maksimum sayınızın kaç olmasını istiyorsanız random sayınızı onunla çarpın. Örneğin max 256 (dahil değil) istiyorsanız 256 ile çarpın.

---

## Control Statements: Using If-Else Conditionals

- Koşullu ifadeler farklı koşullara dayalı karar vermek için kullanılır. Örneğin x varsa a olayı gerçekleşsin, y varsa b olayı gerçekleşsin, z varsa c olayı gerçekleşsin, hiç biri yoksa d olayı gerçekleşsin gibi ifadelerdir.

JavaScript ve diğer programlama dillerinde if anahtar kelimesi, bir koşulun doğru olup olmadığını kontrol etmek ve blok kodunu yürütmek için kullanılır. Bir if koşulu kullanmak oluşturmak için normal parantez ve küme parantezlerine ihtiyaç duyurulur. ({})

// syntax
if (condition) {
  //kodun bu kısmı doğru koşul için çalışır
}
Örnek:

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 pozitif bir sayıdır
Yukarıdaki koşul örneğinde görebileceğiniz gibi 3, 0'dan büyüktür, yani pozitif bir sayıdır. Koşul doğruydu ve kod bloğu yürütüldü. Ancak koşul yanlışsa herhangi bir sonuç göremeyiz.

let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}
Aynısı ikinci koşul için de geçerlidir, isRaining false ise if bloğu yürütülmez ve herhangi bir çıktı görmeyiz. Yanlış bir koşulun sonucunu görmek için, else ile başka bir bloğumuz olmalıdır.

If Else
Koşul doğruysa, ilk blok yürütülür, doğru değilse, else koşul yürütülür.

// syntax
if (condition) {
  // kodun bu kısmı doğru koşul için çalışır
} else {
  // kodun bu kısmı yanlış koşul için çalışır
}
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 pozitif bir sayıdır

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 negatif bir sayıdır
let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// Bir yağmurluğa ihtiyacın var.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// Yağmurluğa gerek yok.
Son koşul yanlıştır, bu nedenle else bloğu yürütülmüştür. Ya ikiden fazla koşulumuz varsa? Bu durumda else if koşullarını kullanırdık.

If Else if Else
Hayatımızda günlük kararlar veririz. Kararları bir veya iki koşulu kontrol ederek değil, birden çok koşula göre veririz. Günlük hayatımızda olduğu gibi programlama da şartlarla doludur. Birden fazla koşulumuz olduğunda else if kullanırız.

// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
Örnek:

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}
// if else if else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

## Switch

Switch, if else if else için bir alternatiftir. Switch ifadesi bir switch anahtar sözcüğüyle başlar, ardından bir parantez ve kod bloğu gelir. Kod bloğunun içinde farklı durumlarımız olacak. Case bloğu, switch parantezindeki değer vaka değeriyle eşleşirse çalışır. Break ifadesi, koşul yerine getirildikten sonra kod yürütmesini sonlandırmak içindir. Default blok, tüm durumlar koşulu karşılamıyorsa çalışır.

switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

// Switch Diğer Örnekler
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}
// Durumlarda koşulları kullanmak için örnekler

let num = prompt('Enter number');
switch (true) {
  case num > 0:
    console.log('Number is positive');
    break;
  case num == 0:
    console.log('Numbers is zero');
    break;
  case num < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}

## Ternary Operatörü

Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır. Bunu diğer bölümlerde ele aldık, ancak burada da belirtmek gerekir.

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')