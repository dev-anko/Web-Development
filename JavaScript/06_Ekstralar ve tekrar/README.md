# Ekstralar ve Tekrar
- Herhalde bu repoda denk gelebileceğiniz (bunu yazarken inanıyorum bakalım gerçekten öyle olucak mı :))  en uzun README dosyası bu olabilir çünkü burdan sonra Node.js ve Express.js ile backend tarafına geçiyorum ve geçmeden evvel hem tekrar yapmak hem de ilerlediğim kursun dışında öğrenmek istediklerimi burada paylaşacağım. Bu noktada sizlere tavsiyem eğer JavaScript'i öğrendiğinizi düşünüyorsanız ve proje yapmak istiyorsanız 30 Days of JavaScript reposunu çözmenizdir. Buradaki notlarım 30 Days of JavaScript reposundan emcüklenmiştir, yani o repoda tekrar yaparken aldığım notlar :D Sizlere kolaylık olması için notlarımı gün gün paylaşıyorum.
## Day 2
JavaScript ve diğer programlama dillerinde \ (ters eğik çizgi ) ardından bazı karakterler kaçış dizisidir. En yaygın kaçış karakterlerini görelim:

- \n: yeni satır
- \t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
- \\: Ters eğik çizgi
- \': Tek Tırnak (')
- \": Çift Tırnak (")
---
String bir numarayı sayıya dönüştürebiliriz. Alıntı içerisindeki herhangi bir sayı string numarasıdır. Bir string numarası örneği: '10', '5', vb. Aşağıdaki metotları kullanarak string'i sayıya dönüştürebiliriz:

- parseInt()
- Number()
- Plus sign(+) // artı işareti demek

```javascript
let num = '10'
let numInt = Number(num)

console.log(numInt) // 10

----------------------------------------

let num = '10'
let numInt = Number(num)

console.log(numInt) // 10

-----------------------------------------

let num = '10'
let numInt = +num

console.log(numInt) // 10
```

## Day 3
- JavaScript'te 0 haricindeki tüm değerler true kabul edilir. Yani `while("Anıl Sezgin çok yakışıklıdır")` yazarsan, bu döngü sonsuz döngü olarak çalışır.

- JavaScriptte ++’nın ve —’nin öncesi ve sonrası kullanımı şeklinde bir durum var. Örnek:
```javascript
let count = 0
console.log(++count)        // 1
console.log(count)          // 1
-----------------------------------------
let count = 0
console.log(count++)        // 0
console.log(count)          // 1
------------------------------------------
let count = 0
console.log(--count) // -1
console.log(count)  // -1
----------------------------------------------
let count = 0
console.log(count--) // 0
console.log(count)   // -1
```
---
- Koşul yapılarının farklı bir kullanımı:
```javascript
let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

// Çıktısı ------------------------------------------
You need a rain coat.
No need for a rain coat.
```
---
- Tarih alma konusunda kısaca Date objesinden nesne oluşturularak kullanılır.
```javascript
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
```

## Day 5 (Arrayler)
- Temel dizi oluşturma yöntemleri:
```javascript
const  arr = Array(); // arr artık bir dizi oluşturma şekli Array metodundan yapılıyor sadece.
------------------------------
const  arr = []
--------------------------------
const  numbers = [0, 3.14, 9.81, 37, 98.6, 100] // sayı dizisi

const  fruits = ['banana', 'orange', 'mango', 'lemon'] // string dizisi, meyveler

const  vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // string dizisi, sebzeler

const  animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // string dizisi, ürünler

const  webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // string dizisi, web teknolojileri

const  countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // string dizisi, ülkeler

// Yazdırmak için:
console.log('Numbers:', numbers)

console.log('Number of numbers:', numbers.length)
--------------------------------------------------------------
```
- Dizilerin farklı tipte elemanları olabilir.
---
Split kullanarak dizi oluşturma:

