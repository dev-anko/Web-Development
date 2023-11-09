# Document Object Model (DOM)

DOM (Document Object Model), web sayfalarının içeriğini, yapısını ve tarayıcı tarafından sunulan programlama ara yüzünü temsil eden bir yapıdır. HTML, XML veya XHTML gibi belge tabanlı dillerdeki web sayfalarını programlarla etkileşimli hale getirmek için kullanılır.

DOM, belgedeki her bir öğeyi (element), öğeler arasındaki ilişkileri ve öğelerin özelliklerini bir ağaç yapısı şeklinde temsil eder. Bu ağaç yapısı, tarayıcıya sayfanın nasıl görüntülenmesi gerektiğini anlatan bir modele dönüşür. JavaScript gibi programlama dilleri, DOM'u kullanarak web sayfalarını dinamik olarak değiştirebilir ve güncelleyebilir.

DOM'un temel amaçları şunlardır:

1. Etkileşim: DOM, tarayıcı üzerinden sayfa içeriğine ve yapısına erişim sağlar. Bu sayede JavaScript gibi programlama dilleriyle sayfanın içeriğini değiştirme, güncelleme ve kullanıcıyla etkileşim sağlama imkanı sunar.

2. Dinamik Sayfa Güncellemeleri: DOM, sayfanın dinamik olarak güncellenmesine olanak tanır. Kullanıcı eylemleri, sunucu yanıtları veya zamanla gerçekleşen diğer olaylara bağlı olarak sayfa içeriği güncellenebilir.

3. Animasyon ve Geçişler: DOM, CSS ve JavaScript kullanılarak animasyonlar ve geçişler oluşturmak için kullanılabilir. Örneğin, bir elementin rengini değiştirmek veya hareket ettirmek gibi görsel efektler eklemek mümkündür.

4. Veri Alışverişi: DOM, tarayıcı ile sayfa arasında veri alışverişi yapma yeteneği sunar. Bu, AJAX (Asynchronous JavaScript and XML) gibi teknolojilerle sayfa içeriğini güncellemek ve sunucudan veri almak için kullanılır.

Özetle, DOM, web geliştiricilerin tarayıcı üzerinden web sayfalarına erişim sağlamak ve sayfanın içeriğini dinamik olarak yönetmek için kullandığı bir programlama arayüzüdür.

## Adding JavaScript to Websites

JavaScript HTML dosyasına inline ve external olarak eklenebilir.

### Inline

```html
 <script>
        // JavaScript kodu buraya yazılır
        console.log("JavaScript kodu çalıştı!");
</script>
```
Normal bir HTML etiketi şeklinde inline olarak JavaScript eklenebilir.

### External

Farklı bir JavaScript dosyasını eklemek istiyorsak src kullanarak body etkiketi içerisinde kapanış etiketinden hemen önce olucak şekilde ekleyebiliriz. JavaScript bağlantsının en aşağıda olması önemlidir çünkü HTML dosyası yüklenmeden JavaScript dosyası yüklense çok enteresan şeyler olabilir.

```html
<body>
    <h1>Merhaba, dünya!</h1>
    <script src="script.js"></script>
</body>
```

## Selecting HTML Elements with JavaScript

JavaScript'te HTML elementlerini seçmek için kullanılan temel yöntemler şunlardır:

### getElementById:
ID'si belirtilen bir HTML elementini seçer.
```html
<!-- HTML -->
<div id="myElement">Merhaba, dünya!</div>
```
```javascript
// JavaScript
const elementById = document.getElementById('myElement');
```

### getElementsByClassName:
Belirli bir sınıfa sahip tüm HTML elementlerini seçer.

```html
<!-- HTML -->
<p class="paragraph">Bu bir paragraf.</p>
<p class="paragraph">Başka bir paragraf.</p>
```
```javascript
// JavaScript
const elementsByClass = document.getElementsByClassName('paragraph');
```

### getElementsByTagName:
Belirli bir etikete sahip tüm HTML elementlerini seçer.

```html

<!-- HTML -->
<ul>
    <li>Öğe 1</li>
    <li>Öğe 2</li>
</ul>
```

```javascript
// JavaScript
const elementsByTag = document.getElementsByTagName('li');
```

### getElementsByName:
Belirli bir isme sahip tüm HTML elementlerini seçer. Bu genellikle form elemanlarında kullanılır.

```html
<!-- HTML -->
<input type="text" name="username">
<input type="text" name="password">
```

```javascript
// JavaScript
const elementsByName = document.getElementsByName('username');
```

### querySelector:
CSS tarzı seçicileri kullanarak belirli bir HTML elementini seçer.

```html
<!-- HTML -->
<div class="container">
    <p>Bu bir paragraf.</p>
</div>
```

