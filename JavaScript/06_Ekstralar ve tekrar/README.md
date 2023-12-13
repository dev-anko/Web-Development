# Ekstralar ve Tekrar
- Herhalde bu repoda denk gelebileceğiniz (bunu yazarken inanıyorum bakalım gerçekten öyle olucak mı :))  en uzun README dosyası bu olabilir çünkü burdan sonra Node.js ve Express.js ile backend tarafına geçiyorum ve geçmeden evvel hem tekrar yapmak hem de ilerlediğim kursun dışında öğrenmek istediklerimi burada paylaşacağım. Bu noktada sizlere tavsiyem eğer JavaScript'i öğrendiğinizi düşünüyorsanız ve proje yapmak istiyorsanız 30 Days of JavaScript reposunu çözmenizdir. Buradaki notlarım 30 Days of JavaScript reposundan emcüklenmiştir, yani o repoda tekrar yaparken aldığım notlar :D Sizlere kolaylık olması için notlarımı gün gün paylaşıyorum.

## Day-2 notes

JavaScript ve diğer programlama dillerinde \ (ters eğik çizgi ) ardından bazı karakterler kaçış dizisidir. En yaygın kaçış karakterlerini görelim:

- \n: yeni satır
- \t: Tab, 8 boşluk anlamına gelir ( klavyedeki tab tuşunu temsil eder )
- \\: Ters eğik çizgi
- \': Tek Tırnak (')
- \": Çift Tırnak (")

---

- `g-bütün metinde ara, i - büyük küçük harf duyarsız.`

```
// kaçış karakterli d, d'nin normal olmadığı anlamına gelir, d bunun yerine bir rakam gibi davranır
// + bir veya daha fazla basamaklı sayı anlamına gelir,
// ondan sonra g varsa global demektir, her yerde ara.
```

---

String bir numarayı sayıya dönüştürebiliriz. Alıntı içerisindeki herhangi bir sayı string numarasıdır. Bir string numarası örneği: '10', '5', vb. Aşağıdaki metotları kullanarak string'i sayıya dönüştürebiliriz:

- parseInt()
- Number()
- Plus sign(+) // artı işareti demek

```jsx
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

---

## Day-3 notes

- 0 hariç tüm değerler true kabul edilir

---

JavaScriptte ++’nın ve —’nin öncesi ve sonrası kullanımı şeklinde bir durum var. Örnek:

```jsx
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

Farklı bir koşul yapısı kullanımı mevcut:

```jsx
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

Tarih alma konusunda kısaca Date objesinden nesne oluşturularak kullanılır.

```jsx
const now = new Date()
console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
```

---

parseInt virgülden sonraki kısmı direk atıp tam sayı yapıyor. Yuvarlama yok.

## Day-5 notes (arrays)

Temel dizi oluşturma yöntemleri:

```jsx
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

- Dizinin farklı veri tiplerinde elemanları olabilir

Split kullanarak dizi oluşturma:

Not: Split kullanımının mantığı şu, bir değer veriyorsun ve o değerlersen sana bölüm sağlayarak farklı bir dizi oluşturuyor. Eğer içeriye değer vermez isen tek tek karakterleri böler

```jsx
let  js = 'JavaScript'

const  charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]
----------------------------------------------------------
let  companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'

const  companies = companiesString.split(',')

console.log(companies) // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]
```

Dizi elemanlarını düzenlemek:

```jsx
const  numbers = [1, 2, 3, 4, 5]

numbers[0] = 10  // index 0'daki 1 elemanını 10 elemanı olarak değiştirdik

numbers[1] = 20  // index 2'deki 2 elemanını 20 elemanı olarak değiştirdik

console.log(numbers) // [10, 20, 3, 4, 5]
```

### Dizileri manipüle edebilecek metotlar

Diziyi manüple edebilmek için farklı metotlar vardır. Bunlar dizilerle uğraşmak için kullanışlı yöntemlerden bazılarıdır. Bu yöntemler: *Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift.*

---

**Dizi Constructor**

Array: Bir dizi yaratmak için kullanılır.

```jsx
const  arr = Array() // boş bir dizi yaratır

console.log(arr)

const  eightEmptyValues = Array(8) // sekiz tane boş değer yaratır

console.log(eightEmptyValues) // [empty x 8]
```

***fill***

- fill: Bütün dizi elemanlarını statik değerle doldurur.

```jsx
const  arr = Array() // Boş bir dizi yaratır

console.log(arr)
-------------------------------------------------------------
const  eightXvalues = Array(8).fill('X') // 'X'değerine sahip 8 tane eleman oluşuturur.

console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']
-------------------------------------------------------------------
const  eight0values = Array(8).fill(0) // '0' değerine sahip 8 tane eleman oluşturur.

console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]
---------------------------------------------------------------------
const  four4values = Array(4).fill(4) //'4' değerine sahip 4 tane eleman oluşturur.

console.log(four4values) // [4, 4, 4, 4]
```

***Concat***

- Concat: İki diziyi birbiri ile birleştirir. (Sadece iki değil daha fazlasınıda birleştirebilirsin.)

```jsx
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

```jsx
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

## Day-6 notes (loops)

- Herhangi bir id üretmek için gerekli kod:

```jsx
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
let randomChars = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * chars.length);
    randomChars += chars[random];
}
console.log(randomChars)
```

- Diziler için şöyle bir kullanım varmış: (push’ta birden fazla değer ekleme)

```jsx
for (let x = 0; x < countries.length; x++) {
    karisikDizi.push([countries[x], countries[x].slice(0, 3), countries[x].length])
}
```

## Day-7 notes (functions)

### ***Anonymous Function***

```jsx
const anonymousFun = function() {
  console.log(
    'İsimsiz bir fonksiyonum ve değerim anonim olarak saklanıyor'
  )
}
```

### ***Expression Function***

```jsx
// Function expression
const square = function() {
  console.log("Bu bir expression function türünde fonksiyondur")
}
//Anonim fonksiyondan farkını çok anlamadım.
```

### ***Parametresiz ve dönüş değeri olamayan fonksiyon***

```jsx
function square() {
  let num = 2
  let square = num * num
  console.log(square)
}

square() // 4

// parametresiz fonksiyon örnek 2:
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum = numOne + numTwo

  console.log(sum)
}

addTwoNumbers() // fonksiyon, kendisine verilen isim ile çağırılmalı
```

### *Bir değer döndüren fonksiyon*

```jsx
function printFullName (){
      let firstName = 'Asabeneh'
      let lastName = 'Yetayeh'
      let space = ' '
      let fullName = firstName + space + lastName
      return fullName
}
console.log(printFullName())
----------------------------------------------------
function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())
```

### *Parametreli fonksiyon*

```jsx
// bir parametreli fonksiyon
function functionName(parm1) {
  // istenilen kod parçası
}
functionName(parm1) // fonksiyonu çağırma sırasında parantezler arasına bir parametreye ihtiyaç duyar

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // bağımsız bir değişkenle çağırılmalı

function square(number) {
  return number * number
}

console.log(square(10))
```

### *İki parametreli fonksiyon*

```jsx
// iki parametreli fonksiyon
function functionName(parm1, parm2) {
  //istenilen kod parçası
}
functionName(parm1, parm2) //fonksiyonu çağırma sırasında parantezler arasında iki tane parametreye ihtiyaç duyar

// Parametresiz fonksiyon giriş yapmaz, bu nedenle parametrelerle bir fonksiyon yapalım
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers(10, 20) // fonksiyon çağırımı
// Bir fonksiyon değer döndürmezse veri depolayamaz, bu nedenle değer döndürmelidir. 

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))
function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### *Çok parametreli fonksiyon*

```jsx
// çok parametreli fonksiyon
function functionName(parm1, parm2, parm3,...){
  //istenilen kod parçası
}
functionName(parm1,parm2,parm3,...) // fonksiyon çağırımı sırasında birden çok parametreye ihtiyaç duyar

// bu fonksiyon, bir diziyi parametre olarak alır ve dizideki sayıları toplar
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
    //fonksiyon çağırımı
console.log(sumArrayValues(numbers));

    const areaOfCircle = (radius) => {
      let area = Math.PI * radius * radius;
      return area;
    }
console.log(areaOfCircle(10))
```

### *Sınırsız sayıda parametreyle çalışan fonksiyon*

- Fonksiyonlarla çalışırken kaç tane parametre gerekebileceğini bilemeyebiliriz. Javascript'te bu durumda bize sınırsız sayıda parametre alan fonksiyon yazabilme imkanı tanır. Bu şekilde bir fonksiyon tanımlamanın iki yolu vardır.
- Bu fonksiyonun tanımlanmasını fonksiyon scope'nda object temelli arguments anahtar kelimesi ile erişilir. Parametre olarak atanan her öğeye arguments üzerinden ulaşabiliriz. Bir örneğine bakmak gerekirse;

```jsx
// arguments nesnesine erişelim

function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4)
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

-------------------------------------------------------------------------

// fonksiyon tanımı

