# Advanced JavaScript and DOM Manipulation

## Adding event listeners to a button

- Bir düğmeye veya istediğin öğeyle geçilen etkileşimi kontrol etmek için olay dinleyicisi kullanılır. (event listener)
- .addEventListener şeklinde eklenir ve bunu hangi öğeye eklemek istiyorsan ondan sonra yazarsın. Bu fonksiyon iki tane parametre alır birincisi dinlenecek olay türünün temsil eden büyük/küçük harfe duyarlı bir String türüdür. Burda neleri dinleyebileceğini öğrenmek için detaylı şeyler var onları Mozilla Developer Document şeysinden bakabilirsin. İkinci parametre ise bir dinleyicidir ve genelde dinlenme olayı gerçekleşince çalıştırılacak olan fonksiyonu alır.
- MDN link: https://developer.mozilla.org/en-US/
- Ek olarak burada çağırılan fonksiyonun sonuna aşağıdaki koddaki gibi parantez koyulmaz çünkü bu doğrudan bir fonksiyon çağrısı olur ve buttona tıklamadan direk çalışır. İstersen fonksiyonu direk bunun içindede yazabilirsin. Bunada anonim fonksiyon denir çünkü isim vermeye gerek yoktur.

```javascript
document.querySelector("button").addEventListener("click",handleClick);
function handleClick()
{
    alert("I got click!");
}
```
---
## High order functions and passing functions as arguments

Higher Order Functions, JavaScript'te fonksiyonları parametre olarak alabilen veya fonksiyonları döndürebilen fonksiyonlardır. Ayrıca, bu tür fonksiyonlar, diğer fonksiyonları manipüle etmek, genişletmek veya daha karmaşık işlemler gerçekleştirmek için kullanılabilir. Bu konsept, JavaScript'teki fonksiyonel programlama paradigmalarına uygun olarak çalışmayı sağlar.

Örneğin:

```javascript
// İki sayıyı toplayan bir fonksiyon
function add(x, y) {
    return x + y;
}

// İki sayıyı çarpan bir fonksiyon
function multiply(x, y) {
    return x * y;
}

// Higher Order Function örneği
function performOperation(operation, x, y) {
    return operation(x, y);
}

// Higher Order Function'ı kullanma
var result1 = performOperation(add, 5, 3);
console.log(result1); // 8

var result2 = performOperation(multiply, 4, 2);
console.log(result2); // 8
```
---

## How to play sounds on a website

Bir web sitesinde ses çalmak için genellikle JavaScript ve HTML5 Audio API kullanılır. 

- Örnek:

```html
<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sound Example</title>
</head>
<body>
    <button onclick="playSound()">Play Sound</button>
    <script src="script.js"></script>
</body>
</html>
```

```javascript
// javascript
function playSound() {
    // Yeni bir Audio nesnesi oluşturun ve ses dosyasının yolunu belirtin
    var audio = new Audio('path/to/your/sound.mp3');

    // Ses dosyasını çalın
    audio.play();
}
```

Bu basit örnekte, bir HTML dosyasında bir düğme bulunuyor. Düğmeye tıklandığında, JavaScript fonksiyonu olan playSound çağrılır. Bu fonksiyon, Audio sınıfından yeni bir nesne oluşturur ve belirtilen ses dosyasını çalar.

**Dikkat etmeniz gereken bazı önemli noktalar şunlar**:

Ses dosyasının yolunu ve türünü doğru bir şekilde belirtmelisiniz ('path/to/your/sound.mp3').
Tarayıcıların otomatik ses oynatma politikalarını göz önünde bulundurmalısınız. Bazı tarayıcılar, kullanıcının etkileşimine dayalı olarak ses çalmayı desteklemeyebilir. Bu durumu ele almak için genellikle bir kullanıcı etkileşimi, örneğin bir düğme tıklaması gerekmektedir.
Kullandığınız ses dosyasının uygun bir türde (genellikle MP3 veya OGG) ve uygun bir şekilde lisanslanmış olmasına dikkat etmelisiniz.

---

## A Deeper Understanding of Javascript Objects

JavaScript'te nesneler, değerleri anahtarlarla ilişkilendirilmiş özel bir veri türüdür. Bir nesne, bir dizi gibi, ancak anahtarlar (keys) ile dizinlenir ve bu anahtarlarla ilişkilendirilmiş değerleri içerir. İşte JavaScript nesnelerini daha derinlemesine anlatan bir açıklama ve örnek:

