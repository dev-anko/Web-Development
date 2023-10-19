// Copilot notes

// API nedir?
// API, bir yazılımın başka bir yazılımdan talep ettiği veri setidir.

// Hangi çeşit API'lar vardır?
// 1- SOAP
// 2- REST
// 3- GraphQL
// 4- RPC
// 5- gRPC
// 6- Web API
// 7- Microservices
// 8- Open API
// 9- Serverless
// 10- API Gateway

// Bunların birbirinden farkı nedir?
// SOAP: Simple Object Access Protocol
// REST: Representational State Transfer
// GraphQL: Graph Query Language
// RPC: Remote Procedure Call
// gRPC: Google Remote Procedure Call
// Web API: Web Application Programming Interface
// Microservices: Microservices Architecture
// Open API: Open Application Programming Interface
// Serverless: Serverless Architecture
// API Gateway: API Gateway Pattern

// API'lar nasıl çalışır?
// API'lar, istemci ve sunucu arasında bir arayüz görevi görür. İstemci, sunucudan veri almak için API'ları kullanır.

// API'lar neden kullanılır?
// API'lar, yazılım geliştiricilerin yazılımlarına başka yazılımların verilerini entegre etmelerini sağlar.
// Örneğin; bir web sitesi, başka bir web sitesinin verilerini kullanmak istiyorsa API'lar sayesinde bu işlemi gerçekleştirebilir.

// --------------------------------------------------------------------------------------

// Myself notes

// INTORDUCTION TO API
// - Bu bölümde inernetteki yazılımlar arasındaki iletişimi sağlayan teknoloji API’lar hakkında her şeyi öğreneceğiz.
// - API= Application Programing Interface (Uygulama programlama arayüzü)
// - Farklı yazılımların birbirleriyle nasıl etkileşime girebileceğini tanımlayan bir dizi kural ve protoköldür.
// - Dünya üzerindeki her şey yazılımın kölesi durumunda, kitap almak için amazona giriyoruz, televizyon yerini netflixe bıraktı vs vs. 
// Tüm bunlar olurken düşünülmesi gereken şeylerden biri de bu yazılım parçaları arasındaki iletişimdir.
// - Bir örnek verelim. Bir websiten olsun ve bu sitede hava durumunu göstermek istiyorsun. Bir bakmışsın OpenWeather diye bir şirket sana yardımcı olmak istiyor. 
// Sen bu şirkette hangi programlama dilleri kullanılmış hangi teknolojiler hangi veritabanları kullanılmış bilmiyorsun ancak OpenWeather sana “Merak etme benim API’m var” diyor. 
// Bu API aracılığı ile istediğin soruguyu yaparak istediğin bölgenin hava durumuna erişebiliyorsun! Al sana API!
// - Aslında temelde yaptığımız iş get request atmak.
// - Hep duyduğum GraphQL, SOAP, REST:API, gRPC gibi API türleri aslında mimari tarzlarıymış.
// - API mimarimizi ihtiyacımıza göre seçeceğiz çünkü API dediğin şey aslında bir dizi kuraldır ve her biri API oluşturmak için farklı kural setlerine karar verir.
// - Biz şimdilik REST API öğreniceğiz ama gelecekte GraphQL öğrenmek istiyorum kampuste GraphQL kullanılıyor.

//  REST API
// - REST API belirli bir dizi kuralı takip eden API’lerdir.
// - API dökümantasyonunu seçebileceğin bir öğle yemeği menüsü gibi düşün. Ben ne istiyorum? Ona göre sipariş vermeliyim! Tabii burda sipariş yerine http request yolluyoruz xD

// REST API’lerin 6 ana kuralı var:
// 1. Uniform Interface
// 2. Stateless
// 3. Cacheable
// 4. Client-Server
// 5. Layered System
// 6. Code on Demand (optional)

// STRUCTURING API REQUESTS
// - Bu dersin konusu API isteklerini nasıl biçimlendireceğimiz ile ilgili.
// - Kendi yaptığımız projelerde aslında private API kullanıyoruz. 
// Front ve Back arasındaki konuşma private API ile gerçekleşiyor, yani insanların kullanması için dökümantasyon oluşturmadığımız bir API.
// - Bu derstte öğrenilecek şey ise public API’ları nasıl kullanacağımız.
// - Endpoint diye bir şey var taağğam mı? Bu endpoint temel olarak API sağlayıcı sunucusundaki farklı bir rotadır ve dökümantasyonda genellikle hangi endpointleri kullanabileceğinize ve 
// bu endpointlerin amacının ne olduğuna dair bir örnek verirler. Zaten API dökümantasyonlarında bununla ilgili bilgiler veriliyor.
// - Bir isteği yapılandırmanın bir sonraki yönü sorgu parametreleri olarak adlandırılan bir şeydir. endpoint?query=value şeklinde bir kullanımı vardır. 
// Tüm sorguları bir soru işaretiyle bşalatırsan ve ardından temelde bunun sorgunun adı olduğu ve ardından bir eşittir ve ardından bu sorgu için sağladığın bir anahtar değer çiftidir. 
// YAV YAZDIMYA KULLANIMI O İŞTE AWK. Ayıca & işareti ile birden fazla query ekleyebilirsin.
// - Son yapı ise yol parametresi olarak adlandırılan bir şeydir. Bunu tam algılayamadım sanırım özel olarak bulmayı sağlıyor. 
// Buda unique değer üzerinden gerçekleşiyor bakacaz buna. Aynen sabit değerler üzerinden bulmak için unique değerleri kullanıyoruz bu nasıl bir cümle oldu anlamadım amk ama işi anladım okey.,

// WHAT IS JSON?
// - JSON, JavaScript Object Notation'ın kısaltmasıdır ve JavaScript nesnelerini temsil etmek için kullanılan bir veri biçimidir.
// - JSON, JavaScript nesnelerini temsil etmek için kullanılan bir veri biçimidir.
// - JavaScript Object Notation anlamına gelir.
// - İnternet üzerinden gönderilebilecek verileri okunabilir ve aynı zamanda verimli bir şekilde biçimlendirmenin bir yoludur.
// - JSON’ın temel amacı JavaScript nesnelerini internet üzerinde taşınabilir bir hale getirmektir. 
// Örneğin bir JavaScript nesnesi IKEA’da ki bir dolap olursa, JSON bu dolabın parçalanmış, modüllere ayrılmış halidir. Taşınması daha kolay olacaktır.
// - JSON dosylarını daha rahat okumak istersen eğer:
// [Online JSON Viewer](https://jsonviewer.stack.hu/)
// - Kod yazarken ve internet üzerinden bir JSON göndermek istediğinde, serileştirme (Serialization) işlemi gerçekleştirmen gerekicek. Onuda aha şöyle yapıyorsun:

// ```
// const jsonData = JSON.stringify(data);
// // data -> JavaScript objen bunu JSON'a dönüştürüyorsun ve jsonData'nın
// // içine atıyorsun.
// ```

// - Yukarıdaki arkadaşın mantığı şu dedikya JSON JavaScript objelerini string haline getiren bir şey diye he bu arkadaşta objeni stringe getirip jsona çeviriyor.
// - Ve tabiki sen bu taşıma işlemini tamamladıktan sonra JSON’u tekrar objeye çevirmek isteyebilirsin oda şöyle:
// ```
// const obj = JSON.parse(jsonData);
// ```