function sumAllNums() {
  let sum = 0
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

### *Kendi kendine çağırılan fonksiyon*

- JavaScript sözdiziminde birçok ilginç şey vardır, bunlardan biri kendi kendine çalışan (kendi kendini çağıran) fonksiyonların tanımıdır. Böyle bir fonksiyonu şu şekilde tanımlayabiliriz:

```jsx
(function(n) {
  console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function(n) {
  return n * n
})(10)

console.log(squaredNum)
```

- Yukarıdaki fonksiyon, tanımlandıktan hemen sonra çağrılır. Kendi kendini çağıran işlevlerin yararı, global ad alanını karıştırmadan (herhangi bir global bildirmeden) kodu bir kez yürütmemize olanak vermeleridir.

### *Arrow function*

- Klasik fonksiyona alternatif olarak kullanılan arrow function sözdiziminde ufak bir farklılık vardır. `function` anahtar kelimesi yerine `=>` işareti kullanılır. Sırasıyla aynı fonksiyonun klasik ve arrow function halini yazalım

```jsx
function square(n) {
  return n * n
}

console.log(square(2)) // 4

const square = n => {
  return n * n
}

console.log(square(2))  // -> 4

// kod bloğumuzda sadece bir satır kod varsa bu fonksiyon şu şekilde yazılabilir.
const square = n => n * n  // -> 4

--------------------------------------------------------------------------

const changeToUpperCase = arr => {
  const newArr = []
  for (const element of arr) {
    newArr.push(element.toUpperCase())
  }
  return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries))

// ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

// Yukarıdaki fonksiyon yalnızca geri dönüş ifadesine sahiptir, bu nedenle bunu aşağıdaki şekilde açıkça iade edebiliriz.

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Asabeneh', 'Yetayeh'))
```

### *Arrow function’da sınırsız sayıda parametre*

```jsx
// arguments nesnesine erişmemize bir örnek

const sumAllNums = (...args) => {
 // console.log(arguments), arguments nesnesi bulunamadı
 // bunun yerine spread operator (...) ve parametre adı kullanalım
 console.log(args)
}

sumAllNums(1, 2, 3, 4)
// [1, 2, 3, 4]
--------------------------------------------------------------------------
// function declaration

const sumAllNums = (...args) => {
  let sum = 0
  for (const element of args) {
    sum += element
  }
  return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
```

### *Default parametre ile fonksiyon kullanımı*

- Bazen parametrelere default değerler geçmek isteyebiliriz. Bu durumda fonksiyon çağırımı sırasında söz konusu parametreyi vermek zorunda olmadan kullanabiliriz. Eğer bu parametreyi vermezsek fonksiyon işlevinin parametrenin default değerini kullanarak tamamlayacaktır.

```jsx
// syntax - söz dizimi
// fonksiyon tanımı
function functionName(param = value) {
  //codes
}

// fonksiyon çağırımı
functionName()
functionName(arg)
```

```jsx
function greetings(name = 'Peter') {
  let message = `${name}, welcome to 30 Days Of JavaScript!`
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
--------------------------------------------------------------------
function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
------------------------------------------------------------------------------
function calculateAge(birthYear, currentYear = 2019) {
  let age = currentYear - birthYear
  return age
}

console.log('Age: ', calculateAge(1819))
-------------------------------------------------------------------------------
function weightOfObject(mass, gravity = 9.81) {
  let weight = mass * gravity + ' N' // değer önce dize olarak değiştirilmelidir
  return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 Dünya yüzeyinde yerçekimi
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // Ay yüzeyinde yerçekimi
```

- Bu fonksiyonları bir de arrow funciton kullanarak tanımlayalım:

```jsx
// syntax -  söz dizimi
// fonksiyonu tanımlama
const functionName = (param = value) => {
  //codes
}

// fonksiyonu çağırma
functionName()
functionName(arg)
```

```jsx
const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}

console.log(greetings())
console.log(greetings('Asabeneh'))
-----------------------------------------------------------------------
const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
  let space = ' '
  let fullName = firstName + space + lastName
  return fullName
}

console.log(generateFullName())
console.log(generateFullName('David', 'Smith'))
-------------------------------------------------------------------------------
const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
console.log('Age: ', calculateAge(1819))
----------------------------------------------------------------------------------
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 Dünya yüzeyinde yerçekimi
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // Ay yüzeyinde yerçekimi
```

## Day-8 notes

### ***Scope - Kapsam Alanları***

Bu konu değişken tanımlamanın temel kısmını oluşturur. Farklı veri türlerini depolamak için değişken tanımlarız. Bir değişkeni tanımlamak için `var`, `let` veya `const` anahtar sözcüklerini kullanırız. Bir değişken farklı kapsam alanlarında tanımlanabilir. Bu bölümde, `var` veya `let` kullandığımızda kapsam değişkenlerinin kodumuzu nasıl etkilediğini göreceğiz.

Değişken scope'ları şu şekilde olabilir.

- Global
- Local

> var, let veya const olmadan tanımlanan her değişken global scope olarak geçerlidir.
> 

Scope.js adında bir dosyanızın olduğunu düşünelim.

### ***Window Global Object***

Geçerli dosya içerisinde global scope da diyebiliriz bu duruma

Console.log() metodunu kullanmadan tarayıcınızı açın ve kontrol edin; tarayıcıya a veya b yazarsanız a ve b değerlerini görebilirsiniz. Bu durum a ve b değişkenlerinin zaten hali hazırda mevcut olduğu anlamına gelir.

```jsx
//scope.js dosyası içerisi

a = 'JavaScript' // bir değişkeni let veya const anahtar kelimeleri olamadan tanımlamako değişkeni global hale getirir ve geçerli dosya içerisinde her yerden erişilebilir.

b = 10 // bu gloabl scope olarak tanımlanmıştır ve dosya içerisinde her yerden erişilebilir.
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // erişilebilir
```

### ***Global Scope***

Aynı dosyanın her yerinde global olarak tanımlanan bir değişkene erişilebilir. Global olma durumu iki şekilde olabilir Dosyanın direkt kendisinde global olabilir veya bazı kod bloklarına göre global olabilir.

```jsx
//scope.js
let a = 'JavaScript' // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır
let b = 10 // bu da dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, erişilebilir
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, erişilebilir
```

### *Local Scope*

Yerel olarak tanımlanan bir değişkene yalnızca belirli kod bloğunda erişilebilir.

- Block Scope
- Function Scope

```jsx
//scope.js dosyasının içerisi

let a = 'JavaScript' // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır.
let b = 10 // bu dosyanın herhangi bir yerinde erişilebilecek global bir kapsamdır.

// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, erişilebilir
  let value = false
// block scope
  if (true) {
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  //c değişkenine erişemiyoruz çünkü c değişkeni sadec if bloğunda geçerli bir değişkendir
  console.log(a, b, c, value) // JavaScript 10 undefined true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, erişilebilir
```

Artık scope'lar hakkında bir şeyler öğrendik. `var` anahtar kelimesi ile tanımlanan bir değişken fonksiyon scope'u içerisinde geçerlidir. Ancak `let` veya `const` anahtar kelimeleri ile tanımlanan değişkenler block scope'unda geçerlidir. (fonksiyon, if veya diğer dönggü blokları). Block kapsamını biraz daha netleştirmek gerekirse Javascript ve diğer çoğu yazılım dili için süslü parantezler arası demek olur. `{  }`

```jsx
//scope.js
function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined
// yukarıdaki çıktı konsol ekranında alacağımız hatanın çıktısıdır. 

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3
```

```jsx
//scope.js
function letsLearnScope() {
  // you can use let or const, but gravity is constant I prefer to use const
  const gravity = 9.81
  console.log(gravity)

}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

if (true){
  const  gravity = 9.81
  console.log(gravity) // 9.81
}
// console.log(gravity), Uncaught ReferenceError: gravity is not defined

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
// console.log(i), Uncaught ReferenceError: i is not defined
```

<aside>
💡 var tipi bir fonksiyon içerisinde kullanıldıysa o değişkeni fonksiyon dışında kullanmassın. let ve var arasındaki fark yukarıda yazdığım gibi scope farklılıklarıdır. Mesela bir blok içerisinde kullandığın değişkeni blok dışındada kullanmak istiyorsan var kullanmalısın. let ve const çalışmaz.

</aside>

`let` ve `const` anahtar kelimeleri ile tanımlanan değişkenlerin kapsam alanlarının aynı olduğunu ifade ettik. Peki aralarındaki fark ne? Basitçe açıklamak gerekirse `const` ile tanımlanan bir değişkenin değerini daha sonraki satırlarda değiştiremeyiz ancak `let` ile tanımlanan değişkenin değerini değiştirebiliriz. Ben `let` ve `const` kullanarak temiz kod yazmanızı ve hata ayıklamanın zor olmasını önlemek için `let` ve `const` 'ı kullanmanızı tavsiye ederim. Temel kural olarak, herhangi bir sabit değer için `let` ve dizi, nesne, ok fonksiyonu ve işlev ifadesi için `const` özelliğini kullanabilirsiniz.

### *Object-Nesne*

Her şey bir nesne olabilir ve nesnelerin özellikleri ve özelliklerinin değerleri vardır, bu nedenle bir nesne bir anahtar değer çiftidir. Bir nesneyi tam anlamıyla oluşturmak için iki köşeli parantez kullanırız.

### *Boş nesne oluşturmak*

Boş bir nesne:

```jsx
const person = {}
```

### *Değerle birlikte nesne oluşturmak*

Şimdi oluşturacağımız person nesnesinin firstName, lastName, age, country, city ve skills gibi bazı özellikleri olacak şekilde oluşturalım.

```jsx
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: true
}
console.log(person)
```

### *Nesneden değerleri alabilmek*

Nesnenin değerlerine iki yöntem kullanarak erişebiliriz:

- `.` operatörünü kullanarak erişebiliriz
- köşeli parantez kullanarak erişebiliriz

```jsx
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName}${this.lastName}`
  },
  'phone number': '+3584545454545'
}

// "." operatörü kullanarak
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location) // undefined

// kçşeli parantez kullanarak
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['age'])
console.log(person['age'])
console.log(person['location']) // undefined

// örneğin, telefon numarasına erişmek için yalnızca köşeli parantez yöntemini kullanırız
console.log(person['phone number'])
```

### *Object methodları oluşturma*

Şimdi, kişi nesnesinin getFullName özellikleri vardır. getFullName, kişi nesnesinin içindeki işlevdir ve biz ona nesne yöntemi diyoruz. *this* anahtar sözcüğü, nesnenin kendisine atıfta bulunur. Nesnenin farklı özelliklerinin değerlerine erişmek için *this* kelimesini kullanabiliriz. Bir arrow funtionu nesne yöntemi olarak kullanamayız çünkü bu sözcüğü nesnenin kendisi yerine bir arrow funtionun içindeki pencereyi ifade eder. Örnek olarak:

```jsx
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(person.getFullName())
// Asabeneh Yetayeh
```

### *Object için yeni bir anahtar değer (key) oluşturma*

Nesne, eşlenebilen bir veri yapısıdır ve oluşturulduktan sonra nesnenin içeriğini değiştirebiliriz.

nesne de yeni key'ler oluşturabilme

```jsx
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())
```

```jsx
Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.
```

### *Object methodları*

Bir nesneyi manipüle etmek için farklı yöntemler vardır. Mevcut yöntemlerden bazılarını görelim.

*Object.assign*:Nesneyi orijinal nesneyi değiştirmeden kopyalamak için kullanılır

```jsx
const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)
```

### *Object.keys() methodu*

*Object.keys*: Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır

```jsx
const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']
const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']
```

### *Object.values() methodu*

*Object.values*: Nesnenin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır

```jsx
const values = Object.values(copyPerson)
console.log(values)
```

### *Object.entries() methodu*

*Object.entries*: Bir dizideki key ve value değerlerini almak için kullanılır

```jsx
const entries = Object.entries(copyPerson)
console.log(entries)
```

### *hasOwnProperty() methodu*

*hasOwnProperty*: Bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır

```jsx
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))
```

## Day-9 notes (High Order Function)

Yüksek dereceden (high order) fonksiyonlar, parametre olarak başka bir fonksiyonu içerisine alan veya bir başka fonksiyonu değer olarak döndürebilen fonksiyonlardır.

Bir fonksiyon parametre olarak geçilebiliyorsa bu fonksiyona ise **callback** fonksiyon denir.

### *Callback*

Callback fonksiyon yukarıda da söylediğimiz gibi bir başka fonksiyona parametre olarak verilen fonksiyonlardır.

```jsx
// callback fonksiyonun adını istediğimiz şekilde verebiliriz.
const callback = (n) => {
  return n ** 2
}

// bir başka fonksiyonu callback olarak alan fonksiyon
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))
```

### *Returning function*

Yüksek dereceden fonksiyonlar bir fonksiyonu değer olarak geri döndürebilir.

```jsx
// Bir fonksiyonun başka bir fonksiyonu geri döndürme örneği.
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))
```

Callback fonksiyonunu nasıl kullandığımızı görelim. Örneğin *foreach* metodu callback kullanan metotlarından biridir.

```jsx
const numbers = [1, 2, 3, 4, 5]
const sumArray = arr => {
  let sum = 0
  const callback = function(element) {
    sum += element
  }
  arr.forEach(callback)
  return sum

}
console.log(sumArray(numbers))
```

### *Setting time*

JavaScript'te bazı fonksiyonları belirli bir zaman aralığında yürütebiliriz veya bazı fonksiyonları yürütmek için belirli bir süre planlama (bekleme) yapabiliriz.

- setInterval
- setTimeout

<aside>
💡 **`setInterval`** içinde fonksiyon adını () kullanmadan çağırmanızın nedeni, parantez kullanırsanız fonksiyonu hemen çağıracak olmanızdır. Ancak burada fonksiyonun çağrılmasını istediğinizde değil, sadece fonksiyonun adını iletmek istiyorsunuz.

Eğer parantezlerle çağırsaydınız, fonksiyonun dönüş değeri **`setInterval`** tarafından ele alınırdı ve bu dönüş değeri başka bir işleve veya değişkene atanabilirdi. Ancak genellikle **`setInterval`** veya **`setTimeout`** gibi fonksiyonlara bir işlev adı (referansı) iletmek istersiniz, bu nedenle parantez kullanmadan sadece fonksiyon adını iletirsiniz. İşlevi bu şekilde ilettiğinizde, **`setInterval`** veya **`setTimeout`**, belirtilen süreler aralığında bu işlevi çağırır.

</aside>

### *setInterval fonksiyonu ile süre ayarlama*

JavaScript'te, belirli bir zaman aralığında sürekli olarak istediğimiz şeyi yapmak için **SetInterval** fonksiyonunu kullanırız. SetInterval, genel olarak bir callback fonksiyonu ve ikinci olarak, belirlemek istediğimiz süreyi parametre alararak kullanılır.

```jsx
// syntax
var duration = 10
function callback() {
  // code goes here
}
setInterval(callback, duration)
```

```jsx
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır, 1000ms = 1s
```

### *setTimeout ile zaman ayarlama*

Javascript'te ileriye dönük çalışacak fonksiyonlar planlayabiliriz. Tam da bu iş için **setTimeOut** metodu imdadımıza koşuyor. setTimeOut fonksiyonu da setInterval fonksiyonuna benzer şekilde bir callback fonksiyon ve ms cinsinden bir süre değerini parametre olarak alır.

```jsx
function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) //2 saniye bekledikten sonra "Hello" yazdıracak
```

### ***Functional Programming - Fonksiyonel Programalama***

JavaScript'in en son sürümü, normal döngü yazmak yerine karmaşık sorunları çözmemize yardımcı olabilecek birçok yerleşik yöntem sunmuştur.Göreceğimiz tüm metotlar callback fonksiyonu ile birlikte kullanılabilir. Bu bölümde, *forEach*, *map*, *filter*, *reduce*, *find*, *every*, *some*, and *sort* metodlarını göreceğiz

### ***forEach***

*forEach*: Bir dizi elemanlarını sırasıyla gezer. "element", "index" ve dizinin kendisi ile callback fonksiyonunu parametre olarak alabilir. "index" ve dizinin kendisi isteğe bağlı olarak parametre olarak verilmeyebilir.

```jsx
arr.forEach(function (element, index, arr) { // sırayla alıyor element index dizi.
  console.log(index, element, arr)
})
// Yukarıdaki kod arrow function kullanılarak yazılabilir.
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})
// Daha basite indirgemek istersek
arr.forEach((element, index, arr) => console.log(index, element, arr))
```

```jsx
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)