### JavaScript nesnesi oluşturma

Bir javascript nesnesi süslü paranterzler `{}` ile tanımlanır:

```javascript
// Bir kullanıcı nesnesi oluşturalım
var user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: {
        city: 'New York',
        zipCode: '10001'
    },
    sayHello: function() {
        console.log('Hello, I am ' + this.firstName + ' ' + this.lastName);
    }
};

// Nesnenin özelliklerine erişim
console.log(user.firstName); // John
console.log(user['lastName']); // Doe
user.sayHello(); // Hello, I am John Doe
```

### Nesne özelliklerine erişim

```javascript
console.log(user.firstName); // John
```

```javascript
console.log(user['lastName']); // Doe
```

### Nesne metotları

Nesne içindeki fonksiyonlara "metot" denir. Yukarıdaki örnekte sayHello, user nesnesinin bir metodudur. Metotlar nesne içinde davranışları temsil eder.

### Nesne içinde nesne
JavaScript nesneleri, iç içe geçmiş nesneleri destekler. Yukarıdaki örnekte, address özelliği başka bir nesneyi ({ city: 'New York', zipCode: '10001' }) içerir.

Nesneler, JavaScript'in güçlü ve esnek veri yapısını temsil eder. Nesneleri kullanarak verileri daha düzenli ve okunabilir bir şekilde organize etmek mümkündür.

### Constructor functions

JavaScript'te nesneleri oluşturmak için kullanılan constructor (kurucu) fonksiyonlar bulunmaktadır. Constructor fonksiyonlar, belirli bir nesne tipini temsil eden ve yeni nesnelerin oluşturulmasını sağlayan özel fonksiyonlardır. İşte bir constructor fonksiyonunun nasıl tanımlandığı ve kullanıldığına dair örnek:

```javascript
// Kullanıcı nesnesini temsil eden bir constructor fonksiyonu
function User(firstName, lastName, age, email) {
    // "this" kelimesi, oluşturulan nesneyi temsil eder
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;

    // Nesne içinde bir metodun tanımlanması
    this.sayHello = function() {
        console.log('Hello, I am ' + this.firstName + ' ' + this.lastName);
    };
}

// Yeni bir kullanıcı nesnesi oluşturma
var john = new User('John', 'Doe', 30, 'john.doe@example.com');
var jane = new User('Jane', 'Smith', 25, 'jane.smith@example.com');

// Oluşturulan nesnelerin özelliklerine ve metodlarına erişim
console.log(john.firstName); // John
console.log(jane.age); // 25
john.sayHello(); // Hello, I am John Doe
```
Yukarıdaki örnekte, User adlı bir constructor fonksiyonu tanımlanmıştır. Bu fonksiyon, new anahtar kelimesi ile çağrılarak yeni nesnelerin oluşturulmasına olanak tanır. Her bir nesne, fonksiyonun parametreleri aracılığıyla belirtilen özelliklere sahip olacaktır.

Constructor fonksiyonlar, nesneleri oluştururken bir şablona ihtiyaç duyulduğunda kullanışlıdır ve aynı şablondan birden fazla nesne oluşturulabilir.

*Fark etmişsindir diye düşünüyorum, consturctor fonksiyonların ilk harfi büyüktür, camelCase ile yazılmazlar.*

---

## How to Use Switch Statements in Javascript

Switch ifadesi, JavaScript'te koşullu bir kontrol yapısıdır. switch ifadesi, bir değişkenin değerini diğer değerlerle karşılaştırır ve eşleşen duruma göre belirli bir kod bloğunu çalıştırır. Bu, birden çok if-else ifadesinin yerine kullanılabilir ve kodun daha temiz ve okunabilir olmasına yardımcı olabilir.

Temel yapı:

```javascript
switch (değişken) {
    case değer1:
        // değişken değeri değer1 ile eşleşirse burası çalışır
        break;
    case değer2:
        // değişken değeri değer2 ile eşleşirse burası çalışır
        break;
    // Diğer durumlar
    default:
        // Hiçbir duruma eşleşmezse burası çalışır
}
```

Örneğin, bir gün adının sayısal karşılığını almak istediğinizi düşünün:

```javascript
var gün = 2;

switch (gün) {
    case 1:
        console.log('Pazartesi');
        break;
    case 2:
        console.log('Salı');
        break;
    // Diğer günler
    default:
        console.log('Bilinmeyen gün');
}
```
Burada, gün değişkeninin değerine bağlı olarak farklı durumlar (günler) ele alınmaktadır. break ifadesi, eşleşen durumun çalıştırılmasının ardından switch bloğunu terk etmek için kullanılır. default durumu, hiçbir duruma eşleşilmediğinde çalışacak olan durumdur.

---

## Using Keyboard Event Listeners to Check for KeyPresses

Keyboard Event Listeners kullanarak klavye olaylarını dinlemek, kullanıcının klavyesindeki tuşlara basmasını algılamak ve buna yanıt vermek anlamına gelir. Bu, web uygulamalarında kullanıcının klavye etkileşimlerini takip etmek ve belirli tuşlara basıldığında özel işlemler gerçekleştirmek için yaygın bir tekniktir.

Temel yapı:
```javascript
document.addEventListener("keydown", function(event)
{
    console.log(event);
})
```

Örnek:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Keyboard Event Example</title>
</head>
<body>

<script>
    // Klavye olaylarını dinlemek için bir event listener ekleyelim
    document.addEventListener('keydown', function(event) {
        // event objesi, basılan tuşa dair bilgiler içerir
        // Örneğin, basılan tuşun keyCode'u
        console.log('Pressed key code:', event.keyCode);

        // Özel tuşları kontrol etmek için switch kullanabiliriz
        switch (event.keyCode) {
            case 37:
                console.log('Left arrow key pressed');
                break;
            case 39:
                console.log('Right arrow key pressed');
                break;
            // Diğer tuşlar
        }
    });
</script>

</body>
</html>

```

Bu örnekte, sayfada herhangi bir tuşa basıldığında keydown olayını dinleyen bir eventListener ekledik. Olay gerçekleştiğinde, event objesi aracılığıyla basılan tuşun keyCode değerini kontrol ediyoruz. keyCode değerleri, klavyedeki her tuşa benzersiz bir sayı atar. Bu sayılar, ASCII karakter seti kullanılarak belirlenir.

Switch ifadesi içinde özel tuşları kontrol ederek, özel tuşlara özel işlemler gerçekleştirebiliriz. Bu örnekte, sol ok tuşu (keyCode 37) basıldığında "Left arrow key pressed" mesajını, sağ ok tuşu (keyCode 39) basıldığında ise "Right arrow key pressed" mesajını konsola yazdırıyoruz.

---

## Understanding Callbacks and How to Respond to Events

Callbacks (geri çağrılar), JavaScript'te yaygın olarak kullanılan bir programlama konseptidir. Bir fonksiyonu diğer bir fonksiyona parametre olarak iletmek ve daha sonra çağrılmasını sağlamak anlamına gelir. Genellikle olaylara yanıt olarak veya asenkron işlemleri yönetmek için kullanılır.

Bir olaya yanıt olarak kullanıldığında, bir fonksiyon (geri çağrı fonksiyonu) bir olay gerçekleştiğinde çağrılır. Örneğin, bir kullanıcı bir düğmeye tıkladığında veya bir form gönderdiğinde bu tür olaylar gerçekleşir.

Örnek:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Callback Example</title>
</head>
<body>

<button id="myButton">Click me</button>

<script>
    // Geri çağrı fonksiyonumuz
    function buttonClickHandler() {
        console.log('Button clicked!');
    }

    // DOM'daki düğmeye bir click event listener ekleyerek geri çağrı fonksiyonunu tanımlayabiliriz
    document.getElementById('myButton').addEventListener('click', buttonClickHandler);
</script>

</body>
</html>
```

Bu örnekte, bir düğmeye (myButton) tıklanıldığında çalışacak bir geri çağrı fonksiyonu olan buttonClickHandler fonksiyonunu tanımlıyoruz. Ardından, addEventListener fonksiyonu ile düğmeye bir tıklama olay dinleyicisi ekliyoruz. Bu dinleyici, düğmeye tıklandığında buttonClickHandler fonksiyonunu çağırır.

Bu basit örnek, geri çağrıların olaylara nasıl yanıt verebileceğini göstermektedir. Geri çağrılar, asenkron işlemleri yönetmek, veri alışverişini kontrol etmek ve daha pek çok durumda kullanışlıdır.