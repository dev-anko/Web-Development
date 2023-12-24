# Axios?

Şimdi HTTP requestler için Node.js ile kullanılan Axios abi varmış bu abi bir npm paketiymiş bunu öğreneceğim, öğrendiklerimle bir proje yapacağım ve notlarımı burada tutacağım.

# Proje?

Bir api kullanarak sıkıldığınızda yapabileceğiniz (1-4 kişi ile) aktiviteleri size random olarak getiren bir proje.

## Axios nedir? Ne için kullanılır? Nasıl kullanılır? Bir tane kullanım örneği verir misin?

Axios, JavaScript ve Node.js ortamlarında kullanılan bir HTTP istemci kütüphanesidir. Axios, HTTP talepleri yapmak ve yanıtları işlemek için kullanılır. Genellikle web tarayıcılarındaki ve sunucu tarafındaki JavaScript uygulamalarında, özellikle de React, Angular veya Vue.js gibi popüler frontend kütüphaneleri ve çerçeveleriyle birlikte kullanılır.

Axios, Promise tabanlı bir yapıya sahiptir, bu da asenkron işlemleri yönetmeyi kolaylaştırır. Ayrıca, tarayıcıda XMLHttpRequest veya Node.js'de HTTP modülü gibi altta yatan HTTP istemcilerini kullanır.

Axios, bir dizi HTTP isteği yapmak, veri göndermek veya almak, dosya indirmek gibi işlemleri basitleştirmek için kullanılır. İşte Axios'un temel kullanımı ve bir örnek:

### Axios Kullanımı:

1. İlk olarak, Axios'u projenize dahil edin. Eğer bir Node.js projesi kullanıyorsanız, npm veya yarn gibi paket yöneticileri aracılığıyla Axios'u yükleyebilirsiniz.

   ```bash
   npm install axios
   ```

   veya

   ```bash
   yarn add axios
   ```

2. Ardından, Axios'u projenize dahil edin:

   ```javascript
   // Node.js
   const axios = require('axios');

   // veya

   // React, Angular, Vue.js gibi bir frontend uygulamasında
   import axios from 'axios';
   ```

3. Şimdi, Axios'u kullanarak bir HTTP isteği yapalım. Örneğin, JSONPlaceholder API'sinden veri alalım:

   ```javascript
   // GET isteği yapma örneği
   axios.get('https://jsonplaceholder.typicode.com/posts/1')
     .then(response => {
       // Başarılı yanıt
       console.log('Başarılı Yanıt:', response.data);
     })
     .catch(error => {
       // Hata durumu
       console.error('Hata:', error);
     });
   ```

Bu örnekte, Axios'un `get` fonksiyonu kullanılarak JSONPlaceholder API'sine bir GET isteği yapılır. Ardından, başarılı bir yanıt durumunda `then` bloğu içinde veri işlenir ve hata durumunda `catch` bloğu içinde hata işlenir.

Bu, temel bir Axios kullanım örneğidir. Axios, HTTP isteklerini yönetmek, yanıtları işlemek ve genel olarak ağ ile etkileşimde bulunmak için bir dizi yöntem sunar.

### form etiketindeki action="/" ne anlama gelmektedir? Bu actionun değeri başka bir şey olabilir mi?

`<form>` etiketinin `action` özelliği, formun verilerinin gönderileceği yerin URL'sini belirtir. Bu URL, form verilerinin işleneceği veya gönderileceği sunucu tarafı betik veya sayfa adresidir.

Örneğin, `action="/"`, formun verilerinin ana dizine (root) gönderileceği anlamına gelir. Yani, form gönderildiğinde, tarayıcı bu verileri sunucunun kök dizinine gönderir. Ancak bu genellikle gerçek bir uygulamada uygun bir kullanım değildir.

Genellikle `action` özelliği, form verilerini işleyecek bir sunucu tarafı betiğin veya sayfanın URL'sini belirtir. Örneğin:

```html
<form action="/submit-form.php" method="post">
  <!-- Form içeriği buraya eklenecek -->
</form>
```

Yukarıdaki örnekte, form verileri "/submit-form.php" adresine gönderilecektir.

`action` özelliği ayrıca mutlak veya tam bir URL'yi de içerebilir. Örneğin:

```html
<form action="https://example.com/submit-form" method="post">
  <!-- Form içeriği buraya eklenecek -->
</form>
```

Bu durumda, form verileri "https://example.com/submit-form" adresine gönderilecektir.

`action` özelliği boş bırakılırsa veya belirtilmezse, formun verileri aynı sayfaya gönderilir.

Önemli olan, `action` özelliğinin formun verilerinin nasıl işleneceğini belirleyen bir adrestir ve bu adres genellikle bir sunucu tarafı betiği veya sayfasıdır.

### async await yapısı nedir? async fonksiyon ne demektir, hangi soruna çözüm olmuştur, nasıl kullanılır?

**Async/Await Yapısı:**

`async` ve `await`, JavaScript'te asenkron (async) programlamayı daha okunabilir ve yönetilebilir hale getirmek için kullanılan bir yapıdır. Bu yapı, özellikle Promises ve Callback fonksiyonlarının kullanıldığı asenkron operasyonlarda işleri kolaylaştırır.

- `async`: Bir fonksiyonu asenkron bir fonksiyon haline getirir ve otomatik olarak bir Promise döndürür. `async` ifadesi, bir fonksiyon içinde kullanıldığında, fonksiyonun asenkron bir şekilde çalışacağını belirtir.

- `await`: Asenkron bir fonksiyon içinde kullanılan bir ifadedir. `await` ifadesi, bir Promise'in çözülmesini veya reddedilmesini bekler ve sonucunu alır. `await` ifadesi sadece `async` fonksiyonlar içinde kullanılabilir.

**Kullanımı:**

1. **Async Fonksiyon Tanımlama:**
   ```javascript
   async function fetchData() {
     // Asenkron operasyonlar
     return result;
   }
   ```

2. **Async Fonksiyon Kullanımı:**
   ```javascript
   async function example() {
     try {
       const result = await fetchData();
       console.log(result);
     } catch (error) {
       console.error(error);
     }
   }
   ```

**Neden Kullanılır?**

- **Okunabilirlik:** Asenkron operasyonları sıralı ve anlaşılır bir şekilde yazmayı sağlar.
  
- **Hata Yönetimi:** Hata yakalamak ve işlemek için daha etkili bir yol sağlar. `try...catch` blokları kullanılabilir.

- **Sıralı Çağrılar:** Asenkron çağrılar sırasında bir işlemin tamamlanmasını beklemek ve ardından devam etmek için kullanılır.

- **Promise Zinciri:** `then` zincirine alternatif olarak daha düzgün ve düzenli bir syntax sunar.

**Örnek:**

```javascript
async function fetchData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

async function fetchDataAndProcess() {
  try {
    const data = await fetchData('https://api.example.com/data');
    console.log(data);
    // Diğer işlemler...
  } catch (error) {
    console.error(error);
  }
}

fetchDataAndProcess();
```

Bu örnekte, `fetchData` fonksiyonu asenkron olarak çalışır ve veriyi çeker. `fetchDataAndProcess` fonksiyonu ise bu veriyi alır ve işler. `await` ifadesi, asenkron operasyonların tamamlanmasını bekler ve kodun daha okunabilir ve yönetilebilir olmasını sağlar.