console.log(sum)
```

```jsx
let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)
```

```jsx
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))
```

### *map*

*map*: fonksiyonu, bir dizinin her bir öğesini dolaşarak her öğeyi belirli bir işleme tabi tutar ve bu işlemin sonucunda oluşan yeni öğelerden oluşan bir dizi döndürür. Mevcut bir diziyi değiştirmeden yeni bir dizi oluşturmanıza olanak sağlar.

```jsx
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})
```

```jsx
/*Arrow function ve explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare)
```

```jsx
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((name) => name.toUpperCase())
console.log(namesToUpperCase)
```

```jsx
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
```

```jsx
const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)
```

### *filter*

*Filter*: Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür

<aside>
💡 **`.filter()`** fonksiyonu, bir dizi içinde belirli bir koşulu karşılayan öğeleri seçmek için kullanılır. Bu fonksiyon, mevcut diziyi dolaşır, belirli bir koşulu sağlayan öğeleri yeni bir dizi olarak döndürür.

</aside>

```jsx
//Ülkeler "land" ifadesi içersin
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand)
// ['Finland', 'Ireland']
```

```jsx
const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia)
// ['Albania', 'Bolivia','Ethiopia']
```

```jsx
const countriesHaveFiveLetters = countries.filter(
  (country) => country.length === 5
)
console.log(countriesHaveFiveLetters)
// ['Japan', 'Kenya']
```

```jsx
const scores = [
  { name: 'Asabeneh', score: 95 },
   { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log(scoresGreaterEighty)
//[{name: 'Asabeneh', score: 95}, { name: 'Lidiya', score: 98 },{name: 'Martha', score: 85},{name: 'John', score: 100}]
```

### *reduce*

*reduce*: Reduce fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür. Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.

```jsx
arr.reduce((acc, cur) => {
  // bir değer döndürmeden önce bazı işlevler buraya kodlanır
 return 
}, initialValue)
```

```jsx
const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(sum)
// 15
```

### *every*

*every*: Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Booelan türünde geri dönüş yapar.

```jsx
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string') // hepsi string türünde mi?

console.log(areAllStr)
```

```jsx
const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // hepsi true mu? 

console.log(areAllTrue) // true
```

### *find*

*find*: İstenilen koşulu karşılayan ilk elemanı geri döndürür.

```jsx
const ages = [24, 22, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)

console.log(age);
```

```jsx
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7)
console.log(result)
```

```jsx
const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
]

const score = scores.find((user) => user.score > 80)
console.log(score)
```

### *findIndex*

*findIndex*: koşulu karşılayan ilk elemanın index değerini döndürür.

```jsx
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5
```

### *some*

*some*: Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Boolean türünde geri dönüş yapar.

```jsx
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const bools = [true, true, true, true]

const areSomeTrue = bools.some((b) =>  b === true)

console.log(areSomeTrue) //true
```

```jsx
const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
console.log(areAllStr) // false
```

### *sort*

*sort*: sort fonksiyonu, bir diziyi, öğelerini dizelere dönüştürerek ve bu dizeleri Unicode kod karakterleri sırasına göre karşılaştırarak (diziyi alfabetik olarak sıralar) sıralamanıza olanak tanır. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler****

```jsx
// STRİNG DEĞERLER
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted
```

```jsx
// SAYISAL DEĞERLER
const numbers = [9.81, 3.14, 100, 37]

console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
```

Sayısal değerleri artan veya azalan düzende sıralamak için, sıralama kriterini belirleyen bir fonksiyon kullanmamız gerekir. Sıralama yöntemi neyse ki negatif, sıfır ve pozitif değerleri doğru sırada sıralayabilir. **Sort()** methodu iki değeri karşılaştırdığında, değerleri karşılaştırma fonksiyonuna gönderir ve döndürülen değere göre sıralar.

- Sonuç negatifse; a, b'den önce sıralanır
- Sonuç pozitifse; a, b'den sonra sıralanır
- Sonuç 0 ise; hiçbir şey değişmez

Tek ihtiyacımız olan ise sort() metodu içinde karşılaştırma fonksiyonu kullanmak.

```jsx
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]
```

### *Array nesnelerini sıralamak*

Bir dizideki nesneleri sıraladığımız zaman karşılaştırmak için key objesini kullanırız. Aşağıdaki örneğe bakalım.

```jsx
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1
  if (a.key > b.key) return 1
  return 0
})

// or

objArr.sort(function (a, b) {
  if (a['key'] < b['key']) return -1
  if (a['key'] > b['key']) return 1
  return 0
})

const users = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook', age: 50 },
  { name: 'Eyob', age: 100 },
  { name: 'Elias', age: 22 },
]
users.sort((a, b) => {
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})
console.log(users) // sorted ascending
// [{…}, {…}, {…}, {…}]
```

## Day-10 notes (Sets and Maps)

### *Set*

Set, elemanlar topluluğudur. Set yalnızca benzersiz öğeler içerebilir. Aşağıdaki bölümde bir setin nasıl oluşturulacağını görelim.****

```jsx
const companies = new Set()
console.log(companies)
```

```jsx
Set(0) {}
```

### *Diziden set oluşturma*

```jsx
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)
```

```jsx
Set(4) {English, Finnish, French, Spanish}
```

Set iterable bir nesnedir ve her öğeye iterable işlemi uygulanabilir.

```jsx
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)

for (const language of setOfLanguages) {
  console.log(language)
}
```

```jsx
English
Finnish
French
Spanish
```

### ***Bir sete eleman ekleme***

```jsx
const companies = new Set()  boş bir set oluşturuyoruz
console.log(companies.size)  0

companies.add('Google')  set'e eleman ekliyoruz
companies.add('Facebook')
companies.add('Amazon')
companies.add('Oracle')
companies.add('Microsoft')
console.log(companies.size)  set'in içinde 5 eleman var
console.log(companies)
```

```jsx
Set(5) {Google, Facebook, Amazon, Oracle, Microsoft}
```

bir sete eleman eklemek için döngülerde kullanılabilir.

```jsx
const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
setOfCompanies = new Set()
for (const company of companies) {
  setOfCompanies.add(company)
}
```

```jsx
Set(5) {Google, Facebook, Amazon, Oracle, Microsoft}
```

### *Bir elemanı set’den silme*

Set'den delete methodunu kullanrak bir eleman silebiliriz.

```jsx
console.log(companies.delete('Google'))
console.log(companies.size)  Set'de 4 eleman kaldı
```

### *Setteki bir elemanı kontrol etme*

Has methodu bir set'de belirli bir elemanı olup olmadığını kontrol eder true veya false döndürür.

```jsx
console.log(companies.has('Apple'))  false
console.log(companies.has('Facebook'))  true
```

### *Seti temizleme*

Clear methodu setteki tüm elemanları temizler.

```jsx
companies.clear()
console.log(companies)
```

Set'in nasıl kullanılacağını aşağıdaki örnekte görebilirsiniz.

```jsx
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]
const langSet = new Set(languages)
console.log(langSet)  Set(4) {English, Finnish, French, Spanish}
console.log(langSet.size)  4

const counts = []
const count = {}

for (const l of langSet) {
  const filteredLang = languages.filter((lng) => lng === l)
  console.log(filteredLang)  [English, English, English]
  counts.push({ lang l, count filteredLang.length })
}
console.log(counts)
```

```jsx
[
  { lang 'English', count 3 },
  { lang 'Finnish', count 1 },
  { lang 'French', count 2 },
  { lang 'Spanish', count 1 },
]
```

Setin farklı bir kullanımı: Örneğin dizideki benzersiz öğeyi saymak için.

```jsx
const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers)
```

```jsx
Set(5) {5, 3, 2, 9, 4}
```

### *Setlerin birleşimi*

iki set nesnesini birleştirmek yayılma operatörü kullanılarak elde edilebilir A ve B set'lerinin birleşimini (A U B) bulmak için aşağıdaki kodlara göz atın

```jsx
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)
------------
Set(6) {1, 2, 3, 4, 5,6}
```

### *Setlerin kesişimi*

iki set nesnesinin kesişimini bulmak için filter methodu kullanılması gerekir. A ve B setlerinin kesişimi (A ∩ B) bulmak için aşağıdaki kodlara göz atın

```jsx
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)
```

```jsx
Set(3) {3, 4, 5}
```

### *Setlerin farkları*

iki set nesnesinin farkını bulmak için filter methodu kullanılması gerekir. A ve B setlerinin farkını (A B) bulmak için aşağıdaki kodlara göz atın

```jsx
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) = !B.has(num))
let C = new Set(c)

console.log(C)
---------------
Set(2) {1, 2}
```

### *Map*

**Boş map oluşturma**

```jsx
const map = new Map()
console.log(map)
---
Map(0) {}
```

### Bir diziden map oluşturma

```jsx
countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]
const map = new Map(countries)
console.log(map)
console.log(map.size)
--------------------
Map(3) {Finland = Helsinki, Sweden = Stockholm, Norway = Oslo}
3
```

### *Map’e değer ekleme*

```jsx
const countriesMap = new Map()
console.log(countriesMap.size)  0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap)
console.log(countriesMap.size)
------
Map(3) {Finland = Helsinki, Sweden = Stockholm, Norway = Oslo}
3
```

### *Map’ten değer alma*

```jsx
console.log(countriesMap.get('Finland'))
-------
Helsinki
```

### *Map içindeki anahtarı kontrol etme*

Eğer Map içinde bir anahtarın olup olmadığını kontrol etmek istiyorsak has methodunu kullanabiliriz bu method bize true veya false döndürür.

```jsx
console.log(countriesMap.has('Finland'))
------------------
true
```

Map içindeki bütün değerleri döngü kullanarak almak

```jsx
for (const country of countriesMap) {
  console.log(country)
}
------------
(2) [Finland, Helsinki]
(2) [Sweden, Stockholm]
(2) [Norway, Oslo]
```

```jsx
for (const [country, city] of countriesMap){
 console.log(country, city)
}
-----------------
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

## Day-11 notes (Destruciting and Spread)

Destructer, dizileri ve nesneleri açmanın ve farklı değişkenlere atamanın bir yoludur.

### ***Destructing Dizilerde Kullanımı***

```jsx
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree)
----
1 2 3
```

```jsx
const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names

  console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)
----
Asabeneh Brook David John
```

```jsx
const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

  console.log(e,pi,gravity, bodyTemp, boilingTemp)
-----
2.72 3.14 9.81 37 100
```

```jsx
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)
------
["HTML", "CSS", "JS", "React"]
["Node", "Express", "MongoDB"]
```

Eğer dizideki değerleri atlanması isteniyorsa virgül(,) işareti kullanmak gerekir. Virgül söz konusu indisteki değeri atlamaya yardımcı olur.

```jsx
const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [, secondPerson, , fourthPerson] = names // birinci ve üçüncü değer atlandı

  console.log(secondPerson, fourthPerson)
----
Brook John
```

Bu index için dizinin değeri tanımsız olduğunda varsayılan değeri kullanabiliriz.

```jsx
const names = [undefined, 'Brook', 'David']
let [
  firstPerson = 'Asabeneh',
  secondPerson,
  thirdPerson,
  fourthPerson = 'John'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)
-------------------------
Asabeneh Brook David John
```

Dizideki tüm elemanlara değişken atanmayabilir. İlkinin birkaçını yok edip ve kalanını spread operatörünü (...) kullanarak dizi olarak alabiliriz.

```jsx
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)
-------
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

### ***Iterasyon sırasında Destructuring***

```jsx
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
console.log(country, city)
}
--------------------
Finland Helsinki
Sweden Stockholm
Norway Oslo
```

```jsx
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

for(const [first, second, third] of fullStack) {
console.log(first, second, third)
}
------------------------
HTML CSS JS
Node Express MongoDB
```

### ***Objeye Destructuring işlemi yapma***

Destruct işleminde kullandığımız değişkenin adı, nesnenin anahtarı veya özelliği ile tamamen aynı olmalıdır. Aşağıdaki örneğe bakınız.

```jsx
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter } = rectangle

console.log(width, height, area, perimeter)
------------------
20 10 200 undefined
```

### ***Yapılandırma sırasında yeniden adlandırma***

```jsx
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle

console.log(w, h, a, p)
-------------------------
20 10 200 undefined
```

Eğer anahtar nesnede bulunmazsa, değişken tanımsız olarak atanır. Anahtar nesnede olmadığında bildirim sırasında varsayılan bir değer verilebilir. Aşağıdaki örneğe bakınız.

```jsx
const rectangle = {
  width: 20,
  height: 10,
  area: 200
}
let { width, height, area, perimeter = 60 } = rectangle

console.log(width, height, area, perimeter) //20 10 200 60
//Nesneyi değiştirelim:width=30 ve perimeter=80
```

```jsx
const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80
}
let { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter) //30 10 200 80
```

Anahtarları bir fonksiyon parametresi olarak destructuring işlemi uygulama. Bir dikdörtgen nesnesi alan ve bir dikdörtgenin çevresini döndüren bir fonksiyon oluşturalım.****

### **Destructuring olmadan obje parametresi**

```jsx
// Destructuring yok
const rect = {
  width: 20,
  height: 10
}
const calculatePerimeter = rectangle => {
  return 2 * (rectangle.width + rectangle.height)
}

console.log(calculatePerimeter(rect)) // 60
//Destructuring var
```

```jsx
//Başka örnek
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}
// person nesnesi hakkında destructuring kullanmayarak bilgi veren bir fonksiyon oluşturalım

const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))
```

### **Object parameter with destructuring**

```jsx
const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height)
}

console.log(calculatePerimeter(rect)) // 60
```

```jsx
// person nesnesi hakkında destructuring kullanarak bilgi veren bir fonksiyon oluşturalım
const getPersonInfo = ({
  firstName,
  lastName,
  age,
  country,
  job,
  skills,
  languages
}) => {
  const formattedSkills = skills.slice(0, -1).join(', ')
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}
console.log(getPersonInfo(person))
/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/
```

### **Iterasyon sırasında objeye destructuring işlemi uygulamak**

```jsx
const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}
```

```jsx
Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false
```

### **Spread veya Rest Operatörleri**

Bir diziye destructuring işlemi uygulandığında, kalan elemanları dizi olarak almak için yayılma operatörünü (...) kullanırız.Buna ek olarak, dizi öğelerini başka bir diziye yaymak için spread operatörünü kullanırız.****

### **Dizi ogelerinin geri kalanını almak için spread operatörü**

```jsx
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)
--------------
1 2 3
[4, 5, 6, 7, 8, 9, 10]
```

```jsx
const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, , ...nordicCountries] = countries

console.log(gem)
console.log(fra)
console.log(nordicCountries)
-------
Germany
France
["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
```

### **Diziyi kopyalamak için spread operatörü**

```jsx
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)
-------------
[0, 2, 4, 6, 8, 10]
[1, 3, 5, 7, 9]
[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]
```

```jsx
const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack)
--------------
["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]
```

### **Nesneyi kopyalamak için spread operatörü**

```jsx
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user}
console.log(copiedUser)
------------------------
{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}
```

Kopyalama sırasında nesneyi nitelendirme veya değiştirme

```jsx
const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)
```

### **Ok fonksiyonu ve spread operatörü**

Sınırsız sayıda argüman alan bir ok fonksiyonu yazmak istersek, bir yayılma spread kullanırız. Parametre olarak bir spread işleci kullanırsak, bir işlevi çağırdığımızda iletilen bağımsız değişken bir diziye dönüşecektir.

```jsx
const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5)
-------------------
[1, 2, 3, 4, 5]
```

```jsx
const sumAllNums = (...args) => {
  let sum = 0
  for (const num of args){
    sum += num
  }
  return sum
  
}

console.log(sumAllNums(1, 2, 3, 4, 5))
----------------------------
15
```

### TEKRAR NOTLARI

<aside>
💡 join() methoduna bakılacak.

</aside>

```jsx
// ÖNEMLİ BİR KULLANIM:
const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}
----------------------------
Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false
```

## Day-12 (Regular Expressions)

Düzenli ifadeler (RegExp) küçük bir programlama dilidir. Tüm programlama dillerinde mevcut olan bir şey JavaSciprt’e özel değil. Farklı veri türlerinde desenimizin olup olmadığını kontrol etmek için kullanılır. RegExp classından oluşturulabilir. Veya şu ikili slash arasına alma muhabbeti ile oluyor biliyorsunda biraz karışık şuan öğrenip örnek yapmak lazım. Bayrakta(slashlarda) g,i,m,s,u ya da y harfi kullanılır.

### ***RegExp parameters***

RegExp bir ifade iki parametre alır. Gerekli bir arama deseni(pattern) ve isteğe bağlı bir işaret(flag).

### ***Pattern***

Bir kalıp, bir metin veya bir çeşit benzerlik gösteren herhangi bir kalıp olabilir. Örneğin, bir e-postadaki spam kelimesi, bir e-postada aramakla ilgilendiğimiz bir kalıp olabilir veya bir telefon numarası biçimindeki numara, aramakla ilgilenebileceğimiz bir şey olabilir.

### *Flags*

Bayraklar, normal bir ifadede arama türünü belirleyen isteğe bağlı parametrelerdir. Bazı bayrakları görelim:

- g: tüm metinde bir model aramak anlamına gelen global bir bayrak
- i: büyük/küçük harf duyarsız bayrağı (hem küçük hem de büyük harfleri arar)
- m: çok satırlı

### CHATGPT NOTLARI:

Tabii ki, JavaScript dilinde Regular Expressions (Regex veya RegExp olarak kısaltılır) kullanarak metinlerde desenleri aramak, eşleştirmek ve değiştirmek için güçlü bir araç elde edersiniz. Regex, belirli bir metin kalıbını tanımlamak için kullanılan özel bir karakter dizisi kombinasyonudur. İşte JavaScript'te Regex kullanımı hakkında temel bilgiler:

1. **Regex Oluşturma**: Regex, bir **`RegExp`** nesnesi ile veya bir regex ifadesi ile oluşturulabilir. Örneğin:
    
    ```jsx
    // RegExp nesnesi ile
    var regex = new RegExp("pattern");
    
    // Kısa yazım ile
    var regex = /pattern/;
    
    ```
    
    Bu örneklerde **`"pattern"`**, aradığınız metin kalıbını temsil eder.
    
2. **Temel Metin Eşleştirme**:
    - **`/pattern/.test(string)`**: Verilen metinde belirtilen kalıbı arar ve bir sonuç döndürür (true veya false)
    - **`/pattern/.exec(string)`**: Metindeki ilk eşleşmeyi bulur ve bir dizi olarak döndürür.
    
    Örnek:
    
    ```jsx
    var text = "Bu bir örnek metindir.";
    var regex = /örnek/;
    console.log(regex.test(text));  // true
    console.log(regex.exec(text));  // ["örnek"]
    
    ```
    
3. **Metin Değiştirme**:
    - **`string.replace(regex, newString)`**: Verilen metindeki tüm eşleşmeleri **`newString`** ile değiştirir.
    
    Örnek:
    
    ```jsx
    var text = "Bu bir örnek metindir.";
    var regex = /örnek/;
    var yeniMetin = text.replace(regex, "örnekler");
    console.log(yeniMetin);  // "Bu bir örnekler metindir."
    
    ```
    
4. **Meta-Karakterler**: Regex ifadelerinde kullanılan özel karakterlerdir. Örneğin, **`.`** herhangi bir karakteri temsil eder, ***``**bir karakterin 0 veya daha fazla tekrarını belirtir, **`+`** bir karakterin 1 veya daha fazla tekrarını belirtir ve **`[]`** içinde belirtilen karakterlerden herhangi birini temsil eder.
    
    Örnek:
    
    ```jsx
    javascriptCopy code
    var text = "cat, bat, hat, rat";
    var regex = /[cbr]at/g;
    var matches = text.match(regex);
    console.log(matches);  // ["cat", "bat", "rat"]
    
    ```
    
5. **Düzenli İfadelerin Modifikatörleri**: Düzenli ifadeleri daha fazla özelleştirmek için modifikatörler kullanılabilir. Örneğin, **`i`** modifikatörü büyük/küçük harf duyarsız eşleşme sağlar, **`g`** modifikatörü metindeki tüm eşleşmeleri bulur.
    
    Örnek:
    
    ```jsx
    javascriptCopy code
    var text = "Bu bir örnek metindir. Örnek metin örneği.";
    var regex = /örnek/gi;
    var matches = text.match(regex);
    console.log(matches);  // ["örnek", "Örnek", "örnek"]
    
    ```
    

Bu temel bilgiler, JavaScript'te Regex kullanmanıza yardımcı olmalıdır. Daha karmaşık desenler ve işlemler için daha fazla detaylı bilgi ve uygulama gerekebilir, ancak bu temel konseptlerle başlamak iyi bir başlangıçtır.

## Day-14 (Error Handling)

### ***Error Handling***

JavaScript geniş yazılmış bir dildir. Bazı zamanlar, tanımsız bir değişkene erişmeye veya tanımsız bir işlevi çağırmaya çalıştığınızda bir çalışma zamanı hatası alırsınız.

JavaScript, Python veya Java'ya benzer, try-catch-finally bloğunu kullanarak çalışma zamanı hatalarını yakalamak için bir hata işleme mekanizması sağlar.

```jsx
try {
  // hata verilebilicek kod
} catch (err) {
  // bir hata oluşursa çalıştırılacak kod
} finally {
  // bir hatanın oluşup oluşmadığına bakılmaksızın yürütülecek kod
}
```

**try**: try bloğunda hata oluşturabilecek kodu yazın. try ifadesi, yürütülürken hatalar için test edilecek bir kod bloğu tanımlamamızı sağlar.

**catch**: Bir hata oluştuğunda catch bloğunda bir şeyler yapmak için kod yazın. Catch bloğu, size hata bilgisi verecek parametrelere sahip olabilir. Yakalama bloğu, bir hatayı günlüğe kaydetmek veya kullanıcıya belirli mesajları görüntülemek için kullanılır.

**finally**: finally bloğu, bir hata oluşmasından bağımsız olarak her zaman yürütülür. finally bloğu, kalan görevi tamamlamak veya try bloğunda hata oluşmadan önce değişmiş olabilecek değişkenleri sıfırlamak için kullanılabilir.

```jsx
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log(err)
}
-------------------------
ReferenceError: fistName is not defined
    at <anonymous>:4:20
```

```jsx
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.error(err) // we can use console.log() or console.error()
} finally {
  console.log('In any case I will be executed')
}
-------------------
ReferenceError: fistName is not defined
    at <anonymous>:4:20
In any case it  will be executed
```

Catch bloğu bir parametre alır. Catch bloğuna parametre olarak e, err veya error iletmek yaygındır. Bu parametre bir nesnedir ve isim ve mesaj anahtarlarına sahiptir. Adı ve mesajı kullanalım.

```jsx
try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name of the error', err.name)
  console.log('Error message', err.message)
} finally {
  console.log('In any case I will be executed')
}
--------------------------
Name of the error ReferenceError
Error message fistName is not defined
In any case I will be executed
```

throw: throw ifadesi özel bir hata oluşturmamıza izin verir. Bir dize, sayı, boolean veya bir nesne aracılığıyla yapabiliriz. Bir istisna atmak için throw ifadesini kullanın. Bir throw exception yazdığınızda, expression specifies değerini belirtir. Aşağıdakilerin her biri throw exception atar:

```jsx
throw 'Error2' // generates an exception with a string value
throw 42 // generates an exception with the value 42
throw true // generates an exception with the value true
throw new Error('Required') // generates an error object with the message of Required
```

```jsx
const throwErrorExampleFun = () => {
  let message
  let x = prompt('Enter a number: ')
  try {
    if (x == '') throw 'empty'
    if (isNaN(x)) throw 'not a number'
    x = Number(x)
    if (x < 5) throw 'too low'
    if (x > 10) throw 'too high'
  } catch (err) {
    console.log(err)
  }
}
throwErrorExampleFun()
```

### *Error Types*

• ReferenceError: Geçersiz bir referans oluşturur. Tanımlanmamış bir değişken kullanırsak bir ReferenceError atılır.

```jsx
let firstName = 'Asabeneh'
let fullName = firstName + ' ' + lastName

console.log(fullName)
---------
Uncaught ReferenceError: lastName is not defined
    at <anonymous>:2:35
```

• SyntaxError: Bir syntax(sözdizim) hatası oluşturur.

```jsx
let square = 2 x 2
console.log(square)

console.log('Hello, world")
----------------
Uncaught SyntaxError: Unexpected identifier
```

• TypeError: Bir type hatası oluşturur

```jsx
let num = 10
console.log(num.toLowerCase())
---------------------
Uncaught TypeError: num.toLowerCase is not a function
    at <anonymous>:2:17
```

## Day-15 (Classes)

JavaScript nesne tabanlı progralama dilidir. JavaScript'teki her şey, özellikleri ve yöntemleriyle bir nesnedir. Nesne oluşturmak için sınıf oluşturutuz. Sınıflar nesne oluşturucu (constructor) gibidir yada nesne oluşturmak için taslak gibidir. Nesne oluşturmak için sınıf oluştururuz. Sınıf, nesnenin niteliklerini ve davranışını tanımlarken, nesne ise sınıfı temsil eder.

Bir sınıf oluşturduğumuzda, istediğimiz zaman ondan nesne oluşturabiliriz. Bir sınıftan nesne oluşturmaya class instantiation(sınıf başlatma) denir.

Nesne bölümünde, bir nesne değişmezinin nasıl oluşturulacağını gördük. Nesne değişmezi bir singleton'dur. Benzer bir nesne elde etmek istiyorsak, onu yazmalıyız. Ancak sınıf, birçok nesne oluşturmaya izin verir. Bu, kod miktarını ve kod tekrarını azaltmaya yardımcı olur.

### **Sınıfın Tanımı ( Instantiation )**

JavaScript'te bir sınıf tanımlamak için class anahtar kelimesine, **CamelCase**'de bir sınıfın adına ve blok koduna (iki küme parantez) ihtiyacımız var. Kişi adında bir sınıf oluşturalım.

```jsx
// syntax
class ClassName {
    //  code goes here
}
```

```jsx
class Person {
  // code goes here
}
---------------
Person {}
```

### ***Sınıf Oluşturucu ( Constructor )***

Constructor, nesnemiz için bir taslak oluşturmamıza izin veren yerleşik bir fonksiyondur. Constructor fonksiyonu, constructor anahtar sözcüğü ile başlar ve ardından bir parantez gelir. Parantez içinde nesnenin özelliklerini parametre olarak iletiyoruz. Bu anahtar sözcüğü, constructor parametrelerini sınıfa eklemek için kullanırız.

Aşağıdaki Person sınıfı oluşturucusu firstName ve lastName özelliği oluşturur. Bu özellikler, *this* anahtar kelimesi kullanılarak Person sınıfına eklenir. *this* sınıfın kendinisi ifade eder.

```jsx
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person = new Person()

console.log(person)
---------------
Person {firstName: "Asabeneh", lastName: "Yetayeh"}
```

En başta da belirttiğimiz gibi bir sınıf oluşturduğumuzda, sınıfı kullanarak birçok nesne oluşturabiliriz. Şimdi, Person sınıfını kullanarak birden fazla kişi nesnesi oluşturalım.

```jsx
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)
```

Person sınıfını kullanarak 3 kişi nesnesi oluşturduk. Gördüğünüz gibi sınıfımızda çok fazla özellik yok,hadi biraz daha sınıfımızın içerisine özellik ekleyelim.

```jsx
class Person {
  constructor(firstName, lastName, age, country, city) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')

console.log(person1)
----------------
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
```

### ***Constructor ile varsayılan değerler***

Constructor fonksiyonun özellikleri,diğer normal fonksiyonlar gibi bir değere sahip olabilir.

```jsx
class Person {
  constructor(
    firstName = 'Asabeneh',
    lastName = 'Yetayeh',
    age = 250,
    country = 'Finland',
    city = 'Helsinki'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
}

const person1 = new Person() // it will take the default values
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1)
console.log(person2)
----------------------
Person {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki"}
Person {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Espoo"}
```

### ***Sınıf methodları***

Bir sınıfın içindeki constructor, nesne için bir tasklak oluşturmamıza izin veren yerleşik bir fonksiyondur. Bir sınıfta sınıf methodları oluşturabiliriz. Methodlar, sınıf içindeki JavaScript fonksiyonlarıdır. Bazı sınıf methodları oluşturalım.

```jsx
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getFullName())
console.log(person2.getFullName())
--------------------------
Asabeneh Yetayeh
Lidiya Tekle
```

### ***Başlangıç değeri olan özellikler***

Bazı özellikler için bir sınıf oluşturduğumuzda bir başlangıç değerine sahip olabiliriz. Örneğin bir oyun oynuyorsanız, başlama puanınız sıfır olacaktır. Yani, sıfır olan bir başlangıç puanımız veya herhangi bir puanımız olabilir. Diğer bir şekilde, bir başlangıç becerisine sahip olabiliriz ve bir süre sonra biraz beceri kazanacağız.

```jsx
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
--------------------------
0
0
[]
[]
```

Bir method regular , getter yada setter olabilir. getter ve setter yakından inceleyelim.

### *Getter*

get yöntemi, nesneden değere erişmemizi sağlar. Get anahtar sözcüğünü ve ardından bir fonksiyon kullanarak bir get methodu yazıyoruz. Özelliklere doğrudan nesneden erişmek yerine değeri almak için getter kullanırız. Aşağıdaki örneğe bakalım

```jsx
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
-----------
0
0
[]
[]
```

### *Setter*

Setter yöntemi, belirli özelliklerin değerini değiştirmemize izin verir. *set* anahtar kelimesini kullanarak bir fonksiyon kullanarak bir setter methodu yazıyoruz. Aşağıdaki örneğe bakalım.

```jsx
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.score)
console.log(person2.score)

console.log(person1.skills)
console.log(person2.skills)
```

Regular(normal) method ile getter arasındaki fark sizi şaşırtmasın. Normal bir method yapmayı biliyorsanız, iyisiniz. Person sınıfına getPersonInfo adlı normal method ekleyelim.

```jsx
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

console.log(person1.getScore)
console.log(person2.getScore)

console.log(person1.getSkills)
console.log(person2.getSkills)
console.log(person3.getSkills)

console.log(person1.getPersonInfo())
console.log(person2.getPersonInfo())
console.log(person3.getPersonInfo())
```

### ***Statik method***

Statik anahtar kelime, bir sınıf için statik bir yöntem tanımlar. Statik methodlar, sınıfın örneklerinde(instance) çağrılmaz. Bunun yerine, sınıfın kendisinde çağrılırlar. Bunlar genellikle nesneler oluşturma veya klonlama fonskiyonları gibi yardımcı fonksiyonlardır. Statik methoda bir örnek *Date.now()*'dur. *now* yöntemi doğrudan sınıftan çağrılır.

```jsx
class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index = Math.floor(Math.random() * skills.length)
    return skills[index]
  }
  static showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }

    let dateMonthYear = date + '.' + month + '.' + year
    let time = hours + ':' + minutes
    let fullTime = dateMonthYear + ' ' + time
    return fullTime
  }
}

console.log(Person.favoriteSkill())
console.log(Person.showDateTime())
```

Statik methodlar, yardımcı fonksiyonlar olarak kullanılabilen yöntemlerdir.****

### ***Inheritance (Kalıtım)***

Inheritance kullanarak ana sınıfın tüm özelliklerine ve yöntemlerine erişebiliriz. Bu, kod tekrarını azaltır. Hatırlarsanız, bir Person ana sınıfımız var ve ondan alt sınıflar yaratacağız. Alt sınıfımız öğrenci, öğretmen vb. olabilir.

```jsx
// syntax
class ChildClassName extends {
 // code goes here
}
```

Person ebeveyn sınıfından bir Student alt sınıfı oluşturalım.

```jsx
class Student extends Person {
  saySomething() {
    console.log('I am a child of the person class')
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())
-----------------------------
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: "Finland", country: 250, city: "Helsinki", …}
Asabeneh Yetayeh is Finland. He lives Helsinki, 250.
```

### ***Overriding method***

Gördüğünüz gibi Person Class'taki tüm yöntemlere erişmeyi başardık ve Student alt sınıfında kullandık. Ana yöntemlerini özelleştirebiliriz, bir alt sınıfa ek özellikler ekleyebiliriz. Özelleştirmek istiyorsak, methodlar ve ekstra özellikler eklemek istiyorsak, alt sınıf için constructor fonksiyonu kullanmamız gerekir. Constructor işlevinin içinde, üst sınıftan tüm özelliklere erişmek için super() işlevini çağırırız. Person sınıfının cinsiyeti yoktu ama şimdi öğrenci sınıfı için cinsiyet özelliğini verelim. Alt sınıfta aynı method adı kullanılıyorsa, üst yöntem geçersiz kılınır.

```jsx
class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)
    this.gender = gender
  }

  saySomething() {
    console.log('I am a child of the person class')
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender == 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const s1 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
)
const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'
s2.setSkill = 'Organizing'

console.log(s1)

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log(s1.getPersonInfo())

console.log(s2.saySomething())
console.log(s2.getFullName())
console.log(s2.getPersonInfo())
----------------------
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
I am a child of the person class
Asabeneh Yetayeh
Student {firstName: "Asabeneh", lastName: "Yetayeh", age: 250, country: "Finland", city: "Helsinki", …}
Asabeneh Yetayeh is 250. He lives in Helsinki, Finland. He knows HTML, CSS and JavaScript
I am a child of the person class
Lidiya Tekle
Student {firstName: "Lidiya", lastName: "Tekle", age: 28, country: "Finland", city: "Helsinki", …}
Lidiya Tekle is 28. She lives in Helsinki, Finland. He knows Planning, Managing and Organizing
```

## Day-16 (JSON)

### **JSON**

JSON, javascript nesne kavramı anlamına gelir. JSON syntaxı(sözdizim), JavaScript nesne gösterimi sözdiziminden türetilmiştir, ancak JSON biçimi yalnızca metin veya dizedir. JSON, depolama ve taşıma için hafif bir veri formatıdır. JSON, çoğunlukla bir sunucudan bir istemciye veri gönderildiğinde kullanılır. JSON, XML'e göre kullanımı daha kolay bir alternatiftir.

```jsx
{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}
```

Yukarıdaki JSON örneği, normal bir nesneden çok farklı değildir. O zaman, fark nedir? Aradaki fark, bir JSON nesnesinin anahtarının çift tırnaklı olması veya bir dize olması gerektiğidir. JavaScript Object ve JSON, JSON'u Object ve Object'i JSON olarak değiştirebileceğimize çok benzer.

Yukarıdaki örneği daha detaylı görelim, küme paranteziyle başlıyor. Kıvrımlı parantez içinde bir değer dizisine sahip "users" anahtarı vardır. Dizinin içinde farklı nesnelerimiz var ve her nesnenin anahtarı var, her anahtarın çift tırnak işareti olması gerekiyor. Örneğin, sadece firstName yerine "firstNaMe" kullanıyoruz, ancak nesnede anahtarları çift tırnak işaretleri olmadan kullanıyoruz. Bu, bir nesne ile bir JSON arasındaki en büyük farktır. JSON hakkında daha fazla örnek görelim.

```jsx
{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
```

### *JSON’u JavaScript Nesnesine Dönüştürme*

Çoğunlukla JSON verilerini HTTP yanıtından veya bir dosyadan alırız, ancak JSON'u bir dize olarak saklayabiliriz ve gösterim amacıyla Object olarak değiştirebiliriz. JavaScript'te *JSON* anahtar sözcüğü *parse()* ve *stringify()* yöntemlerine sahiptir. JSON'u bir nesneye dönüştürmek istediğimizde, *JSON.parse()* kullanarak JSON'u ayrıştırırız. Nesneyi JSON olarak değiştirmek istediğimizde *JSON.stringify()* kullanırız.****

```jsx
JSON.parse(json[, reviver])
// json or text , the data
// reviver opsiyonel callback fonksiyonudur
/* JSON.parse(json, (key, value) => {

})
*/
```

```jsx
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, undefined, 4)
console.log(usersObj)
```

### ***JSON.parse() ile bir reviver fonksiyonu kullanma***

Reviver fonksiyonunu formatlayıcı olarak kullanmak için isim ve soyadı değerini formatlamak istediğimiz tuşları koyuyoruz. Diyelim ki, JSON verilerinin ad ve soyadını biçimlendirmekle ilgileniyoruz.

```jsx
const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)
```

*JSON.parse()* kullanımı çok kullanışlıdır. İsteğe bağlı parametreyi geçmenize gerek yok, sadece gerekli parametre ile kullanabilirsiniz ve çok şey başaracaksınız.

### ***Nesneyi JSON'a Dönüştürme***

Nesneyi JSON olarak değiştirmek istediğimizde *JSON.stringify()* kullanırız. stringify yöntemi, bir gerekli parametre ve iki isteğe bağlı parametre alır. Değiştirici filtre olarak kullanılır ve boşluk bir girintidir. Nesnedeki anahtarlardan herhangi birini filtrelemek istemiyorsak, tanımsız olarak geçebiliriz.

```jsx
JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver opsiyonel callback fonksiyonudur
```

```jsx
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt) // text, JSON- anlamına gelir, çünkü json bir nesnenin string biçimidir.
```

### ***JSON.stringify ile Filtre Dizisi Kullanma***

Şimdi, replacerı filtre olarak kullanalım. Kullanıcı nesnesinin uzun bir anahtar listesi var ama biz sadece birkaçıyla ilgileniyoruz. Örnekte gösterildiği gibi dizide tutmak istediğimiz anahtarları koyuyoruz ve replacer yerine kullanıyoruz.

```jsx
const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
console.log(txt)
```

```jsx
{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250
}
```

## Day-17 (Web Storages)

### ***HTML5 Web Storage(Depolama)***

Web Depolama (sessionStorage ve localStorage), geleneksel tanımlama bilgilerine göre önemli avantajlar sunan yeni bir HTML5 API'sidir. HTML5'ten önce, uygulama verilerinin her sunucu isteğine dahil olan çerezlerde saklanması gerekiyordu. Web depolaması daha güvenlidir ve büyük miktarda veri web sitesi performansını etkilemeden local(yerel) olarak depolanabilir. Çerezlerin birçok web tarayıcısında veri depolama sınırı, çerez başına yaklaşık 4 KB'dir. Web Storage çok daha büyük verileri (en az 5MB) depolayabiliriz ve asla sunucuya aktarılmaz. Aynı veya bir kaynaktan gelen tüm siteler aynı verileri depolayabilir ve bunlara erişebilir.

Depolanan verilere JavaScript kullanılarak erişilebilir; bu, geleneksel olarak sunucu tarafı programlama ve ilişkisel veritabanlarını içeren birçok şeyi yapmak için istemci tarafı komut dosyası oluşturma yeteneğinden yararlanmanızı sağlar. İki Web Depolama nesnesi vardır:

- sessionStorage
- localStorage

localStorage, sessionStorage'a benzer, ancak localStorage'da depolanan verilerin sona erme süresi olmamasına rağmen, sessionStorage'da depolanan verilerin sayfa oturumu sona erdiğinde, yani sayfa kapatıldığında silinmesi dışında.

localStorage veya sessionStorage'da depolanan verilerin sayfanın protokolüne özel olduğuna dikkat edilmelidir.

Anahtarlar ve değerler her zaman dizelerdir (nesnelerde olduğu gibi tamsayı tuşlarının otomatik olarak dizelere dönüştürüleceğini unutmayın).

### ***sessionStorage***

sessionStorage yalnızca tarayıcı sekmesinde veya pencere oturumunda kullanılabilir. Verileri tek bir web sayfası oturumunda depolamak için tasarlanmıştır. Bu, pencere kapatılırsa oturum verilerinin kaldırılacağı anlamına gelir. sessionStorage ve localStorage benzer yöntemlere sahip olduğundan, sadece localStorage'a odaklanacağız.****

### ***localStorage***

HTML5 localStorage, son kullanma verisi olmadan tarayıcıda veri depolamak için kullanılan web depolama API'sinin para birimidir. Veriler, tarayıcı kapatıldıktan sonra bile tarayıcıda mevcut olacaktır. localStorage, tarayıcı oturumları arasında bile tutulur. Bu, tarayıcı kapatılıp yeniden açıldığında ve ayrıca sekmeler ve pencereler arasında anında verilerin hala mevcut olduğu anlamına gelir.

Web Depolama verileri, her iki durumda da farklı tarayıcılar arasında mevcut değildir. Örneğin, Firefox'ta oluşturulan depolama nesnelerine tıpkı çerezler gibi Internet Explorer'da erişilemez. Yerel depolama üzerinde çalışmak için beş yöntem vardır: *setItem(), getItem(), removeItem(), clear(), key()*

### ***Web Storages Kullanım Durumu(alanlar)***

Web Depolarının bazı kullanım durumları şunlardır:

- verileri geçici olarak depolamak
- kullanıcının alışveriş sepetine koyduğu ürünleri kaydetme
- veriler, sayfa istekleri, birden çok tarayıcı sekmesi arasında ve ayrıca localStorage kullanılarak tarayıcı oturumları arasında kullanılabilir hale getirilebilir
- localStorage kullanılarak tamamen çevrimdışı olarak kullanılabilir
- Web Depolama, sonraki isteklerin sayısını en aza indirmek için istemcide bazı statik veriler depolandığında harika bir performans kazancı olabilir. Görüntüler bile Base64 kodlaması kullanılarak dizelerde saklanabilir.
- kullanıcı kimlik doğrulama yöntemi için kullanılabilir

Yukarıda bahsedilen örnekler için localStorage kullanmak mantıklıdır. O halde sessionStorage'ı ne zaman kullanmamız gerektiğini merak ediyor olabilirsiniz.

Bazı durumlarda, pencere kapanır kapanmaz verilerden kurtulmak istiyoruz. Ya da uygulamanın başka bir pencerede açık olan aynı uygulamaya müdahale etmesini istemiyorsak. Bu senaryolar en iyi şekilde sessionStorage ile sunulur.

Şimdi, bu Web Depolama API'lerinden nasıl yararlanılacağını görelim.

### ***HTML5 Web Depolama Nesneleri***

HTML web depolama, istemcide veri depolamak için iki nesne sağlar:

- window.localStorage - son kullanma tarihi olmayan verileri depolar
- window.sessionStorage - bir oturum için veri depolar (tarayıcı sekmesi kapatıldığında veriler kaybolur) Çoğu modern tarayıcı Web Depolamayı destekler, ancak localStorage ve sessionStorage için tarayıcı desteğini kontrol etmek iyidir. Web Depolama nesneleri için mevcut yöntemleri görelim.

Web Depolama Nesneleri:

- *localStorage* - localStorage nesnesini görüntülemek için
- *localStorage.clear()* - localStrogedaki her şeyi kaldırmak için
- *localStorage.setItem()* - verileri localStorage'da depolamak için. Bir anahtar ve bir değer parametresi alır.
- *localStorage.getItem()* - localStorage'da depolanan verileri görüntülemek için. Parametre olarak bir anahtar alır.
- *localStorage.removeItem()* - depolanan öğeyi localStorage'dan kaldırmak için. Parametre olarak bir anahtar alır.
- *localStorage.key()* - localStorage'da depolanan verileri görüntülemek için. Parametre olarak indeks alır.

### *Öğeyi localStorage’a ayarlama.*

Bir localStorage'da saklanacak verileri ayarladığımızda, bir dize olarak saklanacaktır. Bir diziyi veya nesneyi depoluyorsak, orijinal verinin dizi yapısını veya nesne yapısını kaybetmediğimiz sürece, formatı korumak için önce onu dizgelendirmemiz gerekir.

Verileri localStorage'da *localStorage.setItem* yöntemini kullanarak depolarız.

```jsx
//syntax
localStorage.setItem('key', 'value')
```

• String ifadeleri localStorage üzerinde saklama

```jsx
localStorage.setItem('firstName', 'Asabeneh') // değer string olduğundan onu stringleştirmeyiz
console.log(localStorage)
----------------------
Storage {firstName: 'Asabeneh', length: 1}
```

• Number ifadeleri localStorage üzerinde saklama

```jsx
localStorage.setItem('age', 200)
console.log(localStorage)
-----------------------
Storage {age: '200', firstName: 'Asabeneh', length: 2}
```

• Bir diziyi localStorage'da depolamak. Bir diziyi, nesneyi veya nesne dizisini depoluyorsak, önce nesneyi dizgelendirmemiz gerekir. Aşağıdaki örneğe bakın.

```jsx
const skills = ['HTML', 'CSS', 'JS', 'React']
//Biçimi korumak için önce skills dizisinin dizilmesi gerekir.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)
--------------------
Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}
```

```jsx
let skills = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillJSON)
```

• Bir nesneyi localStorage'da depolamak. Nesneleri bir localStorage'a depolamadan önce, nesnenin dizelenmesi gerekir.

```jsx
const user = {
  firstName: 'Asabeneh',
  age: 250,
  skills: ['HTML', 'CSS', 'JS', 'React']
}

