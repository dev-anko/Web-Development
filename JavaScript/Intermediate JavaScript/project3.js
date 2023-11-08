// Array fonksiyonları
// 3 Adet Array oluşturacağız ve bu arrayler üzerinde array fonksiyonlarını kullanarak farklı deneyler gerçekleştireceğiz.

const array1 = ["Dünyanın","en","iyi","yazılımcısı","Anıl","Sezgin"];
const array2 = [1,2,3,4,5];
const array3 = [array1,array2];
const array4 = Array(10).fill("X")
const array5 = 0;

console.log(array3)
console.log("---------------")

console.log(array4)
console.log("---------------")

console.log(array1.concat(array2));
console.log("---------------")

console.log(array1.indexOf("Dünyanın"));
console.log(array2.indexOf(5));
console.log("---------------")

console.log(array2.lastIndexOf(5))
console.log("---------------")

console.log(array2.includes(5)) // true
console.log(array2.includes(11)) // false
console.log("---------------")

console.log(Array.isArray(array5))
console.log(Array.isArray(array1))
console.log("---------------")

console.log(array1.toString())
console.log(array2.toString())
console.log("---------------")

console.log(array1.join())
console.log(array1.join(""))
console.log(array1.join(" "))
console.log("---------------")

console.log(array2.slice(0,3))
console.log(array2)
console.log("---------------")


console.log(array2)
array2.splice(3,3,7,8,9);
console.log(array2)
console.log("---------------")

console.log(array2.push(100));
console.log(array2)
console.log("---------------")

array2.pop()
console.log(array2)
console.log("---------------")

array2.shift()
console.log(array2)
console.log("---------------")

array2.unshift(100)
console.log(array2)
console.log("---------------")

array2.reverse()
console.log(array2)
console.log("---------------")

array2.sort()
console.log(array2)
console.log("---------------") // eee ama 100'ü başa yazdı???? callout fonksiyonları öğrenince göstereceğim.