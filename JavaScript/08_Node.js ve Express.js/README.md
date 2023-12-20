# Backend Nedir?

- Arkayüz işte, 3 adet bileşenden oluşmaktadır: Temelde sadece bir bilgisayar olan sunucu, web uygulamasının çalışmasını sağlayan application ve kullanıcı verilerini depolayabileceğimiz database.

### ***Server***

- Sunucu sadece bir bir bilgisayardır ve canlı bir web sitesi sunucusu dünyanın her yerinden tarayıcılardan gelen istekleri dinleyebilmek için 7/24 açık olmalıdır. Geleneksel olarak sunucular bu özel amaç için üretilir ve optimize edilir, ancak günün sonunda ağa bağlı herhangi bir bilgisayar sunucu olarak hareket edebilir.
- Ve aslında web sitelerimizi yerel olarak oluşturacağımız zaman, [localhost](http://localhost) adı verilen bir şey kullanacağız, yani oluşturduğumuz web sitelerini sunmak için sunucu olarak kendi bilgisayarımızı kullancağız.
- Bilgisayarını 7/24 açık tutamassın ama bunun önemi yok çünkü sadece test ederken açık ve bağlı olmasına ihtiyacımız var.

### *Application*

- Application backend’in ikinci yönüdür ve application temel olarak o bilgisayarda, yani sunucuda çalışan mantıktır (mantık=logic). Ve bu logic tarayıcıdan gelen isteklere nasıl yanıt vermek istediğinizi belirler.

- Application gelen isteklere göre yanıt veren bir araç olarak betimlenebilir. Örneğin bir istek geliyor ve HTML sayfası döndüyorsa al sana application, tabii her zaman HTML döndürmez bazen veri gönderebilir bazen bir status code (şu 404ler varya he onlar işte) döndürebilir.
- Bu 404’lerin sebebi tarayıcının yapılan requeste nasıl invalid(dönüş) yapacağını bilmemesidir.

### *Database*

- Backendin son kısmı ise database’dir. Şart değildir ancak web sitemiz büyüdükçe doğal olarak database ihtiyacı gerekliliği oluşacaktır.

# Node.js nedir?

- İlk olarak bir framework’e neden ihtiyacımız olduğunu açıklayalım. Bunu mayonez benzetmesi ile yapalım. Diyelim ki acıktın ve ton balıklı sandiviç yapacaksın ve mayonez koymak istiyorsun. Mayonezi kendin mi yapmayı tercih edersin, marketten satın almayımı. Aynen öyle. Frameworklerin sunduğu şeyde tam olarak bu her şeyin hazırını sunuyorlar.
- Yani bu frameworklen tekrar yazmak yerine daha önceden oluşturulmuş bileşenler (componentler) sağlar. URL Strings, tests, error codes vb.

<aside>
💡 “An asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.”
</aside>

- Node.js’e gelelim. Node.js bir JavaScript çalışma zamanıdır. Peki çalışma zamanı ortamı nedir? Aslında şu anlama geliyor. JavaScript ilk çıktı zamanlarda sadece web üzerinde çalışabiliyordu. Yani web içinde hapsolmuş durumdaydı. İşte node’un yaptığı iş bu JavaScripti tarayıcı dünyasından etkili bir şekilde kurtardı ve masaüstü veya sunucu tarafında her türlü uygulamayı yazmak için kullanmamıza izin verecek özgürlüğü verdi.
- Node.js eşzamansız ve olay odaklıdır (asynchronous event-driven). Peki bu ne anlama geliyor? Asenkron JavaScript kodunuzun her şeyi sırayla yapmak zorunda olmadığı anlamına gelir. Ki bu da kod çalışırken aynı anda başka bir şey yapabileceğiniz anlamına gelir.
- Özetle Node’a ihtiyaç duymamızın nedeni, JavaScript kullanarak genellikle bilgisayarda bir uygulama oluşturmamıza izin vermesidir.
- Server dediğim şey normal bir bilgisayardır biliyorsun tarayıcı değildir ve node.js bunu gerçekleştirmemizi sağlayan şeydir.

## Using Node.js

- node -v : Node sürümünü gösterir.
- Node REPL: Bu durum sadece Node’a özgü bir durum değildir Çoğu programlama diliyle yapabileceğimiz bir şeydir ve temelde kullanıcı girdilerini kod biçiminde ekleyebileceğimiz node çalışma zamanı ortamı gibi bir ortamdır. Yazdıklarımız bilgisayar tarafından okunur ve satır satır değerlendirilir ve ardından sonucu bize komut satırında veya konsolda geri yazdırır ve node’u başlatır.
- Node REPL’a girmek için terminalde “node” kullanılır.
- Çıkmak için .exit kullanılır. Veya CTRL+C (2 kere) kullanabilirsin. Ya da 1 kez CTRL+D aralarındaki farkı çalışmak lazım.
- REPL = Read-Eval-Print Loop. Oku-Değerlendir-Yazdır döngüsü.
- Node bir JavaScript çalışma zamanı olduğu için istediğin her şeyi yazabilirsin.
- Aslında Chrome Tools’da yaptıklarımızı kendi bilgisayarımızda yapmamızı sağlıyor.

## How to Use the Native Node Modules

- Native Node Modules nedir? Başlangıç alet setiniz gibi bir şeydir.
- Documentaionda çok fazla şey var şimdilik File System’ı göreceğiz bu ders için.

### *File System*

- Dosya sistemi, local depolama alanına erişmemizi sağlayan local node modülüdür. Ve bunu kullanmaya başlamak için ya dosya sistemi modülünden kodu içe aktarmanız gerekir ya da bu modülden ihtiyacımız olan kod parçalarını talep edebiliriz.
- Dökümantasyon içerisinde bir fs objesi oluşturmayı, readFile ve writeFile fonksiyonlarını öğrendik. ReadFile’ı buraya bırakıyorum. (Dökümantasyonlarda zaten mevcut)

```jsx
const fs = require("fs");
fs.readFile('./message.txt', "utf-8", (err,data) =>
{
    if(err) throw err;
    console.log(data)
})
```

## The NPM Package Manager and Installing External Node Modules

- NPM (Node Package Manager) nedir? Temel olarak insanların Node için oluşturdukları modülleri toplayan bir yerdir ve GitHub organizasyonu tarafından oluşturulmuştur ve Node uygulamalarınızı yazmanıza yardımcı olacak yardımcı programların ve araçların bulunduğu diğer insanların yazdığı kodu bulmak için gerçekten harika bir yerdir.
- Şimdi yerel node modüllerini evde sahip olduğumuz alet kutusu olarak düşünürsek, npm veya node paket yöneticisi ihityacınız olacağını hiç düşünmediğiniz tüm garip ve harika araçları bulacağınız yerdir, ancak sonra aniden küvetinizin sızdırdığını ve aslında kenarları silikonlamanız gerektiğini fark edersiniz.
- NPM bir tür topluluk araç kütüphanesidir. Sanders, silikon tabancaları gibi garip şeylere ve her türlü farklı kesme makinesine sahip olan insanlar var ve birlikte bir kütüphane oluşturdular, böylece mahalledeki herkes bu araçları paylaşabilir ve kullanabilir. İşte NPM’de bunun koddaki karşılığı gibi bir şey.
- Açık kaynaklıdır ve diğer geliştiricilerin oluşturduğu tüm paketleri, gelecekte diğer geliştiriciler için yararlı olabileceğini düşündükleri kodu yazdıkları küçük araçları bulmak için arama yapabilirsiniz, böylece işi çoğaltmak ve her şeyi sıfırdan yazmak zorunda kalmazsınız. Yani bu bizim paylaşılan kod kütüphanemiz.
- NPM Node ile birlikte gelir node yüksüyle npm de yüklü olur.

---

- npm init: npmi başlatır // burada -y demek her şeye yes demek anlamına gelmektedir.
- npm install <blabla>: Herhangi bir npm package’ını yüklemek için kullanılır.

### *İyide bu packagelar nerede?*

[npm](https://www.npmjs.com/)

- npm i → npm install’un kısaltmasıdır.
- dependencies: bağımlılık.

### *Ecmascript modules*

- CJS= Commonjs. (require ile almak).
- Node’un 12. sürümünden bu yana biraz ilerledik ve Node artık Ecmascript modüllerini kullanmak için etkileştirildi. Bu yüzden requie yerine import anahtar sözcüğünü kullanabilirz.
- kullanmak için projenin package.json dosyasında main altına type: module eklemek gerekli.

# Express.js
# What is express?

- Şunu tekrardan söyleyelim nodejs tam olarak bir framework değildir, bunun yerine bir çalışma zamanı ortamıdır. (Yani javascripti bilgisayarında tarayıcı olmadan çalıştırmaya izin vermek)
- Express aslında web sitelerimiz için backend oluşturmamızı sağlayan bir JavaScript frameworküdür.
- Node.js tornavida ise, express elektrikli tornavidadır.
- Hiçbir backend geliştiricisi backend için sadece nodejs kullanmaz. Mutlaka node ile express birlikte kullanılır.

# Creating Our First Server with Express

- İstemci tarafı: Client-Side
- Sunucu tarafı: Server-Side

## Bir express sunucu oluşturmanın 6 adımı vardır:

1. Create directory.
2. Create index.js file.
3. Initialise NPM.
4. Install the Express package.
5. Write Server application in index.js
6. Start server.
- Burada dikkat edilmesi gereken bir nokta var npm main’i index.js olarak otamatik ayarlar o yüzden main js dosyanı index.js olarak adlandırmakta fayda var.

---

---

Kodlar hakkında ne işe yaradıkları ile ilgili kısa notlar yazacağım.

```jsx
import express from "express";
const app = express(); // express'ten bir uygulama oluşturmaya yarar.
app.listen(3000, () => { // ilk kısım porttur. (bağlantı noktası). Dinleme yapacağımız 
// sunucunun konumudur. İkinci kısım ise callback'tir. Sunucu kurulduğunda tetiklenecek
// olan geri arama işlevidir. Uygulamamız 3000 numaralı bağlantı noktasını dinlediğinde
// ve her şey tamamlandığında, bu geri arama işlevini tetikleyecektir.
	console.log("Server runnin on port 3000.");});
```

## Localhost tam olarak nedir?

- [Localhost](http://Localhost) basitçe internette bir sunucumuz olmadığında ve bunun yerine sunucumuzu yerel olarak barındırmak istediğimizde kullanılır. Yani kendi bilgisayarımızı we bistemizin arka ucunun sunucusu yapmak ve bu da hostingimizin yerel kısmıdır.

## Port tam olarak nedir?

- Port yani bağlantı noktası sunucu bilgisyarımızdaki bir grup kapıya eşdeğerdir ve bu kapıların her birinin bir adresi vardır.
- Bilgisayarımızda çok sayıda kapı olmasının sebi farklı gelen istekleri dinleyebilmesi gerektiğidir. Örneğin yazıcının kullanacağı belirli bir kapı olabilir.
- Her bağlantı noktası benzersi bir numara ile tanımlandığından farklı hizmetler veya farklı uygulamalar ya  da farklı donanımlar belirli bir bağlantı noktası olabilir

<aside>
💡 netstat -ano | findstr “LISTENING” terminal komutu ile dinleme yapan portların listesini alarak havalı görnebilirsin.

</aside>

- Çalışan serverı durdurmak için CTRL+C. Eğer çıkmak istemiyorsan yeni terminal oluşturabilirsin.

### Cannot Get / ne anlama geliyor?

- Bu dizin sayfamıza, ana sayfamıza ulaşamadığı anlamına gelir.
- Nedeni bir sonraki dersteymiş hay amk

# HTTP Requests

## What is HTTP?

- HTMLin başıyla aynı. HyperText Transfer Protocol.
- İkinci kısım bir dil olarak tanımlanır, bilgisayarların internet üzerinden birbirleriyle konuşabilmeleri sağlayan bir dil. Bilgisayarlar internet üzerinde birbirleriyle konuşabilmek için http’ye ihtiyaç duyarlar. Şimdi yeni bir ülkeye gittiğinde o ülkede konuşulan dillerin temel ve hayatta kalmana yardımcı olucak kelimelerini düşün, httpde bunları öğreneceğiz.
- HTTP istekleri yaptığımızda karşılaşacağımız 5 ana kelime var:
1. ***Get:*** Daha önce sunucumuzu çalıştırıp web sitemizi sunucudan istemeye çalıştığımızda alamayacağımızı söyleyen bir hata aldığımızı hatırla. Get öğrenmemiz gereken ilk kelimelerden biridir. Ve bu, sunucudan bir kaynak talep etmek istediğimiz zamandır. Bu kaynak bir web sitesi olabilir, bir metin parçası olabilir, veritabanından veya sunucudan bir veri parçası olabilir. Ancak get anahtar sözcüğünü kullanarak Http isteğinizi yaptığınızda sunucudan bir şey alıyorsunuz.
2. ***Post:*** Postu anlamakta benzer şekildedir. Bu durumdada yaptığımız şey sunucuya bir kaynak göndermektir. Bu, web sitenize kaydolmak için bir formunuz varsa, kaydolma düğmesine tıkladıklarında e-posta ve şifrelerin sunucunuza gönderilmesi gibi bir bilgi parçası olabilir. Bu da bir gönderi talebi kullanılarak yapılacaktır. Sunucu tarafında ise bu bilgileri alabilir ve daha sonra bunlarla istediğinizi yapabilir, bir veritabanına kaydedebilir veya işleyebilir ya da bir şekilde bunlarla çalışabilirsiniz.
3. ***Put:*** Put ve patch birbirleriyle bir şekilde ilişkilidir çünkü temelde bunlar güncelleme yöntemleridir. Ancak bunlar biraz farklıdır. Bir kaynağı gönderdiğiniz her neyse onunla değiştirmek istediğinizde istekte bulunacağını söyleyeceğim. Yani bir şeyi tamamen değiştirerek güncellemek istiyorsun.
4. ***Patch:*** Patch biraz farklıdır ve esasen bir kaynağı yamamak istiyorsunuz, bunların her ikiside güncelleme olsa da biraz farklı çalışırlar. Bu iki güncelleme türü arasındaki fark için iyi bir benzetme: Amazon iadesi. Diyelim ki amazondan bir bisiklet satın aldınız ve teslim aldığınızda ne yazık ki lastiklerden biri kırıldı. Şimdi amazona bana kırık bisiklet gönderdiniz dediğinde iki seçenekleri var: Ya sana tamamen yeni bir bisiklet vermek için bir satış talebi kullanmalıdır sadece bisikletinizi yeni bir bisikletle değiştiriyorlar ki bu şekilde bisikleti güncellemiş olursun. Diğer seçen ise patch(yama) talebidir: bu durumda size sadece çalışan tekerleği gönderirler böyle sizde kırık tekerleği bu yeni çalışan tekerlekle değiştirebilir ve kırık bisiklete yama yapabilirsiniz.
5. ***Delete:*** Sadece kaynakları siler.

<aside>
💡 Neden ilk denememizde Cannot GET / hatasını aldık? Çünkü sunucumuzda isteğimizi vericek kod parçacığı yoktu.

</aside>

```jsx
// Hadi bunun için biraz kod ekleyelim:
app.get("/", (req,res) => 
{
	res.send("Hello World!")
})
// Bir get fonksiyonu ekledik ve artık sunucumuz get isteği geldiğinde ne 
// yapacağını biliyor. Buradaki "/"in kullanımını tam olarak anlayamadım.
// Sanırım ana sayfa demek oluyor. Dizin muhabbeti gibi bişey.
// req -> istek, res -> yanıt demek.
```

<aside>
💡 Express kullanırken const app = express() kullanmamızın sebebi bir uygulama oluşturmaktır.

</aside>

- Bir de isteklerin başlıklarına bakalım:

```jsx
import express from "express";
const app = express();
const port = 3000;
app.get("/", (req,res) =>
{
    console.log(req.rawHeaders)
})
app.listen(port, ()=>
{
    console.log(`Server running on port ${port}`)
})
```

<aside>
💡 Üstteki kodda yapılan şey servera istekte bulunan kişiyle ilgili başlıklar. İsteğin nereden geldiği, çalıştırdığı sistem tarzı şeyler. Ve bu aslında bir requesttir. Tabi bu requeste bir cevap göndermek isteyebilirsin. Buda şöyle ki:

</aside>

```jsx
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});
```

- Tabii kullanıcı sadece ana sayfa için request atmayabilir. Farklı yere gitmek isterse?

```jsx
app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});
```

- Bu yukarıdakinin anlamı ne biliyor musun? Artık çok sayfalı siteler yapabiliriz!!!!!

# POSTMAN

- Web response statü kodları için (404 vb) →

[HTTP response status codes - HTTP | MDN](http://developer.mozilla.org/docs/Web/HTTP/Status)

### http request status özeti:

- Bekle (100-199)
- BAŞARILISIN!!!! (200-299)
- başka yere geç (yönlendirme) (300-399)
- sıçtın (400-499)
- sıçtım (500-599)

Aga hiç not almadım çünkü not alıncak bir şey yok postman diye bişi var serverın üzerinden http request test edebiliyosun güzel bişimiş.

# İntroduction to Middlewares

Şimdi bizim bu get put patch filan http requestlerimiz varya bunlar servera gitmeden önce arada bir yazılım ile karşılaşıyorlar o işte Middlewares oluyor. Peki bu middlewares nedir? Ne tür şeyler yapabilirler?

- Bir seçenek talepleri önceden işlemektir.
- Bir isteğin birden fazla işleyiciye gideceğini bildiğimizde, belki get post veya put istekleri tarafından işlenebilir.
- Ara yazılımımızın bulunduğu bu ara aşama, aslında devam edebilir ve talebin yönelerini değiştirebilir veya nihai yönlendirmeye gitmeden önce bu talep üzerinde çeşitli işlevler gerçekleştirebilir.
- Ayrıca istekleri console’a kaydetmek için ara yazılım kullanabiliriz.
- Ve son olarak taleplerdeki herhangi bir hatayı da işleyebiliriz. Bunları tanımlayabilir ve işleyicilere gitmeden önce bu hataları da ele alabiliriz.
- Yani sonuç olarak node ve expresste gerçekten yaygın olarak kullanılan bir ara yazılım aracılığıyla isteğe izin vermeden önce temel olarak bir dizi işlev gerçekleştirilebilir.

---

- Backend mühendisliği gövde ayrıştırıcı olarak adlandırılan bir şeydir (çeviriye pek güvenemedim.)
- Bu gövde ayrıştırıcı söylendiği gibi bir gövde ayrıştırma ara yazılımıdır.
- İşleyecileriniz onlara gerçekten erişmeden önce istek gövdelerine bakabilir.
- Bu temel olarak requestimize Body özelliği adında yeni bir özellik verir ve çok yaygın olarak bu form verilerini işlemek için kullanılır.

---

burada form öğreniliyor. Formda name dediğin şey key, girilen değer ise value oluyor. örnek kod:

```html
<form action="/login" method ="POST">
	<label for ="email">Email</label>
	<input type="text" name="email" required>
```

- Buradaki ders içeriğinde bir public klasörü var ve bu ortak klasör genellikle HTML dosylarını, CSS dosyalarını, resimlerimzi gibi statik dosyalarımızı gerçekten değişmeyen ve üzerinde işlem yapılması gerekmeyen şeyleri koyduğumuz yerdir.
- Burada yeni bir fonksiyonumuz var res.sendFile → hangi dosyanın geri gönderileceğini bilmek içindir ve tam bir yol gerektirir(public/index.html)

## how to use middleware?

- Body parser adında bir şey kullanacakmışız.
- Anladığım kadarıyla bu ara yazılım şeysi gelen istek sunucuya gitmeden önce bi bakak la gardaş demek için var ama yinede araştıracağım.

# Custom Middlewares

- Ara katman yazılımı ile gördüğünüz işlevsellik türleri açısından, ön işleme türlerine sahip olduğunuzdan bahsetmiştik.
- Kimlik doğrulama (authentication)
- Hata işleme (error handling)
- günlük tutma (logging request)
- body-parser ön işleme kategorisine aittir.

---

Node için en yaygın kullanılan loglama aracı yazılımlarından biri Morgan adlı bir pakettir ve Dexter Show’dan gelmektedir.

- Temel olarak sunucunuza gelen istekleri günlüğe kaydetmek için kullanılır.
- Bu morgana abinin günlük kaydının ne kadar ayrıntılı olmasını istediğini belirlemek için kullanbileceğin bir dizi seçeneği mevcut.
- bu morgan abinin kullanımında farklı seçenekler var bakarsın.

---

### How to create my own middleware?

- .use yöntemi istek geldiğinde kullanılacak bir ara katmak belirtmek için kullanılır. Ve orada bir fonksiyona geçebiliriz ve istek, bir yanıt nesnesi ve sonraki(next()) metodu vardır çünkü birden fazla ara yazılım olabilir ve ayrıca bu ortada olan bir şeydir.
- Bir sonraki fonksiyon temel olarak ara yazılımdan ne zaman geçmemiz ve sunucu işleyicilerinin akışına devam etmemiz gerektiğini belirler.
- Çok karışık iş üstünden geçmek isticek 😀