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
**NOT: Bu kısımda şahsi notlarım olmadığı için 30-Days-Of-JavaScript notlarını kullandım. Daha öncede çözmüş olduğum bir repo. Bunu esas readme'ye ekleyeceğim**

Koşullu ifadeler farklı koşullara dayalı karar vermek için kullanılır. Örneğin x varsa a olayı gerçekleşsin, y varsa b olayı gerçekleşsin, z varsa c olayı gerçekleşsin, hiç biri yoksa d olayı gerçekleşsin gibi ifadelerdir.

### If
JavaScript ve diğer programlama dillerinde if anahtar kelimesi, bir koşulun doğru olup olmadığını kontrol etmek ve blok kodunu yürütmek için kullanılır. Bir if koşulu kullanmak oluşturmak için normal parantez ve küme parantezlerine ihtiyaç duyurulur. ({})

```javascript
// syntax
if (condition) {
  //kodun bu kısmı doğru koşul için çalışır
}
```

Örnek:

```javascript
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 pozitif bir sayıdır
```

Yukarıdaki koşul örneğinde görebileceğiniz gibi 3, 0'dan büyüktür, yani pozitif bir sayıdır. Koşul doğruydu ve kod bloğu yürütüldü. Ancak koşul yanlışsa herhangi bir sonuç göremeyiz.

```javascript
let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}
```

Aynısı ikinci koşul için de geçerlidir, isRaining false ise if bloğu yürütülmez ve herhangi bir çıktı görmeyiz. Yanlış bir koşulun sonucunu görmek için, else ile başka bir bloğumuz olmalıdır.

### If Else
Koşul doğruysa, ilk blok yürütülür, doğru değilse, else koşul yürütülür.

```javascript
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
```
Son koşul yanlıştır, bu nedenle else bloğu yürütülmüştür. Ya ikiden fazla koşulumuz varsa? Bu durumda else if koşullarını kullanırdık.


### If Else if Else
Hayatımızda günlük kararlar veririz. Kararları bir veya iki koşulu kontrol ederek değil, birden çok koşula göre veririz. Günlük hayatımızda olduğu gibi programlama da şartlarla doludur. Birden fazla koşulumuz olduğunda else if kullanırız.

```javascript
// syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}
```
Örnek:

```javascript
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
```

### Switch

Switch, if else if else için bir alternatiftir. Switch ifadesi bir switch anahtar sözcüğüyle başlar, ardından bir parantez ve kod bloğu gelir. Kod bloğunun içinde farklı durumlarımız olacak. Case bloğu, switch parantezindeki değer vaka değeriyle eşleşirse çalışır. Break ifadesi, koşul yerine getirildikten sonra kod yürütmesini sonlandırmak içindir. Default blok, tüm durumlar koşulu karşılamıyorsa çalışır.

```javascript
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
```

### Ternary Operatörü

Koşullar yazmanın başka bir yolu da üçlü operatörleri kullanmaktır. Bunu diğer bölümlerde ele aldık, ancak burada da belirtmek gerekir.

```javascript
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
```

## Arrayler ve bazı güzel JavaScript objeleri ve methodları
**Buradaki notlar 30-Days-of-JavaScript notlarından alınmıştır.**

### Array tanımı

- Değişkenlerin aksine, diziler Çoklu değerleri depolayabilirler. Dizi'deki her bir değer index'e sahiptir, ve her index bellek adresindeki bir referans'ı işaret eder. Bu index'ler kullanılarak her bir değere ulaşım sağlanabilir. Bir dizinin index'i sıfır'dan başlar ve dizinin son elemanının index'i, dizinin uzunluğundan bir eksiktir.

- Bir dizi, sıralı ve değiştirilebilirdir. Farklı veri türlerinin bir koleksiyonudur. Bir dizi, tekrar edilen elemanların ve farklı veri türlerinin depolanmasına izin verir. Bir dizi boş olabilir veya farklı veri türü değerlerine sahip olabilir.

## Boş bir dizi oluşturmak

