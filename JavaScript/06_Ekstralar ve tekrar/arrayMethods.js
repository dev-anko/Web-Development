// Tüm array functionlarını deneyelim.
let array1 = [1,2,3,7,7,4,5,6,7];
let array2 = new Array(10);
let array3 = new Array();
let array4 = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'];
let word1 = "JavaScript";
let word2 = "Anıl Sezgin dünyanın en yakışıklı adamıdır.";

console.log(word1.split("p")); // string ifadeyi verilen ifadelerden keserek diziye atar.
console.log(array2.fill("x")); // array 2'yi "x" ile doldurur.
console.log(array2.concat(array4)); // array4'ü array2'ye ekler.
console.log(array4.indexOf("MongDB")); // elemanın bulunduğu ilk indexi döndürür.
console.log(array1.lastIndexOf(7)); // elemanın olduğu son indexi döndürür.
console.log(array4.includes("HTML")); // elemanın varlığını kontrol eder.
console.log(Array.isArray(array2)); // array mi değil mi ona bakar.
console.log(array4.toString()); // diziyi stringe çevirir.
console.log(array4.join(", ")); // dizi elemanlarının arasına istenen şeyi koyarak stringe çevirir.
console.log(array4.slice(0,6)) // diziyi belli aralıkta kopyalamak için kullanılır (bitiş değeri dahil değil)
array4.splice(0,2,1,2,3) // önce çalıştırıp sonra loglamak gerekiyor türkçesi 0'dan başla 2 eleman kaldır yerlerine 1 2 3 ekle.
console.log(array4);
array4.push("bunu sondan ekledim"); // sondan eklemeye yarar
console.log(array4);
array4.pop("bunu sondan ekledim"); // sondan silmeye yarar
console.log(array4);
array4.shift(); // baştan sildim
console.log(array4);
array4.unshift("1");
console.log(array4); // baştan ekledim
array4.reverse();
console.log(array4); // diziyi ters sıraladım.
array4.sort();
console.log(array4); // diziyi sıraladım (sort ile ilgili daha detaylı ilgileneceğiz)