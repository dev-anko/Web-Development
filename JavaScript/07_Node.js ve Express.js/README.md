# Backend Nedir?

Backend development (arka uç geliştirme), bir web uygulamasının veya yazılımın sunucu tarafındaki (server-side) geliştirme sürecidir. Backend, kullanıcıların görmemesine rağmen uygulamanın işlevselliğini sağlar ve verileri yönetir. Bu, veritabanı yönetimi, sunucu tarafı programlama ve uygulama mantığı oluşturma işlevlerini içerir.

Backend development ile uğraşan bir geliştirici (backend developer), aşağıdaki temel becerilere sahip olmalıdır:

Sunucu Tarafı Programlama Dilleri:

En az bir sunucu tarafı programlama dilini iyi derecede bilmelidir. Örnek olarak, JavaScript (Node.js), Python (Django, Flask), Ruby (Ruby on Rails), Java (Spring), C# (ASP.NET), PHP gibi diller verilebilir.
Veritabanı Yönetimi:

Veritabanı yönetimi konusunda deneyimli olmalıdır. İlişkisel (MySQL, PostgreSQL) veya NoSQL (MongoDB, Redis) veritabanlarıyla çalışma bilgisine sahip olmalıdır.
Veritabanı tasarımı, optimizasyonu ve sorguları anlamalıdır.
API (Application Programming Interface) Geliştirme:

RESTful veya GraphQL gibi API standartlarını anlamalı ve uygulamalı olarak kullanabilmelidir.
İstemci ve sunucu arasında veri iletişimini yönetebilmelidir.
Sunucu Konfigürasyonu ve Yönetimi:

Sunucu konfigürasyonunu anlamalıdır. Web sunucuları (Apache, Nginx) ve bulut hizmet sağlayıcıları (AWS, Azure, Google Cloud) gibi konseptlere hakim olmalıdır.
Sunucu güvenliğine dikkat etmeli ve temel ağ bilgisi bulunmalıdır.
Web Güvenliği:

Güvenlik konularında bilgi sahibi olmalıdır. SQL enjeksiyonları, XSS (Cross-Site Scripting), CSRF (Cross-Site Request Forgery) gibi saldırıları önleyebilmelidir.
Kimlik doğrulama ve yetkilendirme konularını anlamalıdır.
Version Control System (VCS):

En azından temel seviyede bir VCS aracını (Git gibi) kullanabilmelidir. Projeleri takip etmek, işbirliği yapmak ve sürüm yönetimi yapmak için VCS bilgisi önemlidir.
Temel Frontend Bilgisi:

Frontend teknolojilerine temel düzeyde hakim olmalıdır. Sunucu ve istemci tarafı arasındaki etkileşimi anlayarak daha iyi işbirliği yapabilir.
En azından HTML, CSS, JavaScript konularında bilgi sahibi olmalıdır.
Problem Çözme Yeteneği:

Karşılaşılan sorunları analiz edebilmeli ve etkili çözümler üretebilmelidir.
Performans sorunları, hata ayıklama ve optimizasyon konularında yetenekli olmalıdır.
Backend development, genellikle karmaşık işlevselliği içeren büyük projelerde kullanılır ve bir uygulamanın temelini oluşturur. Backend developer'lar, verilerin işlenmesi, güvenliği, performans ve genel uygulama mantığı konularında uzmanlaşmalıdır.

### ***Server***