- JavaScript'te birçok farklı yol ile dizi oluşturabiliriz. Bir dizi oluşturmanın farklı yollarını görelim. Bir dizi değişkeni tanımlamak için let yerine const kullanmak çok yaygındır. Const kullanıyorsanız, bu değişken adını bir daha kullanmayacağınız anlamına gelir.

- Array constructor'ı ( yapıcı metot ) kullanmak:

```javascript

// syntax

const  arr = Array()

// ya da

// let arr = new Array()

console.log(arr) // []
```
- Köşeli parantez kullanmak([]):

```javascript

// syntax

// Bu boş bir dizi oluşturmak için en çok tavsiye edilen yöntemdir

const  arr = []

console.log(arr)
```

## Değerlere sahip bir dizi oluşturmak

- Başlangıç değerine sahip bir dizi. length özelliğini kullanarak dizinin uzuluğunu bulabiliriz.

```javascript

const  numbers = [0, 3.14, 9.81, 37, 98.6, 100] // sayı dizisi

const  fruits = ['banana', 'orange', 'mango', 'lemon'] // string dizisi, meyveler

const  vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // string dizisi, sebzeler

const  animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // string dizisi, ürünler

const  webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // string dizisi, web teknolojileri

const  countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // string dizisi, ülkeler

  

// Diziyi ve dizinin uzunluğunu yazdırmak

  

console.log('Numbers:', numbers)

console.log('Number of numbers:', numbers.length)

  

console.log('Fruits:', fruits)

console.log('Number of fruits:', fruits.length)

  

console.log('Vegetables:', vegetables)

console.log('Number of vegetables:', vegetables.length)

  

console.log('Animal products:', animalProducts)

console.log('Number of animal products:', animalProducts.length)

  

console.log('Web technologies:', webTechs)

console.log('Number of web technologies:', webTechs.length)

  

console.log('Countries:', countries)

console.log('Number of countries:', countries.length)
```

## Array fonksiyonları ve array'leri manipüle etmek.

- Diziyi manüple edebilmek için farklı metotlar vardır. Bunlar dizilerle uğraşmak için kullanışlı yöntemlerden bazılarıdır. Bu yöntemler: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift.

### Dizi Constructor

Array: Bir dizi yaratmak için kullanılır.

```javascript
const  arr = Array() // boş bir dizi yaratır

console.log(arr)

const  eightEmptyValues = Array(8) // sekiz tane boş değer yaratır

console.log(eightEmptyValues) // [empty x 8]
```

### fill

- fill: Bütün dizi elemanlarını statik değerle doldurur.

```javascript
const  arr = Array() // Boş bir dizi yaratır

console.log(arr)
const  eightXvalues = Array(8).fill('X') // 'X'değerine sahip 8 tane eleman oluşuturur.

console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

const  eight0values = Array(8).fill(0) // '0' değerine sahip 8 tane eleman oluşturur.

console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const  four4values = Array(4).fill(4) //'4' değerine sahip 8 tane eleman oluşturur.

console.log(four4values) // [4, 4, 4, 4]
```

### Concat

- Concat: İki diziyi birbiri ile birleştirir. (Sadece iki değil daha fazlasınıda birleştirebilirsin.)
```javascript
const  firstList = [1, 2, 3]

const  secondList = [4, 5, 6]

const  thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]
```

### indexOf

- indexOf: O elemanın dizide olup olmadığını kontrol eder, eğer varsa mevcut index numarasını, yoksa -1 değerini döndürür.

```javascript
const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4

console.log(numbers.indexOf(0)) // -> -1

console.log(numbers.indexOf(1)) // -> 0

console.log(numbers.indexOf(6)) // -> -1
```

### lastIndexOf

- lastIndexOf: Dizideki son elemanın pozisyonunu verir. Eğer mevcutsa o elemanın index numarasını döner, mevcut değilse -1 döner.

```javascript
const  numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7

console.log(numbers.lastIndexOf(0)) // -1

console.log(numbers.lastIndexOf(1)) // 6

console.log(numbers.lastIndexOf(4)) // 3

console.log(numbers.lastIndexOf(6)) // -1
```