const userText = JSON.stringify(user, undefined, 4)
localStorage.setItem('user', userText)
```

### ***Öğeyi localStorage'dan alma***

*localStorage.getItem()* yöntemini kullanarak yerel depodan veri alıyoruz..

```jsx
//syntax
localStorage.getItem('key')
```

```jsx
let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
let skills = localStorage.getItem('skills')
console.log(firstName, age, skills)
```

```jsx
'Asabeneh', '200', '['HTML','CSS','JS','React']'
```

Gördüğünüz gibi skills string formatında. Normal diziye ayrıştırmak için JSON.parse() kullanalım.

```jsx
let skills = localStorage.getItem('skills')
let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)
-------------------
['HTML','CSS','JS','React']
```

### ***localStorage'ı temizleme***

Clear yöntemi, yerel depolamada depolanan her şeyi temizleyecektir.

```jsx
localStorage.clear()
```

## Day-18 (Promises)

Biz insanlar, belirli bir zamanda bir faaliyette bulunma sözü veririz veya alırız. Sözümüzü tutarsak başkalarını mutlu ederiz, ama sözümüzü tutmazsak hoşnutsuzluklara yol açabilir. JavaScript'te promise(söz) vermenin yukarıdaki örneklerle ortak bir yanı vardır.

Bir promise, JavaScript'te asynchronous işlemleri işlemenin bir yoludur. Asynchronous bir eylemin nihai başarı değeri veya başarısızlık nedeni ile işleyicilere izin verir. Bu, asynchronous yöntemlerin synchronous yöntemler gibi değerler döndürmesine olanak tanır: asynchronous yöntem, nihai değeri hemen döndürmek yerine, gelecekte bir noktada değeri sağlama sözü verir.

Bir Promise şu durumlardan birindedir:

- pending: başlangıç durumunda, ne tamamlandı ne de reddedildi.
- fulfilled: işlemin başarıyla tamamlandığı anlamına gelir.
- rejected: işlemin başarısız olduğu anlamına gelir.

Bekleyen bir promise ya bir değerle yerine getirilebilir(fulfilled) ya da bir sebeple (error) rejected olabilir. Bu seçeneklerden herhangi biri gerçekleştiğinde, bir sözün o zaman yöntemiyle sıraya alınan ilişkili işleyiciler çağrılır. (Karşılık gelen bir işleyici(handler) eklendiğinde promise zaten fulfilled veya rejected ise, işleyici(handler) çağrılır, bu nedenle asynchronous bir işlemin tamamlanması ile işleyicilerinin eklenmesi arasında bir yarış koşulu yoktur.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained.

### *Callbacks*

Promise çok iyi anlamak için önce callback mantığını anlayalım. Aşağıdaki callback örneklerini görelim. Aşağıdaki kod bloklarında, callback ve promise arasındaki farkları fark edeceksiniz.

- callback Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err parameter is false, there will not be error other wise it will return an error.

In this case the err has a value and it will return the err block.

```jsx
//Callback
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback('It did not go well', skills)
  }, 2000)
}

