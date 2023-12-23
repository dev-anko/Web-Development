# INTRODUCTION TO APIS

- Bu bölümde inernetteki yazılımlar arasındaki iletişi sağlayan teknoli API’lar hakkında her şeyi öğreneceğiz.
- API = Application Programing Interface (Uygulama programlama arayüzü)
- Farklı yazılımların birbirleriyle nasıl etkileşime girebileceğini tanımlayan bir dizi kural ve protoköldür.
- Dünya üzerindeki her şey yazılımın kölesi durumunda, kitap almak için amazona giriyoruz, televizyon yerini netflixe bıraktı vs vs. Tüm bunlar olurken düşünülmesi gereken şeylerden biri de bu yazılım parçaları arasındaki iletişimdir.
- Bir örnek verelim. Bir websiten olsun ve bu sitede hava durumunu göstermek istiyorsun. Bir bakmışsın OpenWeather diye bir şirket sana yardımcı olmak istiyor. Sen bu şirkette hangi programlama dilleri kullanılmış hangi teknolojiler hangi veritabanları kullanılmış bilmiyorsun ancak OpenWeather sana “Merak etme benim API’m var” diyor. Bu API aracılığı ile istediğin soruguyu yaparak istediğin bölgenin hava durumuna erişebiliyorsun! Al sana API!
- Aslında temelde yaptığımız iş get request atmak.
- Hep duyduğum GraphQL, SOAP, REST:API, gRPC gibi API türleri aslında mimari tarzlarıymış.
- API mimarimizi ihtiyacımıza göre seçeceğiz çünkü API dediğin şey aslında bir dizi kuraldır ve her biri API oluşturmak için farklı kural setlerine karar verir.
- Biz şimdilik REST API öğreniceğiz ama gelecekte GraphQL gibi sıklıkta duyduğum api türlerinide öğreneceğim, bence sende öğrenmelisin.

## REST API

REST API (Representational State Transfer - Temsil Durumu Transferi), web hizmetlerini tasarlamak ve uygulamak için kullanılan bir mimari stildir. REST, Roy Fielding tarafından 2000 yılında doktora tezi kapsamında tanımlanmıştır ve bu, günümüzde web servislerinin tasarımında popüler bir yaklaşım haline gelmiştir.

REST API'nin temel özellikleri şunlardır:

1. **Kaynaklar (Resources):** Her kaynak, benzersiz bir URI (Uniform Resource Identifier) ile temsil edilir. Örneğin, bir blog uygulamasında makaleler, yorumlar veya kullanıcılar gibi kaynaklar olabilir.

2. **HTTP Metotları (HTTP Methods):** REST, HTTP protokolünü kullanır ve bu protokoldeki temel metotları kullanarak işlemler gerçekleştirir. Örneğin, `GET` metodu bir kaynağın okunması için, `POST` metodu yeni bir kaynak oluşturmak için kullanılır.

3. **Temsil Durumu (Representation State):** Her kaynak, belirli bir durumu temsil eder ve bu durum genellikle JSON veya XML formatında ifade edilir. Bu veri formatları, uygulamalar arasında veri alışverişini sağlamak için yaygın olarak kullanılır.

4. **Bağlantısızlık (Statelessness):** REST, bağlantısız bir mimariyi benimser. Her istek bağımsızdır ve isteğin bağlamı, sunucu tarafında saklanmaz. Her istek, gerekli bilgileri içerir ve sunucu, bu isteği anlamak ve işlemek için yeterli bilgiye sahiptir.

5. **Temel URL (Base URL):** Bir REST API, bir temel URL altında organize edilir. Örneğin, `https://api.example.com` gibi bir temel URL kullanılabilir.

REST API, genellikle JSON veya XML gibi hafif ve yaygın olarak desteklenen veri formatlarıyla çalışır. JSON, özellikle JavaScript tabanlı uygulamalar için doğal bir formattır.