### includes

- includes: Bir dizide bir öğenin olup olmadığını kontrol etmek için kullanılır.Mevcut ise, true değerini döndürür, aksi takdirde false değerini döndürür.

```javascript
const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true

console.log(numbers.includes(0)) // false

console.log(numbers.includes(1)) // true

console.log(numbers.includes(6)) // false

  

const  webTechs = ['HTML','CSS','JavaScript','React','Redux','Node','MongoDB'] // Web teknolojileri dizisi



console.log(webTechs.includes('Node')) // true

console.log(webTechs.includes('C')) // false
```

### Array.isArray

- Array.isArray: Veri tipinin bir dizi olup olmadığını kontrol etmek için kullanılır.

```javascript
const  numbers = [1, 2, 3, 4, 5]

console.log(Array.isArray(numbers)) // true

const  number = 100

console.log(Array.isArray(number)) // false
```

### toString

- toString: Diziyi string bir ifadeye çevirir.

```javascript
const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.toString()) // 1,2,3,4,5

const  names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```

### join

- join: Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir string olarak döndürülür. Varsayılan olarak bir virgül ile birleşir, ancak elemanlar arasında birleştirilebilecek farklı dizi parametreleri iletebiliriz.

```javascript
const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.join()) // 1,2,3,4,5

  

const  names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

  

console.log(names.join()) // Asabeneh,Mathias,Elias,Brook

console.log(names.join('')) //AsabenehMathiasEliasBrook

console.log(names.join(' ')) //Asabeneh Mathias Elias Brook

console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook

console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

  

const  webTechs = [

'HTML',

'CSS',

'JavaScript',

'React',

'Redux',

'Node',

'MongoDB'

] // List of web technologies

  

console.log(webTechs.join()) // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"

console.log(webTechs.join(' # ')) // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"
```

### slice

- Slice: Bir aralıktaki çoklu elemanları dilimler İki parametre alır. Bu parametreler, başlangıç ve bitiş konumlarıdır. Bitiş konumunu dahil etmez.

```javascript
const  numbers = [1,2,3,4,5]

console.log(numbers.slice()) // -> Bütün öğeyi kopyalar

console.log(numbers.slice(0)) // -> Bütün öğeyi kopyalar

console.log(numbers.slice(0, numbers.length)) // Bütün öğeyi kopyalar

console.log(numbers.slice(1,4)) // -> [2,3,4] // son elemanı dahil etmez
```

### splice

- Splice: üç parametre alır :başlangıç konumu, kaldırılması gereken eleman sayısı ve eklenmesi gereken eleman sayısı.

```javascript
const  numbers = [1, 2, 3, 4, 5]

numbers.splice()

console.log(numbers) // -> Bütün elemanları kaldırır

const  numbers = [1, 2, 3, 4, 5]

numbers.splice(0,1)

console.log(numbers) // ilk elemanı kaldırır

const  numbers = [1, 2, 3, 4, 5, 6]

numbers.splice(3, 3, 7, 8, 9)

console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //2 eleman kaldırdı ve yerine 3 eleman ekledi
```

### push
- push: Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.

```javascript
// syntax

const  arr = ['item1', 'item2','item3']

arr.push('new item')

console.log(arr)

// ['item1', 'item2','item3','new item']

const  numbers = [1, 2, 3, 4, 5]

numbers.push(6)

console.log(numbers) // -> [1,2,3,4,5,6]

  

numbers.pop() // -> Dizinin sonundan bir eleman çıkarır.

console.log(numbers) // -> [1,2,3,4,5]

let  fruits = ['banana', 'orange', 'mango', 'lemon']

fruits.push('apple')

console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

  

fruits.push('lime')

console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
```

### pop

- pop: Dizinin sonundaki elemanı siler.

```javascript
const  numbers = [1, 2, 3, 4, 5]

numbers.pop() // -> Sondaki elemanı siler

console.log(numbers) // -> [1,2,3,4]
```

### shift

