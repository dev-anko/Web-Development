// // callback
// const callback = (event) =>
// {
//     return event ** 2;
// }
// const cube = (callback,n) =>
// {
//     return callback(n) * n;
// }
// console.log(cube(callback,3));

// -----------------------------------------------------------------

//  // bu zaten örnekte vardı bir tanede kendim yapacam :D
//  function firstName(name)
//  {
//     return name;
//  }
//  const doubleName = (firstName,name) =>
//  {
//     return `${firstName(name)} ${name}`;
//  }
//  console.log(doubleName(firstName,"Anıl"));

// -----------------------------------------------------------------

// forEach callback kullanan bir method olduğu için onu kullanabiliriz.
// const numbers = [1,2,3,4,5,6,7,8];
// numbers.forEach(e=>
//     {
//         console.log(e)
//     });

// -----------------------------------------------------------------

// setInterval function bir olayı belirli tekrar ile yaptırmamızı sağlar, örneğin aşağıdaki kod her saniye hello yazdırır.
// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 1000) // saniyede 1 Hello yazdırır, 1000ms = 1s

// ------------------------------------------------------------------

// setTimeout function ise bir olayı belli bir süre sonra bir kez çalıştırmamızı sağlar.
// function sayHello() {
//     console.log('Hello')
//   }
//   setTimeout(sayHello, 2000) //2 saniye bekledikten sonra "Hello" yazdıracak