Not: Split kullanımının mantığı şu, bir değer veriyorsun ve o değerlersen sana bölüm sağlayarak farklı bir dizi oluşturuyor. Eğer içeriye değer vermez isen tek tek karakterleri böler.
```javascript
let  js = 'JavaScript'

const  charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
----------------------------------------------------------
let  companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

const  companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
```
---
- Dizi elemanlarını düzenlemek:
```javascript
const  numbers = [1, 2, 3, 4, 5]

numbers[0] = 10  // index 0'daki 1 elemanını 10 elemanı olarak değiştirdik

numbers[1] = 20  // index 2'deki 2 elemanını 20 elemanı olarak değiştirdik

console.log(numbers) // [10, 20, 3, 4, 5]
```

### Dizileri manipüle edebilecek metotlar
Diziyi manüple edebilmek için farklı metotlar vardır. Bunlar dizilerle uğraşmak için kullanışlı yöntemlerden bazılarıdır. Bu yöntemler: Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift.

#### Dizi constructor
- Array: Bir dizi yaratmak için kullanılır.
```javascript
const  arr = Array() // boş bir dizi yaratır
console.log(arr)

const  eightEmptyValues = Array(8) // sekiz tane boş değer yaratır
console.log(eightEmptyValues) // [empty x 8]
```

#### fill
- fill: bütün elemanları statik değerle doldurur.
```javascript
const  arr = Array() // Boş bir dizi yaratır
console.log(arr)

-------------------------------------------------------------

const  eightXvalues = Array(8).fill('X') // 'X'değerine sahip 8 tane eleman oluşuturur.
console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

-------------------------------------------------------------------

const  eight0values = Array(8).fill(0) // '0' değerine sahip 8 tane eleman oluşturur.
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

---------------------------------------------------------------------

const  four4values = Array(4).fill(4) //'4' değerine sahip 8 tane eleman oluşturur.
console.log(four4values) // [4, 4, 4, 4]
```
#### concat
- Concat: İki diziyi birbiri ile birleştirir. (Sadece iki değil daha fazlasınıda birleştirebilirsin.)
```javascript
const  firstList = [1, 2, 3]

const  secondList = [4, 5, 6]

const  thirdList = firstList.concat(secondList)
----------------------------------------------------------
console.log(thirdList) // [1, 2, 3, 4, 5, 6]
```
***indexOf***

- indexOf: O elemanın dizide olup olmadığını kontrol eder, eğer varsa mevcut index numarasını, yoksa -1 değerini döndürür.

```jsx
const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.indexOf(5)) // -> 4

console.log(numbers.indexOf(0)) // -> -1

console.log(numbers.indexOf(1)) // -> 0

console.log(numbers.indexOf(6)) // -> -1
```

***lastIndexOf***

- lastIndexOf: Dizideki son elemanın pozisyonunu verir. Eğer mevcutsa o elemanın index numarasını döner, mevcut değilse -1 döner.

```jsx
const  numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2)) // 7

console.log(numbers.lastIndexOf(0)) // -1

console.log(numbers.lastIndexOf(1)) // 6

console.log(numbers.lastIndexOf(4)) // 3

console.log(numbers.lastIndexOf(6)) // -1
```

***includes***

- includes: Bir dizide bir öğenin olup olmadığını kontrol etmek için kullanılır.Mevcut ise, true değerini döndürür, aksi takdirde false değerini döndürür.

```jsx
const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.includes(5)) // true

console.log(numbers.includes(0)) // false

console.log(numbers.includes(1)) // true

console.log(numbers.includes(6)) // false

  

const  webTechs = [

'HTML',

'CSS',

'JavaScript',

'React',

'Redux',

'Node',

'MongoDB'

] // Web teknolojileri dizisi

  

console.log(webTechs.includes('Node')) // true

console.log(webTechs.includes('C')) // false
```

***Array.isArray***

- Array.isArray: Veri tipinin bir dizi olup olmadığını kontrol etmek için kullanılır.

```jsx
const  numbers = [1, 2, 3, 4, 5]

console.log(Array.isArray(numbers)) // true
---------------------------------------------------
const  number = 100

console.log(Array.isArray(number)) // false
```

***toString***

- toString: Diziyi string bir ifadeye çevirir.

```jsx
const  numbers = [1, 2, 3, 4, 5]

console.log(numbers.toString()) // 1,2,3,4,5
--------------------------------------------------------------
const  names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook
```

***join***