- shift: Dizinin en başındaki elemanı siler.
```javascript
const  numbers = [1, 2, 3, 4, 5]

numbers.shift() // -> baştan bir elemanı kaldırır.

console.log(numbers) // -> [2,3,4,5]
```

### unshift

- unshift: Dizinin başına dizi elemanı ekler.

```javascript
const  numbers = [1, 2, 3, 4, 5]

numbers.unshift(0) // -> en başa eleman ekler

console.log(numbers) // -> [0,1,2,3,4,5]
```

### reverse

- reverse: Dizi sıralamasını terse çevirir.

```javascript
const  numbers = [1, 2, 3, 4, 5]

numbers.reverse() // -> ters dizi sırası

console.log(numbers) // [5, 4, 3, 2, 1]
-----------------------------------------------
numbers.reverse()

console.log(numbers) // [1, 2, 3, 4, 5]
```

### sort

- sort: Dizi elemanlarını alfabetik sırada düzenleyin.

```javascript
const  webTechs = [

'HTML',

'CSS',

'JavaScript',

'React',

'Redux',

'Node',

'MongoDB'

]

  

webTechs.sort()

console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

  

webTechs.reverse() // sortladıktan sonra reverse edebiliriz.

console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]
```

## Dizi içinde diziler

- Diziler farklı veri tiplerinde elemanları ve yeni bir dizi de depolayabilirler Şimdi dizi içinde bir dizi tanımlayalım.

```javascript
const  firstNums = [1, 2, 3]

const  secondNums = [1, 4, 9]

  

const  arrayOfArray = [[1, 2, 3], [1, 2, 3]]

console.log(arrayOfArray[0]) // [1, 2, 3]

  

const  frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']

const  backEnd = ['Node','Express', 'MongoDB']

const  fullStack = [frontEnd, backEnd]

console.log(fullStack) // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]

console.log(fullStack.length) // 2

console.log(fullStack[0]) // ["HTML", "CSS", "JS", "React", "Redux"]

console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]
```

## Döngüler (loops)

- JavaScript'te döngüler, belirli bir işlemi tekrarlayarak kodunuzu yürütmenize olanak tanır. Döngüler, belirli bir şart veya koşul sağlandığı sürece çalışır. JavaScript'te yaygın olarak kullanılan döngüler şunlardır:

### for döngüsü

- for döngüsü, belirli bir sayıda veya bir dizideki elemanları dolaşmak için kullanılır. İşte temel for döngüsünün yapısı:
```javascript
for (başlangıç; koşul; adım) {
  // Döngü gövdesi: Burada tekrarlanan işlem yapılır
}
```
örnek:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

### while döngüsü
- while döngüsü, belirli bir koşul sağlandığı sürece çalışır. Koşul, döngünün başında kontrol edilir ve sadece koşul doğru olduğunda döngü devam eder. İşte temel while döngüsünün yapısı:
```javascript
while (koşul) {
  // Döngü gövdesi: Burada tekrarlanan işlem yapılır
}
```

örnek:

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### do...while döngüsü
- do...while döngüsü, diğer while döngüsünden farklı olarak koşulu döngünün sonunda kontrol eder. Bu nedenle döngü en az bir kez çalışır. İşte temel do...while döngüsünün yapısı:

```javascript
do {
  // Döngü gövdesi: Burada tekrarlanan işlem yapılır
} while (koşul);
```

örnek:
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

### for...of döngüsü
- for...of döngüsü, bir dizinin veya iterable bir nesnenin elemanları üzerinde dolaşmak için kullanılır. Bu döngü, elemanları doğrudan erişmenizi sağlar.
```javascript
for (const eleman of dizi) {
  // Döngü gövdesi: Eleman üzerinde işlem yapılır
}
```
Örnek:
```javascript
const meyveler = ['elma', 'armut', 'kiraz'];
for (const meyve of meyveler) {
  console.log(meyve);
}
```

Bu temel döngüler, JavaScript'te tekrarlayan işlemleri gerçekleştirmek için kullanılır. Hangi döngü türünün kullanılacağı, uygulamanızın ihtiyaçlarına ve döngü içeriğinize bağlı olarak değişebilir.