```javascript
// JavaScript
const elementByQuery = document.querySelector('.container p');
```

### querySelectorAll:
querySelector'a benzer, ancak belirli bir seçiciye uyan tüm elementleri seçer.

```html
<!-- HTML -->
<ul>
    <li>Öğe 1</li>
    <li>Öğe 2</li>
</ul>
```

```javascript
// JavaScript
const elementsByQueryAll = document.querySelectorAll('ul li');
```

Bu yöntemler sayesinde JavaScript ile HTML dokümanındaki çeşitli elementlere erişebilirsiniz.

## Manipulating and Changing Styles of HTML Elements with Javascript

JavaScript kullanarak HTML elementlerinin stillerini değiştirmek ve manipüle etmek için birkaç farklı yol vardır. İşte bazı temel konseptler ve örnekler:

### Elementi Seçme:
Öncelikle, stilini değiştirmek istediğiniz HTML elementini seçmelisiniz. Yukarıda belirttiğim seçme yöntemlerinden birini kullanabilirsiniz.

```html
<!-- HTML -->
<div id="myElement">Merhaba, dünya!</div>
```

```javascript
// JavaScript
const myElement = document.getElementById('myElement');
```
### Stil Değiştirme:
Bir HTML elementinin stilini değiştirmek için style özelliğini kullanabilirsiniz.

```javascript
// JavaScript
myElement.style.color = 'red';
myElement.style.fontSize = '20px';
```

### CSS Class Ekleyip Kaldırma:
CSS class'ları kullanarak birden çok stil özelliğini bir arada yönetmek daha yaygındır. Bu, classList özelliğini kullanarak yapılabilir.
```javascript
// JavaScript
myElement.classList.add('highlight'); // Bir class ekler
myElement.classList.remove('highlight'); // Bir class kaldırır
```

### Stil Özelliklerini Doğrudan Değiştirme:
Belirli bir stil özelliğini doğrudan değiştirmek de mümkündür.

```javascript
// JavaScript
myElement.style.backgroundColor = 'yellow';
```

### Toggle Metodu ile Class Ekleyip Kaldırma:
classList.toggle metodu, bir class'ın varlığını kontrol eder. Eğer class varsa kaldırır, yoksa ekler.
```javascript
// JavaScript
myElement.classList.toggle('highlight');
```

### İşte tüm bu kavramları birleştiren bir örnek:
```html
<!-- HTML -->
<div id="myElement">Bu bir örnek</div>
<button onclick="changeStyle()">Stili Değiştir</button>
```
```javascript
// JavaScript
function changeStyle() {
    const myElement = document.getElementById('myElement');
    
    // Stil değişiklikleri
    myElement.style.color = 'blue';
    myElement.style.fontSize = '24px';

    // Class ekleyip kaldırma
    myElement.classList.toggle('highlight');
}
```

Bu örnekte, bir düğmeye tıklandığında changeStyle fonksiyonu çağrılır ve belirtilen elementin stilini değiştirir.

## The Separation of Concerns: Structure vs Style vs Behaviour

Bu konudaki amaç her şeyi amacı için kullanmaktır. HTML iskele, CSS görünüş ve JS davranış içindir. Ne demek mi istiyorum? Yukarıdaki css değiştirme yöntemlerimize bakalım. .style ile javascript kullanarak doğrudan css özelliği verebiliyoruz lakin bu doğru bir kullanım değil. classList.add kullanarak farklı bir css class'ı eklemek çok daha doğru bir kullanım şeklidir.

## Text Manipulation and the Text Content Property
Text manipulation, HTML içindeki metin içeriğini değiştirmek veya manipüle etmek anlamına gelir. Bu işlem genellikle JavaScript ile yapılır ve textContent özelliği sıkça kullanılır. İşte bu konsepti daha iyi anlamanı sağlayacak bir açıklama ve örnekler:

### textContent Özelliği Nedir?
textContent, bir HTML elementinin metin içeriğini temsil eden bir özelliktir. Bu özellik, elementin tüm alt metin içeriğini temsil eder ve HTML etiketlerini dikkate almaz.

### Örnekler:
1. Metin İçeriğini Okuma:

```html
<!-- HTML -->
<p id="myParagraph">Merhaba, dünya!</p>
```

```javascript
// JavaScript
const myParagraph = document.getElementById('myParagraph');
console.log(myParagraph.textContent); // "Merhaba, dünya!"
```
2. Metin İçeriğini Değiştirme:

