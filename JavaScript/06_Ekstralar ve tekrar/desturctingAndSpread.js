// Destructing and Spread
// Destructing Dizilerde Kullnımı
// const numbers = [1, 2, 3]
// let [numOne, numTwo, numThree] = numbers
// console.log(numOne, numTwo, numThree)

// eğer dizideki değerleri atlanması isteniyorsa virgül kullanmak gerekir.
// const numbers = [1, 2, 3]
// let [numOne, , numThree] = numbers //2 atlandı
// console.log(numOne, numThree)
// const names = ['Asabeneh', 'Brook', 'David', 'John']
// let [, secondPerson, , fourthPerson] = names // birinci ve üçüncü değer atlandı
// console.log(secondPerson, fourthPerson)

// Dizideki tüm elemanlara değişken atanmayabilir. İlkinin birkaçını yok edip ve kalanını spread operatörünü (...) kullanarak dizi olarak alabiliriz.
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums
// console.log(num1, num2, num3)
// console.log(rest)

// Iterasyon sırasında Destructuring
// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]
// for (const [country, city] of countries) {
// console.log(country, city)
// }

// Objeye Destructuring işlemi yapm
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
// let { width, height, area, perimeter } = rectangle
// console.log(width, height, area, perimeter)

// Yapılandırma sırasında yeniden adlandırma
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width: w, height: h, area: a, perimeter: p } = rectangle
//   console.log(w, h, a, p)

// Eğer anahtar nesnede bulunmazsa, değişken tanımsız olarak atanır. Anahtar nesnede olmadığında bildirim sırasında varsayılan bir değer verilebilir. Aşağıdaki örneğe bakınız.
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
//   }
//   let { width, height, area, perimeter = 60 } = rectangle  
//   console.log(width, height, area, perimeter) //20 10 200 60
//   //Nesneyi değiştirelim:width=30 ve perimeter=80

// Destructuring olmadan obje parametresi
// Destructuring yok
// const rect = {
//     width: 20,
//     height: 10
//   }
//   const calculatePerimeter = rectangle => {
//     return 2 * (rectangle.width + rectangle.height)
//   }
//   console.log(calculatePerimeter(rect)) // 60
// Destructuring var

// başka bir örnek
//Başka örnek
// const person = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     age: 250,
//     country: 'Finland',
//     job: 'Instructor and Developer',
//     skills: [
//       'HTML',
//       'CSS',
//       'JavaScript',
//       'React',
//       'Redux',
//       'Node',
//       'MongoDB',
//       'Python',
//       'D3.js'
//     ],
//     languages: ['Amharic', 'English', 'Suomi(Finnish)']
//   }

// person nesnesi hakkında destructuring kullanmayarak bilgi veren bir fonksiyon oluşturalım  
//   const getPersonInfo = obj => {
//     const skills = obj.skills
//     const formattedSkills = skills.join(', ')
//     const languages = obj.languages
//     const formattedLanguages = languages.join(', ')  
//     personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//       obj.age
//     } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//       skills[skills.length - 1]
//     }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`
//     return personInfo
//   }
//   console.log(getPersonInfo(person))