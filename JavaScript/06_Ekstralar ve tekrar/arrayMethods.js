// Tüm array functionlarını deneyelim.
let array1 = [1,2,3,7,7,4,5,6,7,10,20,30];
let array2 = new Array(10);
let array3 = new Array();
let array4 = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB',1,2,3];
let array5 = [1,2,3,4,5]
let word1 = "JavaScript";
let word2 = "Anıl Sezgin dünyanın en yakışıklı adamıdır.";
const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ];

// console.log(word1.split("p")); // string ifadeyi verilen ifadelerden keserek diziye atar.
// console.log(array2.fill("x")); // array 2'yi "x" ile doldurur.
// console.log(array2.concat(array4)); // array4'ü array2'ye ekler.
// console.log(array4.indexOf("MongDB")); // elemanın bulunduğu ilk indexi döndürür.
// console.log(array1.lastIndexOf(7)); // elemanın olduğu son indexi döndürür.
// console.log(array4.includes("HTML")); // elemanın varlığını kontrol eder.
// console.log(Array.isArray(array2)); // array mi değil mi ona bakar.
// console.log(array4.toString()); // diziyi stringe çevirir.
// console.log(array4.join(", ")); // dizi elemanlarının arasına istenen şeyi koyarak stringe çevirir.
// console.log(array4.slice(0,6)) // diziyi belli aralıkta kopyalamak için kullanılır (bitiş değeri dahil değil)
// array4.splice(0,2,1,2,3) // önce çalıştırıp sonra loglamak gerekiyor türkçesi 0'dan başla 2 eleman kaldır yerlerine 1 2 3 ekle.
// console.log(array4);
// array4.push("bunu sondan ekledim"); // sondan eklemeye yarar
// console.log(array4);
// array4.pop("bunu sondan ekledim"); // sondan silmeye yarar
// console.log(array4);
// array4.shift(); // baştan sildim
// console.log(array4);
// array4.unshift("1");
// console.log(array4); // baştan ekledim
// array4.reverse();
// console.log(array4); // diziyi ters sıraladım.
// array4.sort();
// console.log(array4); // diziyi sıraladım (sort ile ilgili daha detaylı ilgileneceğiz)

// foreach
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum += num)
// console.log(sum)

// map
// fonksiyonu, bir dizinin her bir öğesini dolaşarak her öğeyi belirli bir işleme tabi tutar ve bu işlemin sonucunda oluşan yeni öğelerden oluşan bir dizi döndürür.
// Mevcut bir diziyi değiştirmeden yeni bir dizi oluşturmanıza olanak sağlar.
// array1.map(e => e+5)
// console.log(array1) // [1, 2, 3, 7, 7, 4, 5, 6, 7]
// console.log(array1.map(e => e+5)) // [6, 7, 8, 12, 12, 9, 10, 11, 12]
// bu methodu kullanırken farklı bir degere atamassak var olan diziyi değiştirmez. Yani mevcut dizi değişmez, ya ekrana bastırıcan ya yeni diziye atıcan.
// console.log(array4.map(e=>e.toUpperCase()))
// console.log(array4.map(e=>e.toUpperCase()).slice(4,7))

// filter
// Dizi içerisinden istediğimiz koşullara uyan elemanları filtreleyerek geri döndürür
// console.log(array1.filter(e => e%2==0));
// console.log(scores.filter(e => e.score>90));

// reduce
// Reduce fonksiyonu bir callback fonksiyonu gerektirir. Dizinin her değeri için bir işlev yürütür ve sonunda diziyi tek bir değere düşürür.
// Metodun dönüş değeri ilk parametresi olan accumulator parametresinde saklanır.
// console.log(array5.reduce((acc, cur) => acc + cur))

// every
// Tüm elemanların tek bir açıdan benzer olup olmadığını kontrol eder ve boolean türünde geri dönüş yapar.
// console.log(array4.every(e=>typeof e === "string")); // hepsi string türünde mi?
// console.log(array1.every(e=>e<5));

// find
// istenilen koşulu sağlayan İLK elemanı döndürür.
// console.log(array1.find(e=>e%4==0))
// console.log(array4.find(e=>e.length<3))
// console.log(scores.find(e=>e.score<90).name)

// findIndex
// istenilen koşulu sağlayan İLK ELEMANIN İNDEXini döndürür.
// console.log(array1.find(e=>e%4==0))
// console.log(array1.findIndex(e=>e%4==0))

// some
// Bazı elemanların tek bir açıdan benzer olup olmadığını kontrol edin. Boolean türünde geri dönüş yapar.
// console.log(array4.some(e=>typeof e === "number"));

// sort
// sort fonksiyonu, bir diziyi, öğelerini dizelere dönüştürerek ve bu dizeleri Unicode kod karakterleri sırasına göre karşılaştırarak 
// (diziyi alfabetik olarak sıralar) sıralamanıza olanak tanır. Yeni bir dizi oluşturmadan eldeki olan diziyi düzenler
// daha sonra bakacağız dediğim kısım burasıydı bu eşşek javascript 3 > 20 diyor çünkü ilk sayıya bakıyor tam bir eşşek işte onun için sort içinde sıralama kriterini
// belirten function kullanacağız.
// console.log(array1.sort((a,b)=>a-b)) // bu küçükten büyüğe sıralamak
// console.log(array1.sort((a,b)=>b-a)) // bu da büyükten küçüğe sıralamak
// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyob', age: 100 },
//     { name: 'Elias', age: 22 },
//   ]
//   users.sort((a, b) => {
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
//   })
//   console.log(users)