```html
<!-- HTML -->
<p id="myParagraph">Merhaba, dünya!</p>
<button onclick="changeText()">Metni Değiştir</button>
```
```javascript
// JavaScript
function changeText() {
    const myParagraph = document.getElementById('myParagraph');
    myParagraph.textContent = 'Yeni metin!';
}
```
Bu örnekte, bir düğmeye tıklandığında changeText fonksiyonu çağrılır ve `<p>` elementinin metin içeriği 'Yeni metin!' ile değiştirilir.

3. Metin İçeriğini Manipüle Etme:

```html
<!-- HTML -->
<p id="myParagraph">Bu bir <span class="highlight">örnek</span> metindir.</p>
```

```javascript
// JavaScript
const myParagraph = document.getElementById('myParagraph');
myParagraph.textContent = 'Yeni metin!'; // HTML etiketlerini dikkate almadan değiştirir
```
Bu örnekte, `<span>` içeren bir paragraf var ve textContent özelliği ile tüm metin içeriği değiştiriliyor.

Metin manipülasyonu, kullanıcı etkileşimlerine veya dinamik içerik değişikliklerine tepki olarak kullanışlıdır. Bu örnekler, textContent özelliğini kullanarak metin içeriğini değiştirmenin temel birkaç yönünü göstermektedir.

---

Metin içeriğini manipüle etmenin başka yöntemleri de bulunmaktadır. İşte bazıları:

1. innerText Kullanımı:

innerText özelliği, bir elementin görünen metin içeriğini temsil eder. Ancak, textContent'den farklı olarak, stil ile gizlenmiş (CSS tarafından display: none veya visibility: hidden ile gizlenmiş) metni dikkate alır.

```javascript
const myParagraph = document.getElementById('myParagraph');
console.log(myParagraph.innerText);
```

2. innerHTML Kullanımı:

innerHTML, bir elementin HTML içeriğini temsil eder. Bu özellik, HTML etiketlerini değiştirmenize veya eklemenize olanak tanır.

```javascript
const myParagraph = document.getElementById('myParagraph');
myParagraph.innerHTML = 'Yeni <strong>metin</strong>!';
```

3. createTextNode ve appendChild Kullanımı:

createTextNode yöntemi, yeni bir metin düğümü oluşturmanıza olanak tanır. Ardından, bu düğümü appendChild ile bir elemente ekleyebilirsiniz.

```javascript
const myParagraph = document.getElementById('myParagraph');
const newText = document.createTextNode('Yeni metin!');
myParagraph.appendChild(newText);
```

Bu yöntem, özellikle dinamik olarak oluşturulan metni içeren elementler için kullanışlıdır.

Her bir yöntemin avantajları ve kullanım durumları bulunmaktadır. Hangi yöntemi tercih edeceğiniz, projenizin ihtiyaçlarına ve güvenlik gereksinimlerine bağlı olarak değişebilir. Ancak genel olarak textContent ve innerHTML kullanımı yaygındır.

## Manipulating HTML Element Attributes

HTML elementlerinin özelliklerini (attributes) manipüle etmek, JavaScript'te oldukça yaygın bir görevdir. Bu işlemi gerçekleştirmek için genellikle getAttribute, setAttribute, ve elementin özelliklere doğrudan erişimini içeren yöntemler kullanılır.

### getAttribute ve setAttribute Kullanımı:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attribute Manipulation</title>
</head>
<body>
  <img id="myImage" src="old_image.jpg" alt="Old Image">
  
  <script>
    // JavaScript ile özellikleri almak ve değiştirmek
    const myImage = document.getElementById('myImage');

    // Özellik almak
    const oldSrc = myImage.getAttribute('src');
    console.log('Eski src:', oldSrc);

    // Özelliği değiştirmek
    myImage.setAttribute('src', 'new_image.jpg');
  </script>
</body>
</html>
```

Bu örnek, bir resim elementinin src özelliğini değiştirmektedir. getAttribute ile mevcut src değeri alınır ve setAttribute ile yeni bir değer atanır.

### Doğrudan Özelliklere Erişim:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Attribute Manipulation</title>
</head>
<body>
  <input type="text" id="myInput" value="Initial Value">

  <script>
    // JavaScript ile doğrudan özelliklere erişmek ve değiştirmek
    const myInput = document.getElementById('myInput');

    // Özelliklere erişmek
    const initialValue = myInput.value;
    console.log('Başlangıç değeri:', initialValue);

    // Özellikleri değiştirmek
    myInput.value = 'New Value';
  </script>
</body>
</html>
```
Bu örnek, bir input alanının value özelliğini değiştirmektedir. Doğrudan özelliklere erişim, bazı durumlarda daha kısa ve okunabilir bir seçenek olabilir.

HTML element özelliklerini manipüle etmek, genellikle dinamik içerik oluşturmak veya kullanıcı etkileşimleri için önemli bir adımdır.