const callback = (err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}

doSomething(callback)
-----------------
// 2 saniye sonra yazdırıcak
It did not go well
```

Bu durumda hata yanlıştır ve sonuç olan else bloğunu döndürür.

```jsx
const doSomething = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

doSomething((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
})
-----------------
// 2 saniye sonra yazdırıcak
["HTML", "CSS", "JS"]
```

### ***Promise yapıcısı***

Promise yapıcısını kullanarak bir promise oluşturabiliriz. `new` anahtar kelimesini, ardından `Promise` kelimesini ve ardından bir parantez kullanarak yeni bir promise oluşturabiliriz. Parantez içinde bir `callback` işlevi alır. Promise callback fonksiyonu, `resolve` ve `reject` fonksiyonları olmak üzere iki parametreye sahiptir.

```jsx
// syntax
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})
```

```jsx
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.length > 0) {
      resolve(skills)
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.log(error))
-----------
["HTML", "CSS", "JS"]
```

Yukarıdaki promise kararlılıkla yerine getirilmiştir. Promise'ın reject ile kararlaştırıldığı başka bir örnek verelim.

```jsx
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    if (skills.includes('Node')) {
      resolve('fullstack developer')
    } else {
      reject('Something wrong has happened')
    }
  }, 2000)
})

doPromise
  .then(result => {
    console.log(result)
  })
  .catch(error => console.error(error))
