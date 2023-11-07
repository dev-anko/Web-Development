# INTRODUCTION TO JAVASCRIPT ES6

**Sayın okur unutma ki bunlar benim kişisel notlarım, anlatım tarzı biraz enteresan gelebilir :)**
**Buradaki notların kullanımlarını veyahut ilgili projeleri index.js dosyası içerisinde bulabilirsin. Her biri yorum satırı şeklinde olucak ancak hangi başlık ile ilgili olduklarınıda belirteceğim. Aç bir derleyici güle güle kullan. Yalnızca projeler yorum satırı şeklinde değil normal şekilde olucak.**

---

## JavaScript'in doğuşu!
- Tarayıcıların ilk zamanında tarayıcıda bir hareketlilik gerektiği zaman bilgisayar sunucuya veri gönderiyor ve sunucuda yeni verileri içeren web sayfasını döndürüyordu. Ancak o zamanlarda bu çok patates bir durumdu ve Netscape mi artık her neyse onlar programcı olmayan insanların bile websitelerine animasyon koyabilmelerini sağlayak bir programlama dili oluşturması için Brendan Eich ile anlaştılar ve javascipt doğdu! JS’in ilk adı LiveScript idi, sonra microsofttaki mühendisler buna ters mühendislik uyguladılar ve JScript oldu ardından avrupalılar buna ECMAScript dediler ki bu Avrupa bilgisayar üreticileri birliği senaryosu anlamına geliyor. Örneğin JS sürümlerinin ES olarak adlandırılması burdan gelmektedir.

---

## Script ne demek?
- Nasıl ki tiyatro oyunlarında oyunculara neyi nasıl yapması gerektiğini söyleyen senaryolar varsa, bu scriptte web sitesine neyi nasıl yapması gerektiğini söylüyor diyebiliriz.
- İsminde Java geçmesinin sebebi 90’larda “Java” kelimesinin günümüzdeki Blockchain gibi çok popüler olmasıydı ve insanlar her şeylerine Java adını veriyorlardı.
- Java ile JS arasındaki temel fark JavaScript’in yorumlanmış bir programlama dili olmasına karşın Java’nın derlenmiş bir programla dili olmasıdır.
**Interpreted: Yorumlanmış, Compiled: Derlenmiş.**

---

## JavaScript Variables
- “Prompt” anahtar kelimesini öğreniyoruz. Bunu yazdığın zaman chrome karşına adını soran ve adını girebildiğin bir popup çıkarır.

![popup](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/64d316e2-07ef-4246-a574-4dd819bf1429/Untitled.png)

- Adımızı girdik ancak bu bilgiyi hafızada bir yere kaydetmedik ve uçtu gitti. Bunu hatırlamak için değişken kullanacağız ve değişken tanımlamanın üç adet anahtar kelimesi vardır. Bunlar `let`, `var` ve `const` anahtar kelimeleridir. Bu anahtar kelimeler, değişkenleri tanımlarken ve nasıl davranacaklarını belirtirken kullanılır. Aslında, bu anahtar kelimeler değişkenlere atanan değerlerin veri tiplerini belirler.

Bu anahtar kelimeler arasındaki temel farklar şunlardır:

`var`:
- Geniş kapsamlıdır ve herhangi bir yere taşınabilir (function scope).
- İlerletilmiş değişken tanımlama (hoisting) özelliğine sahiptir.
- Blok seviyesi kapsamı yoktur, yani {} içinde tanımlanan bir değişken, dışarıdan da erişilebilir.
- Aynı isimde birden fazla var değişkeni tanımlanabilir.

`var x = 5`;

`let`:
- Blok kapsamına sahiptir (block scope).
- İlerletilmiş değişken tanımlama (hoisting) özelliğine sahiptir, ancak kapsamın başında tanımlanmış gibi davranır.
- Aynı isimde bir değişken sadece bir kez tanımlanabilir.

`let x = 5`;

`const`:
const değişkeni sabit bir değere sahiptir ve bir kez atandığında değiştirilemez.
Blok kapsamına sahiptir (block scope).
İlerletilmiş değişken tanımlama (hoisting) özelliğine sahiptir, ancak kapsamın başında tanımlanmış gibi davranır.

`const x = 5;`

Bu anahtar kelimeleri kullanarak, değişkenlerin tanımlanma süresi, kapsamı ve davranışları kontrol edilebilir. Ayrıca, let ve const tercih edilen seçeneklerdir, çünkü var'ın bazı istenmeyen davranışları vardır.

---

## Naming and Naming Conventions for JS Variables

- Değişken adı sayıyla başlamaz.
- Sadece harfler sayılar dolar işareti ve alt çizgi içerebilir.
- Bir de şuan ismini tam hatırlayamadığım develi bir şey vardı ya şey diyordu `benimcanimdegiskenim` diye adlandırma, `benimCanimDegiskenim` diye adlandır. Yani ilk harf küçük sonrasi kelimelerin ilk harfleri büyük. Deve şeysine benziyor ya adı gelmedi aklıma ya, deve şeysi işte.

---

## String Concatenation

- Concatenation: Birleştirme anlamında kullanılır.
- JavaScripttede değişken birleştirirken boşluk eklemek gerekli aklında olsun. Ve boşlukları sayısı kadar bırakıyor vay be dev hizmet.

---

## String Lengths

- değişken.length kaç karakterden oluştugunu verir.
- length bir fonksiyon değildir oyüzden x.length() olarak değil x.length olarak kullanılır.

---

## Slicing and Extracting Parts of a String

- slice fonksiyonu bir değeri istediğin yerden kesmeye yarar. Örneğin name=”Anıl” isimli bir değişkenin var. name.slice(0,1); demek 0. karakterden başlayıp 1’e KADAR olan karakterleri koyar. 1 dahil değildir. slice gibi array fonksiyonları arrayler konusunda daha detaylı var SAKİN OL KARDEŞİM YAV.