- Sunucu sadece bir bir bilgisayardır ve canlı bir web sitesi sunucusu dünyanın her yerinden tarayıcılardan gelen istekleri dinleyebilmek için 7/24 açık olmalıdır. Geleneksel olarak sunucular bu özel amaç için üretilir ve optimize edilir, ancak günün sonunda ağa bağlı herhangi bir bilgisayar sunucu olarak hareket edebilir.
- Ve aslında web sitelerimizi yerel olarak oluşturacağımız zaman, [localhost](http://localhost) adı verilen bir şey kullanacağız, yani oluşturduğumuz web sitelerini sunmak için sunucu olarak kendi bilgisayarımızı kullancağız.
- Bilgisayarını 7/24 açık tutamassın ama bunun önemi yok çünkü sadece test ederken açık ve bağlı olmasına ihtiyacımız var.

#### Ek olarak ChatGPT'ye Server nedir diye sordum:
"Server" (sunucu), bilgisayar ağlarında, diğer cihazlara (istemcilere) hizmet veren bir bilgisayar veya yazılım sistemidir. Sunucular, talepleri işleyerek istemcilere hizmet eder ve genellikle bir veya birkaç belirli görevi yerine getirirler.

**İşte sunucunun temel özellikleri ve görevleri:**

**İstemcilere Hizmet Verme:**

Sunucular, diğer cihazlara (istemcilere) hizmet verir. Bu istemciler genellikle kullanıcı bilgisayarları, mobil cihazlar veya başka sunucular olabilir.

**Veri Saklama ve Yönetme:**

Sunucular, genellikle veritabanlarında veya diğer depolama sistemlerinde veriyi saklar ve yönetir. Kullanıcı hesap bilgileri, uygulama verileri, dosyalar gibi çeşitli veri türlerini depolayabilirler.

**İstekleri İşleme:**

Sunucular, istemcilerden gelen istekleri işler. Bu istekler genellikle HTTP (Hypertext Transfer Protocol) veya diğer iletişim protokollerini kullanarak gelir.

**Web Sunucuları:**

Web sunucuları, istemcilere web sayfalarını veya diğer web içeriğini sunan sunuculardır. İnternet üzerindeki çoğu web sitesi, bir veya birkaç web sunucusu kullanır.

**Dosya Sunucuları:**

Dosya sunucuları, istemcilere dosya ve kaynaklara erişim sağlar. Dosya paylaşımı veya depolama amaçlı olarak kullanılabilirler.

**Uygulama Sunucuları:**

Uygulama sunucuları, özel uygulamalara özel hizmetler sunan sunuculardır. Örneğin, bir e-ticaret uygulamasının iş mantığını işleyen bir uygulama sunucusu olabilir.

**E-Posta Sunucuları:**

E-posta sunucuları, e-posta iletişimini yönetir ve e-posta kutularını saklar. İstemciler, e-posta sunucularına bağlanarak e-posta alışverişi yapabilirler.

**Veritabanı Sunucuları:**

Veritabanı sunucuları, veritabanlarını barındıran ve yöneten sunuculardır. Veritabanı işlemleri için istemcilere hizmet ederler.
Sunucular, çeşitli uygulama alanlarına hizmet edebilir ve genellikle güçlü donanıma ve yüksek performansa sahip olmalıdırlar. Ayrıca, yüksek güvenlik standartlarına uymaları ve yüksek erişilebilirlik sağlamaları beklenir.

### *Application*

- Application backend’in ikinci yönüdür ve application temel olarak o bilgisayarda, yani sunucuda çalışan mantıktır (mantık=logic). Ve bu logic tarayıcıdan gelen isteklere nasıl yanıt vermek istediğinizi belirler.

- Application gelen isteklere göre yanıt veren bir araç olarak betimlenebilir. Örneğin bir istek geliyor ve HTML sayfası döndüyorsa al sana application, tabii her zaman HTML döndürmez bazen veri gönderebilir bazen bir status code (şu 404ler varya he onlar işte) döndürebilir.
- Bu 404’lerin sebebi tarayıcının yapılan requeste nasıl invalid(dönüş) yapacağını bilmemesidir.

**Ek olarak ChatGPT'ye Application ne anlama gelmektedir diye sordum:**
Backend development (arka uç geliştirme) bağlamında, "application" (uygulama), genellikle bir web uygulamasını veya bir yazılım uygulamasını ifade eder. Bu terim, genel olarak bir bilgisayar programının belirli bir işlevselliği gerçekleştiren bir parçasını ifade eder. Backend uygulama, bir web sitesinin veya web uygulamasının arkasında çalışan yazılım parçasını temsil eder.

Backend uygulamaları şu unsurları içerebilir:

1. **Uygulama Mantığı (Application Logic):**
   - Kullanıcıların yaptığı işlemleri işleyen ve veri manipülasyonunu gerçekleştiren kod parçalarını içerir. Örneğin, bir e-ticaret uygulamasında sipariş işleme veya bir sosyal medya platformunda arkadaşlık isteklerini yönetme gibi.

2. **Veritabanı Etkileşimi:**
   - Veritabanlarına veri okuma, yazma ve güncelleme işlemlerini gerçekleştiren kodları içerir. Bu, kullanıcı hesap bilgileri, içerik verileri veya uygulama durumu gibi verileri içerir.

3. **API (Application Programming Interface):**
   - İstemcilerle (genellikle frontend tarafındaki kullanıcı arayüzü) iletişim kurabilmek için sunulan API'leri içerir. Bu, istemcilere veri sağlama veya alıcıdan veri alma yeteneklerini içerir.

4. **Güvenlik Katmanları:**
   - Kullanıcı kimlik doğrulama, yetkilendirme ve güvenlik önlemlerini içerir. Bu, kullanıcıların güvenli bir şekilde giriş yapmalarını sağlama ve uygulama güvenliğini sağlama işlevlerini içerir.

5. **Sunucu Tarafı Yönetimi:**
   - Web sunucuları, işlem yönetimi, sunucu konfigürasyonu ve performans optimizasyonu gibi sunucu tarafındaki işlemleri içerir.

6. **Arka Uç Servisleri:**
   - Backend uygulama, genellikle modüler bir yapıya sahiptir ve farklı servislerin entegrasyonunu içerebilir. Örneğin, ödeme işlemleri, harita servisleri, e-posta gönderme servisleri gibi.

Backend uygulamasının amacı, genellikle iş mantığını yönetmek, verileri işlemek ve istemcilerle (kullanıcı arayüzleriyle) etkileşimde bulunmaktır. Bu uygulamalar, genellikle web sunucuları üzerinde çalışır ve istemcilere (istemci uygulamalara veya tarayıcılara) HTTP veya diğer iletişim protokollerini kullanarak hizmet verir.


### *Database*

- Backendin son kısmı ise database’dir. Şart değildir ancak web sitemiz büyüdükçe doğal olarak database ihtiyacı gerekliliği oluşacaktır.

# Node.js nedir?

- İlk olarak bir framework’e neden ihtiyacımız olduğunu açıklayalım. Bunu mayonez benzetmesi ile yapalım. Diyelim ki acıktın ve ton balıklı sandiviç yapacaksın ve mayonez koymak istiyorsun. Mayonezi kendin mi yapmayı tercih edersin, marketten satın almayımı. Aynen öyle. Frameworklerin sunduğu şeyde tam olarak bu her şeyin hazırını sunuyorlar.
- Yani bu frameworklen tekrar yazmak yerine daha önceden oluşturulmuş bileşenler (componentler) sağlar. URL Strings, tests, error codes vb.

<aside>
💡 “An asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.”
</aside>

- Node.js’e gelelim. Node.js bir JavaScript çalışma zamanıdır. Peki çalışma zamanı ortamı nedir? Aslında şu anlama geliyor. JavaScript ilk çıktığı zamanlarda sadece web üzerinde çalışabiliyordu. Yani web içinde hapsolmuş durumdaydı. İşte node’un yaptığı iş bu JavaScripti tarayıcı dünyasından etkili bir şekilde kurtardı ve masaüstü veya sunucu tarafında her türlü uygulamayı yazmak için kullanmamıza izin verecek özgürlüğü verdi.
- Node.js eşzamansız ve olay odaklıdır (asynchronous event-driven). Peki bu ne anlama geliyor? Asenkron JavaScript kodunuzun her şeyi sırayla yapmak zorunda olmadığı anlamına gelir. Ki bu da kod çalışırken aynı anda başka bir şey yapabileceğiniz anlamına gelir.
- Özetle Node’a ihtiyaç duymamızın nedeni, JavaScript kullanarak genellikle bilgisayarda bir uygulama oluşturmamıza izin vermesidir.
- Server dediğim şey normal bir bilgisayardır biliyorsun tarayıcı değildir ve node.js bunu gerçekleştirmemizi sağlayan şeydir.

**Ek olarak ChatGPT'ye Node.js nedir diye sordum:**
Node.js, sunucu tarafı (server-side) JavaScript çalıştırmak için tasarlanmış, açık kaynaklı ve hızlı bir çalışma ortamıdır. Node.js, Google'ın V8 JavaScript motorunu temel alır ve geliştiricilere JavaScript dilini kullanarak ağ uygulamaları oluşturma yeteneği sağlar.

Node.js'in temel özellikleri şunlardır:

1. **Hızlı ve Verimli:**
   - Node.js, V8 motorunu kullanarak JavaScript kodunu hızlı bir şekilde yürütür. Bu, yüksek performanslı ve verimli uygulamalar geliştirmeye olanak tanır.

2. **Olay Odaklı ve Asenkron:**
   - Node.js, olay tabanlı ve asenkron bir yapıya sahiptir. Bu, uygulamaların aynı anda birden çok görevi ele almasına ve daha verimli bir şekilde kaynakları kullanmasına olanak tanır.

3. **Geniş Modül Kütüphanesi:**
   - Node.js, geniş bir modül kütüphanesine sahiptir. Bu kütüphane, HTTP istemcisi ve sunucusu, dosya sistemine erişim, veritabanı bağlantıları, şifreleme ve daha birçok konuda kullanılabilecek hazır modülleri içerir.

4. **Platform Bağımsız:**
   - Node.js, Linux, macOS ve Windows gibi farklı işletim sistemlerinde çalışabilir. Bu, geliştiricilere farklı platformlarda tutarlı bir şekilde uygulama geliştirme olanağı sağlar.

5. **Aktif Topluluk ve Ekosistem:**
   - Node.js, geniş ve aktif bir geliştirici topluluğuna sahiptir. Npm (Node Package Manager) üzerinden erişilebilen birçok üçüncü taraf paketi içerir. Bu, geliştiricilerin kodlarını paylaşmalarını ve kullanmalarını sağlar.

6. **Mikroservis ve API Geliştirmeye Uygun:**
   - Node.js, mikroservis mimarileri ve RESTful API'lar gibi modern uygulama geliştirme yaklaşımları için uygun bir platform sunar.

Node.js, özellikle hafif, ölçeklenebilir ve hızlı uygulamalar geliştirmek isteyen geliştiriciler arasında yaygın bir tercih haline gelmiştir. Web sunucuları, API'lar, gerçek zamanlı uygulamalar ve mikroservis mimarileri gibi birçok farklı uygulama türü için kullanılmaktadır.
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
Arkadaşlar bu konu çok derin bir konu bu kısımda yapmanız gereken şey Node.js dokumantasonunu okumak olmalıdır. Şahsen ben oyle yapıyorum :D
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

- [Localhost](http://Localhost) basitçe internette bir sunucumuz olmadığında ve bunun yerine sunucumuzu yerel olarak barındırmak istediğimizde kullanılır. Yani kendi bilgisayarımızı websitemizin arka ucunun sunucusu yapmak ve bu da hostingimizin yerel kısmıdır.

## Port tam olarak nedir?

- Port yani bağlantı noktası sunucu bilgisyarımızdaki bir grup kapıya eşdeğerdir ve bu kapıların her birinin bir adresi vardır.
- Bilgisayarımızda çok sayıda kapı olmasının sebi farklı gelen istekleri dinleyebilmesi gerektiğidir. Örneğin yazıcının kullanacağı belirli bir kapı olabilir.
- Her bağlantı noktası benzersi bir numara ile tanımlandığından farklı hizmetler veya farklı uygulamalar ya  da farklı donanımlar belirli bir bağlantı noktası olabilir

<aside>
💡 netstat -ano | findstr “LISTENING” terminal komutu ile dinleme yapan portların listesini alarak havalı görnebilirsin.

</aside>

- Çalışan serverı durdurmak için CTRL+C. Eğer çıkmak istemiyorsan yeni terminal oluşturabilirsin.

### Cannot Get / ne anlama geliyor?

- Bu dizin sayfamıza, ana sayfamıza ulaşamadığı anlamına gelir. Yani bunu şöyle düşün 15.000 odalı bir hotele geldin ama girişte seni yönlendiricek kimse yok mal gibi kalıyorsun ortada, aynen o hesap nereye gideceğini bilemediği için hata döndürüyor.


# HTTP Requests

## What is HTTP?

- HTMLin başıyla aynı. HyperText Transfer Protocol.
- İkinci kısım bir dil olarak tanımlanır, bilgisayarların internet üzerinden birbirleriyle konuşabilmeleri sağlayan bir dil. Bilgisayarlar internet üzerinde birbirleriyle konuşabilmek için http’ye ihtiyaç duyarlar. Şimdi yeni bir ülkeye gittiğinde o ülkede konuşulan dillerin temel ve hayatta kalmana yardımcı olucak kelimelerini düşün, httpde bunları öğreneceğiz.
- HTTP istekleri yaptığımızda karşılaşacağımız 5 ana kelime var:
1. ***Get:*** Daha önce sunucumuzu çalıştırıp web sitemizi sunucudan istemeye çalıştığımızda alamayacağımızı söyleyen bir hata aldığımızı hatırla. Get öğrenmemiz gereken ilk kelimelerden biridir. Ve bu, sunucudan bir kaynak talep etmek istediğimiz zamandır. Bu kaynak bir web sitesi olabilir, bir metin parçası olabilir, veritabanından veya sunucudan bir veri parçası olabilir. Ancak get anahtar sözcüğünü kullanarak Http isteğinizi yaptığınızda sunucudan bir şey alıyorsunuz.
2. ***Post:*** Postu anlamakta benzer şekildedir. Bu durumdada yaptığımız şey sunucuya bir kaynak göndermektir. Bu, web sitenize kaydolmak için bir formunuz varsa, kaydolma düğmesine tıkladıklarında e-posta ve şifrelerin sunucunuza gönderilmesi gibi bir bilgi parçası olabilir. Bu da bir gönderi talebi kullanılarak yapılacaktır. Sunucu tarafında ise bu bilgileri alabilir ve daha sonra bunlarla istediğinizi yapabilir, bir veritabanına kaydedebilir veya işleyebilir ya da bir şekilde bunlarla çalışabilirsiniz.
3. ***Put:*** Put ve patch birbirleriyle bir şekilde ilişkilidir çünkü temelde bunlar güncelleme yöntemleridir. Ancak bunlar biraz farklıdır. Bir kaynağı gönderdiğiniz her neyse onunla değiştirmek istediğinizde istekte bulunacağını söyleyeceğim. Yani bir şeyi tamamen değiştirerek güncellemek istiyorsun.
4. ***Patch:*** Patch biraz farklıdır ve esasen bir kaynağı yamamak istiyorsunuz, bunların her ikiside güncelleme olsa da biraz farklı çalışırlar. Bu iki güncelleme türü arasındaki fark için iyi bir benzetme: Amazon iadesi. Diyelim ki amazondan bir bisiklet satın aldınız ve teslim aldığınızda ne yazık ki lastiklerden biri kırıldı. Şimdi amazona bana kırık bisiklet gönderdiniz dediğinde iki seçenekleri var: Ya sana tamamen yeni bir bisiklet vermek için bir satış talebi kullanmalıdır sadece bisikletinizi yeni bir bisikletle değiştiriyorlar ki bu şekilde bisikleti güncellemiş olursun. Diğer seçenek ise patch(yama) talebidir: bu durumda size sadece çalışan tekerleği gönderirler böyle sizde kırık tekerleği bu yeni çalışan tekerlekle değiştirebilir ve kırık bisiklete yama yapabilirsiniz.
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
// Buradakai "/" kullanımı sanırım ana sayfa demek oluyor. Dizin muhabbeti gibi bişey.
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

- HTTP istekleri atabilmen için güzel bir uygulama kullan bence kanks.
- Web response statü kodları için (404 vb) →

[HTTP response status codes - HTTP | MDN](http://developer.mozilla.org/docs/Web/HTTP/Status)

### http request status özeti:
HTTP (Hypertext Transfer Protocol) isteklerinin ve yanıtlarının durumlarını belirtmek için kullanılan durum kodları (status codes) HTTP protokolünün temel bir parçasıdır. İşte bazı yaygın HTTP durum kodlarının anlamları:

1. **1xx (Informational):**
   - `100 Continue`: İstemcinin, sunucunun bir sonraki isteği almasını beklemesi gerektiğini belirten bir bilgi kodu.

2. **2xx (Success):**
   - `200 OK`: İstek başarıyla tamamlandı.
   - `201 Created`: Yeni bir kaynak başarıyla oluşturuldu.
   - `204 No Content`: İstek başarıyla tamamlandı, ancak yanıt içeriği boş.

3. **3xx (Redirection):**
   - `301 Moved Permanently`: Kaynak kalıcı olarak başka bir konuma taşındı.
   - `302 Found`: Kaynak geçici olarak başka bir konuma taşındı.
   - `304 Not Modified`: İstemcinin önbellek sürümü güncel ve kaynak değişmemiş, bu nedenle içerik gönderilmez.

4. **4xx (Client Error):**
   - `400 Bad Request`: İstek, sunucu tarafından anlaşılamadı veya işlenemedi.
   - `401 Unauthorized`: İstek için yetkilendirme gerekiyor.
   - `403 Forbidden`: İstek, sunucu tarafından reddedildi (yetkilendirme yok veya yetersiz).
   - `404 Not Found`: İstek yapılan kaynak bulunamadı.

5. **5xx (Server Error):**
   - `500 Internal Server Error`: Sunucu bir iç hata ile karşılaştı ve isteği tamamlayamadı.
   - `502 Bad Gateway`: Sunucu, başka bir sunucudan gelen geçersiz yanıtı alarak isteği tamamlayamadı.
   - `503 Service Unavailable`: Sunucu şu anda hizmet veremiyor (aşırı yük, bakım, vb.).
   - `504 Gateway Timeout`: Sunucu, bir başka sunucudan gelen yanıtı belirli bir süre içinde alamadı.

Bu durum kodları, HTTP iletişimi sırasında istemci ve sunucu arasındaki durumu belirtmek için kullanılır. Durum kodları, isteğin başarıyla tamamlandığını, yönlendirildiğini, hatalı olduğunu veya başka bir durumu temsil eder. Bu durum kodları, web tarayıcıları ve diğer HTTP istemcileri tarafından yorumlanarak kullanıcılara uygun mesajlar gösterilmesine yardımcı olur.

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