----------------------
Something wrong has happened
```

### ***Fetch API***

Fetch API'si, kaynakları (ağ genelindekiler dahil) almak için bir interface sağlar. XMLHttpRequest kullanan herkese tanıdık gelecektir, ancak yeni API daha güçlü ve esnek bir özellik seti sağlar. Bu görevde, url ve APIS istemek için fetch kullanacağız. Buna ek olarak, fetch API'sini kullanarak ağ kaynaklarına erişimde promise kullanım durumunu gösterelim.

```jsx
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // API verilerine JSON olarak erişme
  .then(data => {
    // verileri almak
    console.log(data)
  })
  .catch(error => console.error(error)) // yanlış bir şey olursa işleme hatası
```

### ***Async ve Await***

Async ve Await, promise yerine getirmenin zarif bir yoludur. Anlaşılması kolay ve yazması temiz.

```jsx
const square = async function (n) {
  return n * n
}

square(2)
-------------
Promise {<resolved>: 4}
```

Bir fonksiyonun önündeki async kelimesi, fonksiyonun bir promise vereceği anlamına gelir. Yukarıdaki kare fonksiyonu bir değer yerine bir promise verir.

Promise gelen değere nasıl erişiriz? Promise verilen değere erişmek için, wait anahtar sözcüğünü kullanacağız.

```jsx
const square = async function (n) {
  return n * n
}
const value = await square(2)
console.log(value)
----------------------
4
```

Şimdi, yukarıdaki örnekte de görebileceğiniz gibi, bir fonksiyonun önüne async yazarak bir promise oluşturun ve bir promise değer almak için bekliyoruz. Async ve await birlikte çalışır, biri olmadan diğeri olamaz.

API verilerini hem promise yöntemini kullanarak hem de async ve await yöntemini kullanarak getirelim.

• promise

```jsx
const url = 'https://restcountries.com/v2/all'
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
```

• async ve await

```jsx
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()
```

## Day-19 (Closure)

JavaScript, bir outer(dış) fonksiyonu içine yazma fonksiyonu izni verir. İstediğimiz kadar inner(iç) fonksiyon yazabiliriz. Inner fonksiyon, outer fonksiyonun değişkenlerine erişiyorsa, buna closure(kapatma) denir.

```jsx
function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
-------------
1
2
3
```

Inner(iç) fonksiyonlara daha fazla örnek vermek gerekirse

```jsx
function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)
-----------------
1
0
```

## Day-20 (Clean Code)

JavaScript stil kılavuzu, JavaScript kodunun nasıl yazılması ve düzenlenmesi gerektiğini söyleyen bir dizi standarttır. Bu bölümde JavaScript rehberlerinden ve temiz kod nasıl yazılırdan bahsedeceğiz.

JavaScript bir programlama dilidir ve insan dili gibi syntax(sözdizimi) yapısına sahiptir. JavaScript'in sözdizimi, kolaylık ve basitlik adına belirli bir stil yönergesini izleyerek yazılmalıdır.

### ***Neden stil kılavuzuna ihtiyacımız var?***

Çok uzun zamandır tek başına kodlama yapıyorsun ama şimdi bir ekip halinde çalışıyorsun gibi düşünelim. Tek çalıştığın sürece nasıl kod yazdığınız bu kadar önemli değil, ancak 10 veya 20 veya daha fazla geliştirici ekibinde bir projede ve aynı kod tabanı üzerinde çalıştığınızda, kod dağınık ve yönetilmesi zor olacaktır. İzlenecek herhangi bir yönerge yoktur.

Kendi yönergelerinizi ve sözleşmelerinizi geliştirebilir veya iyi geliştirilmiş yönergeleri de uyarlayabilirsiniz. Bize en yaygın bilinen yönergeleri bildirin. En yaygın JavaScript Stil Kılavuzları

- Airbnb JavaScript Style Guide
- JavaScript Standard Style Guide
- Google JavaScript Style Guide

### ***Airbnb JavaScript Style Guide***

Airbnb, internetteki en popüler JavaScript stil kılavuzlarından birine sahiptir. JavaScript'in neredeyse her yönünü de kapsar ve birçok geliştirici ve şirket tarafından benimsenmiştir. [Airbnb stil rehberine](https://github.com/airbnb/javascript) göz atabilirsiniz. ben de denemenizi tavsiye ederim. Stillerinin kullanımı çok kolay ve anlaşılması kolaydır.****

### *Standard JavaScript Style Guide*

Bu kılavuz Airbnb kadar popüler değil ama bakmaya değer. [Stil kılavuzlarında](https://standardjs.com/) noktalı virgülü kaldırdılar.

### *Google JavaScript Style Guide*

Google'ın yönergesi hakkında pek bir şey söylemiyorum ve kullanmadım, bunun yerine şu [link'e](https://google.github.io/styleguide/jsguide.html) bir göz atmanızı öneririm.

### *JavaScript Kodlama Kuralları*

Bu görevde ayrıca genel JavaScript kodlama yazım kurallarını ve kılavuzlarını kullandık. Kodlama kuralları, bir kişi, bir ekip veya bir şirket tarafından geliştirilen programlama için stil yönergeleridir.

Kodlama kuralları aşağıdakilere yardımcı olur:

- temiz kod yazmak
- kod okunabilirliğini geliştirmek
- kodun yeniden kullanılabilirliğini ve sürdürülebilirliğini geliştirmek için

Kodlama kuralları şunları içerir:

- Değişkenler için adlandırma ve bildirim kuralları
- Fonksiyonlar için adlandırma ve bildirim kuralları
- Boşluk, girinti ve yorumların kullanımına ilişkin kurallar
- Programlama uygulamaları ve ilkeleri

### *30DaysOfJavaScript'te kullanılan kurallar*

Bu meydan okumada normal JavaScript kuralını takip ediyoruz, ancak yazma tercihimi de ekledim.

- Değişkenler ve fonksiyonlar için camelCase kullandık.
- Tüm değişken isimleri bir harfle başlar.
- Sabitler, diziler, nesneler ve işlevler için *const* kullanmayı seçtik. Çift alıntı yerine tek tırnak veya ters tik kullanmayı tercih ettik. Tek alıntı moda oluyor.
- Kodumuzdan noktalı virgülleri de kaldırdık ama bu kişisel tercih meselesidir.
- Aritmetik operatörler, atama operatörleri ve virgülden sonra boşluk
- Fonksiyon bildirimi yerine arrow function
- Fonksiyon bir satır ise, implicit return yerine explicit return
- Bir nesnenin son değerinin sonunda virgül yok
- Daha uzun versiyon yerine +=, -=, *= /=, **= bunu tercih ediyoruz
- console.log()'u kullandığımızda, konsolun nereden geldiğini belirlemek için bir etiket dizgisi ile yazdırmak iyidir.

## Day-21 (DOM)

HTML belgesi JavaScript nesnesi olarak yapılandırılmıştır. Her HTML elementi farklı özelliklere sahiptir ve bunları manipüle etmek için kullanılabilir. JavaScript kullanarak HTML elementlerini almak, oluşturmak, eklemek veya kaldırmak mümkündür. Örnekler aşağıda incelenebilir. JavaScript ile HTML elementi seçmek, CSS ile seçmek ile benzerdir. HTML elementini seçmek için etiket adı, id, sınıf adı veya diğer öznitelikler kullanılır.

### ***Elementi al***

JavaScript kullanarak zaten oluşturulmuş elementlere veya elementlere erişebiliriz. Elementlere erişmek veya almak için farklı metodlar kullanırız. Aşağıdaki kodda dört *h1* elementi var. *h1* elementlerine erişmek için farklı metodları inceleyelim.

```jsx
<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Document Object Model</title>
    </head>
    <body>

     <h1 class='title' id='first-title'>First Title</h1>
     <h1 class='title' id='second-title'>Second Title</h1>
     <h1 class='title' id='third-title'>Third Title</h1>
     <h1></h1>

    </body>
  </html>