- join: Dizinin elemanlarını birleştirmek için kullanılır, join yönteminde ilettiğimiz argüman dizide birleştirilir ve bir string olarak döndürülür. Varsayılan olarak bir virgül ile birleşir, ancak elemanlar arasında birleştirilebilecek farklı dizi parametreleri iletebiliriz.

```jsx
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

***slice***

- Slice: Bir aralıktaki çoklu elemanları dilimler İki parametre alır. Bu parametreler, başlangıç ve bitiş konumlarıdır. Bitiş konumunu dahil etmez.

```jsx
const  numbers = [1,2,3,4,5]

console.log(numbers.slice()) // -> Bütün öğeyi kopyalar

console.log(numbers.slice(0)) // -> Bütün öğeyi kopyalar

console.log(numbers.slice(0, numbers.length)) // Bütün öğeyi kopyalar

console.log(numbers.slice(1,4)) // -> [2,3,4] // son elemanı dahil etmez
```

***splice***

- Splice: üç parametre alır :başlangıç konumu, kaldırılması gereken eleman sayısı ve eklenmesi gereken eleman sayısı.

```jsx
const  numbers = [1, 2, 3, 4, 5]

numbers.splice()

console.log(numbers) // -> Bütün elemanları kaldırır
---------------------------------------------------------
const  numbers = [1, 2, 3, 4, 5]

numbers.splice(0,1)

console.log(numbers) // ilk elemanı kaldırır
-------------------------------------------------------------
const  numbers = [1, 2, 3, 4, 5, 6]

numbers.splice(3, 3, 7, 8, 9)

console.log(numbers.splice(3, 3, 7, 8, 9)) // -> [1, 2, 3, 7, 8, 9] //2 eleman kaldırdı ve yerine 3 eleman ekledi
```

***push***

- push: Dizinin sonuna eleman ekler.Varolan bir diziye eleman eklemek için push metodunu kullanırız.

```jsx
// syntax

const  arr = ['item1', 'item2','item3']

arr.push('new item')

console.log(arr)

// ['item1', 'item2','item3','new item']
---------------------------------------------------
const  numbers = [1, 2, 3, 4, 5]

numbers.push(6)

console.log(numbers) // -> [1,2,3,4,5,6]

  

numbers.pop() // -> Dizinin sonundan bir eleman çıkarır.

console.log(numbers) // -> [1,2,3,4,5]
-------------------------------------------------------
let  fruits = ['banana', 'orange', 'mango', 'lemon']

fruits.push('apple')

console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple']

  

fruits.push('lime')

console.log(fruits) // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']
```

***pop***

- pop: Dizinin sonundaki elemanı siler.

```jsx
const  numbers = [1, 2, 3, 4, 5]

numbers.pop() // -> Sondaki elemanı siler

console.log(numbers) // -> [1,2,3,4]
```

***shift***

- shift: Dizinin en başındaki elemanı siler.

```jsx
const  numbers = [1, 2, 3, 4, 5]

numbers.shift() // -> baştan bir elemanı kaldırır.

console.log(numbers) // -> [2,3,4,5]
```

***unshift***

- unshift: Dizinin başına dizi elemanı ekler.

```jsx
const  numbers = [1, 2, 3, 4, 5]

numbers.unshift(0) // -> en başa eleman ekler

console.log(numbers) // -> [0,1,2,3,4,5]
```

***reverse***

- reverse: Dizi sıralamasını terse çevirir.

```jsx
const  numbers = [1, 2, 3, 4, 5]

numbers.reverse() // -> ters dizi sırası

console.log(numbers) // [5, 4, 3, 2, 1]
-----------------------------------------------
numbers.reverse()

console.log(numbers) // [1, 2, 3, 4, 5]
```

***sort***

- sort: Dizi elemanlarını alfabetik sırada düzenleyin.Sort call back fonksyonu alır, sort'un call back fonksiyonu ile nasıl kullandığımızı ilerleyen bölümlerde göreceğiz.

```jsx
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

### Dizi içinde diziler

- Diziler farklı veri tiplerinde elemanları ve yeni bir dizi de depolayabilirler Şimdi dizi içinde bir dizi tanımlayalım.