RESTful servisler, genellikle basit, hafif ve kolayca anlaşılabilir olmaları nedeniyle tercih edilir. Ancak, veri taleplerinin değişken olduğu durumlarda (overfetching veya underfetching gibi), daha fazla esneklik ve kontrol sağlayan GraphQL gibi alternatif teknolojilere yönelmek de mümkündür.

## STRUCTURING API REQUESTS

- Bu dersin konusu API isteklerini nasıl biçimlendireceğimiz ile ilgili.
- Kendi yaptığımız projelerde aslında private API kullanıyoruz. Front ve Back arasındaki konuşma private API ile gerçekleşiyor, yani insanların kullanması için dökümantasyon oluşturmadığımız bir API.
- Bu derstte öğrenilecek şey ise public API’ları nasıl kullanacağımız.
- Endpoint diye bir şey var taağğam mı? Bu endpoint temel olarak API sağlayıcı sunucusundaki farklı bir rotadır ve dökümantasyonda genellikle hangi endpointleri kullanabileceğinize ve bu endpointlerin amacının ne olduğuna dair bir örnek verirler. Zaten API dökümantasyonlarında bununla ilgili bilgiler veriliyor.
- Bir isteği yapılandırmanın bir sonraki yönü sorgu parametreleri olarak adlandırılan bir şeydir. endpoint?query=value şeklinde bir kullanımı vardır. Tüm sorguları bir soru işaretiyle bşalatırsan ve ardından temelde bunun sorgunun adı olduğu ve ardından bir eşittir ve ardından bu sorgu için sağladığın bir anahtar değer çiftidir. YAV YAZDIMYA KULLANIMI O İŞTE AWK. Ayıca & işareti ile birden fazla query ekleyebilirsin.
- Son yapı ise yol parametresi olarak adlandırılan bir şeydir. Bunu tam algılayamadım sanırım özel olarak bulmayı sağlıyor. Buda unique değer üzerinden gerçekleşiyor bakacaz buna. Aynen sabit değerler üzerinden bulmak için unique değerleri kullanıyoruz bu nasıl bir cümle oldu anlamadım amk ama işi anladım okey.

# WHAT IS JSON?

- JavaScript Object Notation anlamına gelir.
- İnternet üzerinden gönderilebilecek verileri okunabilir ve aynı zamanda verimli bir şekilde biçimlendirmenin bir yoludur.
- JSON’ın temel amacı JavaScript nesnelerini internet üzerinde taşınabilir bir hale getirmektir. Örneğin bir JavaScript nesnesi IKEA’da ki bir dolap olursa, JSON bu dolabın parçalanmış, modüllere ayrılmış halidir. Taşınması daha kolay olacaktır.
- JSON dosylarını daha rahat okumak istersen eğer:

[Online JSON Viewer](https://jsonviewer.stack.hu/)

- Kod yazarken ve internet üzerinden bir JSON göndermek istediğinde, serileştirme (Serialization) işlemi gerçekleştirmen gerekicek. Onuda aha şöyle yapıyorsun:

```jsx
const jsonData = JSON.stringify(data);
// data -> JavaScript objen bunu JSON'a dönüştürüyorsun ve jsonData'nın
// içine atıyorsun.
```

- Yukarıdaki arkadaşın mantığı şu dedikya JSON JavaScript objelerini string haline getiren bir şey diye he bu arkadaşta objeni stringe getirip jsona çeviriyor.
- Ve tabiki sen bu taşıma işlemini tamamladıktan sonra JSON’u tekrar objeye çevirmek isteyebilirsin oda şöyle:

```jsx
const data = JSON.parse(jsonData);
```

# Making Server-Side API Requests with Axios

Demeden evvel API nedir bir chatgpt tekrarı yapalım.

<aside>
💡

API, "Uygulama Programlama Arayüzü"nün kısaltmasıdır. API, farklı yazılım uygulamalarının birbirleriyle iletişim kurmasını sağlayan kurallar ve protokoller kümesidir. API'ler, geliştiricilerin bir hizmeti, kütüphaneyi veya sistemi etkileşimde bulunmak için kullanabileceği yöntemleri ve veri biçimlerini tanımlar. API'ler, farklı yazılım bileşenlerinin entegrasyonunu mümkün kılarak birlikte çalışmalarını sağlamak için kullanılır.

API'ler, web uygulamaları, işletim sistemleri, veritabanları, donanım cihazları ve daha birçok uygulamada bulunabilir. Farklı yazılım sistemleri arasında veri değişimini, işlevsellik erişimini ve otomasyonu etkinleştirmek için gereklidirler. API'ler şunlar için kullanılabilir:

1. Veri Almak: Geliştiriciler, API'leri uzak bir sunucudan veri talep etmek için kullanabilirler, örneğin hava durumu bilgilerine, hisse senedi fiyatlarına veya sosyal medya gönderilerine erişim sağlamak.
2. Veri Göndermek: API'ler, bir web sitesinde form göndermek veya bir sosyal medya platformunda mesaj göndermek gibi veri göndermek için kullanılabilir.
3. İşlevselliğe Erişim: API'ler, bir yazılım uygulaması veya sistemin içindeki belirli işlevleri veya hizmetleri erişilebilir kılar. Örneğin, Amazon Web Services (AWS) gibi bulut hizmetleri, geliştiricilere sanal makineler veya depolama gibi kaynakları yönetmek için API'ler sağlar.
4. Görevleri Otomatikleştirmek: API'ler, bir yazılım sisteminin başka bir sistemde eylemler gerçekleştirmesine izin vererek otomasyonu etkinleştirir. Bu, betikleme ve iş akışı otomasyonunda yaygın olarak kullanılır.

API'ler, RESTful API'ler, SOAP API'ler, GraphQL API'ler ve daha birçok farklı biçimde gelebilir, her biri kendi kurallar ve protokoller kümesine sahiptir. Geliştiriciler, bu API'leri hizmetlerle etkileşimde bulunmak, veri almak ve işlevselliği kendi uygulamalarına entegre etmek için kullanırlar.

Özetle, API'ler modern yazılım geliştirmesi için hayati öneme sahiptir ve farklı yazılım bileşenlerinin sorunsuzca etkileşimde bulunmasını mümkün kılar. Farklı yazılım uygulamalarının ve hizmetlerin sorunsuz bir şekilde etkileşimde bulunmasını mümkün kılan kuralları ve yöntemleri tanımlarlar.

</aside>

- Buradaki amaç kendi sunucumuza başka bir sunucudan veri veya kaynak çekmektir. Bunuda API’ler ile yapacağız.
1. API kullanarak farklı bir sunucudan kendi sunucumuza veri veya kaynak çekme işlemi https kullanarak yapıyormuşuz. Bunun için bir başlangıç kodumuz var.

```jsx
import https from "https";
app.get("/", (req,res) =>
{
	const options =
	{
		hostname: "bored-api.appbrewery.com",
		path: "/random"
		method: "GET",
	};
```

Şimdi burda kesiyorum çünkü buradaki kod baya uzun ve karmaşık bir şeymiş. Bunu anlatmasının sebebi bununda kısa yolu olması işte o axios kullanmak oluyor. HTTPS kullanmak yerine Axios kullanrak daha kısa kodla API ile iletişime geçebiliyoruz.

Axios’un avantajı ne yapmak istediğimizi bilmesidir. Yani sunucumuzdan internet üzerindeki başka bir kaynağa ulaşmaya çalıştığımızı kendisi gayet iyi biliyor.

npm’den axios paketini kullandığımızı unutma.

Ben şuraya bir tane örnek axios kodu yazayım 😀

```jsx
import axios from "axios";
app.get("/", async (req,res) => 
{
	try {
		const response=await axios.get("apilinki");
		res.render("index.ejs"), {activity: response.data});
	} catch (error) {
		console.error("error message", error.message);
		res.status(500).send("error message");
	}
});
```

Axios’un güzelliklerinden biri gelen json verilerini parse etmeye gerek yoktur direk kullanabiliyoruz.

Aynı zamanda error yakalama ve error mesajı gönderme özelliği daha güçlüdür.

Ancak bizim bunu kullanmamızın temel sebebi tek satırda farklı sunucuya istekte bulunabiliyor olmasıdır.

---

Axios en sık kullanılan istek yöntemlerinin tümü için bir takma ad oluşturur. Örneğin axios.request, axios.get gibi.

# API AUTHENTICATION

Amacımız her kapıyı çalana veri vermeyi engellemek. Yani kimlik doğrulaması yapmak.

- 401 yetkisiz anlamına gelmektedir.

Kimlik doğrulamayı 4 katmanda düşüneceğiz:

1. No Authentication (Doğrulama yok)
2. Basic Authentication
3. API Key Authorisation (Authorisation yetkilendirme demek, authentication doğrulama demek.)
4. Token Based Authentication

## No Authentication

Şimdiye kadar kullandığımız API kısmıdır. Bu API’lara herkes public olarak erişim sağlayabilir. Ancak yinede kötüye kullanımı engellemek amacıyla bir sınır koyulur. 15 dakika içerisinde max. 100 request atmak gibi.

## Basic Authentication

id ve şifre ile kimlik doğrulaması yapılan API’dır.

Sarnırım bu username:password u alıp base64 tabanlı bir şeye çevirerek güvenliği sağlamaya çalışyoruz. Aynen doğru anlamışım. Id ve password taşınırken base64 koduna çevrilip taşınıyor ama amaç güvenlik mi başka bir şey mi emin değilim.

[Secrets API Documentation](https://secrets-api.appbrewery.com/)

Bu ders için bunu kullanacağız.

## API Key Authorisation

Kimlik doğrulama API sağlayıcısına kullanıcı olarak tanımlanmanızı sağlayan bir şeydir. Yetkilendirme, bir API kullanmanıza izin veren bir şeydir. Yani biri kullanıcı girişi tarzındayken diğeri key ile giriş gibi.

Pek çok API bunu kullanır çünkü key başına kullanım takip edilebilir. Bunun yanı sıra büyük API’lar kullanımına göre ücret alırlar buna görede key oluşturabilirler.

API KEY verirken postmande QueryParams yapmayı unutma, ayrıca bazı API’lar link içerisinde apiKEy isterken bazıları sadece parametre olarak kabul edebilir.

## Token Based Authentication

Biraz karışık detaylı araştırmamız gerekecek ancak temel olarak olay şu. Bir uygulama yaptığını düşün ve uygulamada Google Takvim API’si kullancaksın. Kullanıcıya bunun için id ve password oluşturtmak yerine Google ile giriş yapmasını söylüyorsun ve Google kullanıcı için bir belirteç(sanırım token demek istiyor) oluşturuyor ve bunun üzerinden API kullanımını sağlıyor. Ve güvenlik, bakım gibi tüm sorunlarla o uğraşıyor.

# REST APIs

<aside>
💡 async fonksiyonun anlamı kabataslak olarak şöyle: Bir fonksiyonun başına async konuyorsun ve fonksiyonun içerisinde await kullanıyor bu await oradaki işlem gerçekleşene kadar sonraki adamın bekletilmesi anlamına geliyor. Bunun güzel yanı kodumuzun eş zamanlı bir kodmuş gibi görünmesini sağlamasıdır. .get().then() de aynı şeyi yapıyor ama async await kullanmak çok daha moderndir.

</aside>

<aside>
💡 axios.get()’te isteğe bağlı olarak URL ve config olmak üzere iki parametre var axios.post()’ta ise bunların arasına body geliyor. bu bodyde Form verilerimizin gövdesidir. Kanka bunları dökümantasyondan bakarsın her birinin nasıl kullanıldığı yazıyor.

</aside>

---
API notlarım çok karışıkmış şimdilik dursun sonra üstünden geçeceğim.