```

### ***Etiket adına göre elementleri almak***

***getElementsByTagName():*** bir etiket adını dize olarak alan bir parametre alır ve bu yöntem bir HTMLCollection nesnesi döndürür. HTMLCollection bir HTML elementlerinin array benzeri bir nesnesidir. Uzunluk özelliği koleksiyonun boyutunu sağlar. Bu yöntemi kullandığımızda, index kullanarak veya her bir öğeyi tek tek geçerek bireysel elementlere erişiriz. HTMLCollection tüm dizi yöntemlerini desteklemez, bu yüzden forEach yerine düzenli for döngüsü kullanmalıyız.

```jsx
// syntax
document.getElementsByTagName('tagname')
```

```jsx
const allTitles = document.getElementsByTagName('h1')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

### ***Sınıf adına göre elementleri almak***

***getElementsByClassName()*** metodu bir HTMLCollection nesnesi döndürür. HTMLCollection, HTML elementlerinin dizi benzeri bir listesidir. Uzunluk özelliği koleksiyonun boyutunu sağlar. Tüm HTMLCollection elementlerini dolaşmak mümkündür. Örnek aşağıda gösterilmektedir.

```jsx
//syntax
document.getElementsByClassName('classname')
```

```jsx
const allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
```

### ***Id'ye göre bir elementi almak***

***getElementsById()*** tek bir HTML elementine yönelir. Id'yi # olmadan bir argüman olarak geçiririz.

```jsx
//syntax
document.getElementById('id')
```

```jsx
let firstTitle = document.getElementById('first-title')
	console.log(firstTitle) // <h1>First Title</h1>
```

### ***querySelector yöntemi kullanarak elementleri almak***

*document.querySelector* yöntemi etiket adı, kimlik veya sınıf adına göre HTML veya HTML elementlerini seçebilir.

***querySelector:*** etiket adı, kimlik veya sınıf tarafından seçilen HTML elementini seçmek için kullanılabilir. Etiket adı kullanılırsa, yalnızca ilk element seçilir.

```jsx
let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle = document.querySelector('#first-title') // select id with first-title
let firstTitle = document.querySelector('.title') // select the first available element with class title
```

***querySelectorAll:*** etiket adı veya sınıf tarafından seçilen html elementlerini seçmek için kullanılabilir. Döndürülen nodeList bir dizi benzeri nesne olup, dizi yöntemlerini destekler. Her nodeList öğesini dolaşmak için ***for döngüsü*** veya ***forEach*** kullanabiliriz.

### ***Öznitelik eklemek***

HTML açılır etiketinde bir öznitelik eklenir ve element hakkında ek bilgi verir. Yaygın HTML öznitelikleri: id, class, src, style, href,disabled, title, alt. Dördüncü başlık için id ve class ekleyelim.

```jsx
const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
```

### ***setAttribute() metodu kullanarak öznitelik ekleme***

***setattribute()*** metodu, herhangi bir html öznitelik ekler. İki parametre alır: öznitelik türü ve öznitelik adı. Dördüncü başlık için class ve id özniteliği ekleyelim.

```jsx
const titles = document.querySelectorAll('h1')
titles[3].setAttribute('class', 'title')
titles[3].setAttribute('id', 'fourth-title')
```

### ***SetAttribute olmadan öznitelik ekleme***

Normalde bir nitelik atamak için normal nesne atama yöntemini kullanabiliriz ancak bu tüm elemanlar için geçerli olmayabilir. Bazı nitelikler DOM nesnesi özellikleridir ve direk olarak atanabilirler. Örneğin, id ve class gibi.

```jsx
//another way to setting an attribute
titles[3].className = 'title'
titles[3].id = 'fourth-title'
```

### ***classList kullanarak sınıf ekleme***

classList yöntemi ek sınıf eklemek için iyi bir yöntemdir. Eğer bir sınıf var ise, orijinal sınıfı geçersiz kılmaz, aksine eleman için ek sınıf ekler.

```jsx
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')
```

### ***remove kullanarak sınıfı kaldırma***

Eklemeye benzer şekilde, bir elemandan sınıfı da kaldırabiliriz. Bir elemandan belirli bir sınıfı kaldırabiliriz.

```jsx
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.remove('title', 'header-title')
```

### ***HTML elemanına metin ekleme***

Birçok insan *textContent* ve *innerHTML* arasında karışır. *textContent* bir HTML elemanına metin eklemek için tasarlanmıştır ancak innerHTML bir metin veya HTML elemanı veya elemanları bir çocuk olarak ekleyebilir.****

### ***Metin İçeriği***

Biz bir metin atamak için *textContent* HTML nesne özelliğini kullanırız.

```jsx
const titles = document.querySelectorAll('h1')
titles[3].textContent = 'Fourth Title'
```

***Inner HTML***

Bir ebeveyn elemana tamamen yeni bir child içeriği eklemek veya değiştirmek istediğimizde innerHTML özelliğini kullanırız. Atadığımız değer HTML elemanlarından oluşan bir dizi olacaktır.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul></ul>
    </div>
    <script>
    const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists
    </script>
  </body>
</html>
```

innerHTML özelliği, bir üst elemanın tüm çocuklarını kaldırmamıza da olanak tanır. removeChild() kullanmak yerine aşağıdaki yöntemi tavsiye ederim.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript for Everyone:DOM</title>
  </head>
  <body>
    <div class="wrapper">
        <h1>Asabeneh Yetayeh challenges in 2020</h1>
        <h2>30DaysOfJavaScript Challenge</h2>
        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>
    <script>
  const ul = document.querySelector('ul')
  ul.innerHTML = ''
    </script>
  </body>
</html>
```

### ***Style ekleme***

### ***Style Rengi Ekleme***

Başlıklarımıza biraz stil ekleyelim. Eğer elemanın indisi çift ise ona yeşil renk veririz, aksi halde kırmızı.

```jsx
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.color = 'green'
  } else {
    title.style.color = 'red'
  }
})
```

### ***Arka plan rengi ekleme***

Başlıklarımıza biraz stil ekleyelim. Eğer elemanın indisi çift ise ona yeşil renk veririz, aksi halde kırmızı.

```jsx
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})
```

### ***Yazı tipi boyutu ekleme***

Başlıklarımıza biraz stil ekleyelim. Eğer elemanın indisi çift ise ona 20px veririz, aksi halde 30px

```jsx
const titles = document.querySelectorAll('h1')
titles.forEach((title, i) => {
  title.style.fontSize = '24px' // all titles will have 24px font size
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})
```

## Day-22 (Document Object Model-2)

### ***Element Oluşturma***

HTML element oluşturmak için etiket adını kullanırız. JavaScript kullanarak HTML element oluşturmak oldukça basittir . *document.createElement()* metodunu kullanırız. Bu metod bir HTML element etiket adını string olarak alır.

```jsx
// syntax
document.createElement('tagname')
```

```jsx
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        let title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = 'Creating HTML element DOM Day 2'

        console.log(title)
    </script>
</body>

</html>
```

### ***Bir üst elemente child ekleme***

Oluşturduğumuz elementi HTML'de görmek için, üst element olarak child olarak eklememiz gerekir. HTML'de body'sine *document.body* ile erişebiliriz. *document.body* *appendChild()* metodunu destekler. Aşağıdaki örneğe bakın.

```jsx
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>

    <script>
        // creating multiple elements and appending to parent element
        let title
        for (let i = 0; i < 3; i++) {
            title = document.createElement('h1')
            title.className = 'title'
            title.style.fontSize = '24px'
            title.textContent = i
            document.body.appendChild(title)
        }
    </script>
</body>
</html>
```

### ***Bir üst ebeveyn(kapsar element) bir child elementi kaldırma***

HTML oluşturduktan sonra, element veya elementleri kaldırmak isteyebiliriz ve *removeChild()* metodunu kullanabiliriz.

```jsx
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        const lists = document.querySelectorAll('li')
        for (const list of lists) {
            ul.removeChild(list)

        }
    </script>
</body>

</html>
```

Önceki bölümde gördüğümüz gibi, bir üst elementin tüm iç HTML elementlerini veya child elementleri *innerHTML* metodu ve özelliklerini kullanarak ortadan kaldırmak için daha iyi bir yol mevcut.

```jsx
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Removing child Node</h1>
    <h2>Asabeneh Yetayeh challenges in 2020</h1>
    <ul>
        <li>30DaysOfPython Challenge Done</li>
        <li>30DaysOfJavaScript Challenge Done</li>
        <li>30DaysOfReact Challenge Coming</li>
        <li>30DaysOfFullStack Challenge Coming</li>
        <li>30DaysOfDataAnalysis Challenge Coming</li>
        <li>30DaysOfReactNative Challenge Coming</li>
        <li>30DaysOfMachineLearning Challenge Coming</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
    </script>
</body>

</html>
```

## Day-23 (DOM, Event Listeners)

### ***Event Listeners***

Ortak HTML olayları: tıklama, değişiklik, fare üzerine gelme, fareyi elementin üzerinden çıkarma, tuşa basma, tuştan el çekme, yükleme.

Herhangi bir DOM nesnesine olay dinleyici yöntemi ekleyebiliriz. HTML öğelerinde farklı olay türlerini dinlemek için **addEventListener()** yöntemini kullanırız. *addEventListener()* yöntemi, bir olay dinleyicisi ve geri çağırma işlevi olmak üzere iki argüman alır.

```jsx
selectedElement.addEventListener("eventlistner", function (e) {
    // olaydan sonra olmasını istediğiniz aktivite burada olacak
});
// or

selectedElement.addEventListener("eventlistner", (e) => {
    // olaydan sonra olmasını istediğiniz aktivite burada olacak
});
```

### ***Tıklama***

Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçer, ardından **addEventListener()** yöntemini ekleriz. Olay dinleyicisi, olay türünü ve geri çağırma işlevlerini argüman olarak alır.

Aşağıdaki örnek tıklama türü olayın bir örneğidir.

```jsx
<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model</title>
    </head>

    <body>
        <button>Click Me</button>

        <script>
            const button = document.querySelector("button");
            button.addEventListener("click", (e) => {
                console.log("e gives the event listener object:", e);
                console.log("e.target gives the selected element: ", e.target);
                console.log(
                    "e.target.textContent gives content of selected element: ",
                    e.target.textContent
                );
            });
        </script>
    </body>
</html>
```

Bir olay, doğrudan HTML öğesine satır içi komut dosyası olarak da eklenebilir.

```jsx
<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model</title>
    </head>

    <body>
        <button onclick="clickMe()">Click Me</button>
        <script>
            const clickMe = () => {
                alert("We can attach event on HTML element");
            };
        </script>
    </body>
</html>
```

### ***Çift tıklama***

Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçeriz, ardından **addEventListener()** yöntemini ekleriz. Olay dinleyicisi, olay türünü ve geri çağırma işlevlerini argüman olarak alır.

Aşağıdaki örnek, tıklama türü olayın bir örneğidir.

```jsx
<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model</title>
    </head>

    <body>
        <button>Click Me</button>
        <script>
            const button = document.querySelector("button");
            button.addEventListener("dblclick", (e) => {
                console.log("e gives the event listener object:", e);
                console.log("e.target gives the selected element: ", e.target);
                console.log(
                    "e.target.textContent gives content of selected element: ",
                    e.target.textContent
                );
            });
        </script>
    </body>
</html>
```

### ***Fare tıklaması***

Bir öğeye olay dinleyicisi eklemek için önce öğeyi seçeriz, ardından **addEventListener()** yöntemini ekleriz. Olay dinleyicisi, olay türünü ve geri çağırma işlevlerini argüman olarak alır. Aşağıdaki örnek, tıklama türündeki bir olayın örneğidir.

```jsx
<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model</title>
    </head>

    <body>
        <button>Click Me</button>
        <script>
            const button = document.querySelector("button");
            button.addEventListener("mouseenter", (e) => {
                console.log("e gives the event listener object:", e);
                console.log("e.target gives the selected element: ", e.target);
                console.log(
                    "e.target.textContent gives content of selected element: ",
                    e.target.textContent
                );
            });
        </script>
    </body>
</html>
```

Şimdiye kadar `addEventListener` yöntemini ve olay dinleyicisi nasıl ekleyeceğimizi öğrendiniz. Birçok olay dinleyicisi türü vardır ancak burada en önemli ve sık kullanılan olaylara odaklanacağız.

Olay listesi:

- `click` - eleman tıklandığında
- `dblclick` - eleman çift tıklandığında
- `mouseenter` - fare noktası öğeye girdiğinde
- `mouseleave` - fare işaretçisi öğeden ayrıldığında
- `mousemove` - fare işaretçisi öğe üzerinde hareket ettiğinde
- `mouseover` - fare işaretçisi öğe üzerinde hareket ettiğinde
- `mouseout` - fare işaretçisi öğeden dışarı çıktığında
- `input` - değer giriş alanına girildiğinde
- `change` - giriş alanında değer değiştiğinde
- `blur` - öğe odaklanmadığında
- `keydown` - bir tuş düştüğünde
- `keyup` - bir anahtar bittiğinde
- `keypress` - herhangi bir tuşa bastığımızda
- `onload` - tarayıcı bir sayfayı yüklemeyi bitirdiğinde

Yukarıdaki kod örneğindeki olay türünü değiştirerek yukarıdaki olay türlerini test edebilirsiniz.

### ***Bir input öğesinden değer alma***

Genellikle form doldururuz ve formlar verileri işler. Form alanları, girdi HTML öğesi kullanılarak oluşturulur. İki girdi alanı, bir düğme ve bir `p` etiketi kullanarak bir kişinin vücut kitle indeksini hesaplamamıza izin veren küçük bir uygulama oluşturalım.****

```jsx
<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model:30 Days Of JavaScript</title>
    </head>

    <body>
        <h1>Body Mass Index Calculator</h1>

        <input type="text" id="mass" placeholder="Mass in Kilogram" />
        <input type="text" id="height" placeholder="Height in meters" />
        <button>Calculate BMI</button>

        <script>
            const mass = document.querySelector("#mass");
            const height = document.querySelector("#height");
            const button = document.querySelector("button");

            let bmi;
            button.addEventListener("click", () => {
                bmi = mass.value / height.value ** 2;
                alert(`your bmi is ${bmi.toFixed(2)}`);
                console.log(bmi);
            });
        </script>
    </body>
</html>
```

### ***input olayı ve change olayı***

Yukarıdaki örnekte, iki girdi alanından verileri düğmeye tıklayarak almayı başardık. Ancak, düğmeye tıklamadan değer almak isterseniz, girdi alanına odaklandığında verileri hemen almak için *change* veya *input* olay türünü kullanabiliriz. Bunu nasıl ele alacağımızı görelim.

```jsx
<!DOCTYPE html>
<html>
    <head>
        <title>Document Object Model:30 Days Of JavaScript</title>
    </head>

    <body>
        <h1>Data Binding using input or change event</h1>

        <input type="text" placeholder="say something" />
        <p></p>

        <script>
            const input = document.querySelector("input");
            const p = document.querySelector("p");

            input.addEventListener("input", (e) => {
                p.textContent = e.target.value;
            });
        </script>
    </body>
</html>
```

### ***blur olayı***

*Input* veya *change* olaylarının aksine, `blur` olayı girdi alanına odaklı değilken meydana gelir.

```jsx
<!DOCTYPE html>
<html>

<head>
    <title>Document Object Model:30 Days Of JavaScript</title>
</head>

<body>
    <h1>Giving feedback using blur event</h1>

    <input type="text" id="mass" placeholder="say something" />
    <p></p>

    <script>
        const input = document.querySelector('input')
        const p = document.querySelector('p')

        input.addEventListener('blur', (e) => {
            p.textContent = 'Field is required'
            p.style.color = 'red'

        })
    </script>
</body>

</html>
```

### ***keydown***

Farklı olay dinleyici türlerini kullanarak klavyenin tüm tuş numaralarına erişebiliriz. `keydown`'ı kullanalım ve her klavye tuşunun keyCode'unu alalım.