// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`
//     // nesne -> json = stringfy
//     // json -> nesne = parse
//     const usersObj = JSON.parse(usersText)
//     console.log(usersObj)

// -----------------------------------------

// // aşağıdaki örnek reviver fonksiyon kullanımı örneğidir. yani json üzerinde bir callback fonksiyonu kullanmak.
// const usersText = `{
//     "users":[
//       {
//         "firstName":"Asabeneh",
//         "lastName":"Yetayeh",
//         "age":250,
//         "email":"asab@asb.com"
//       },
//       {
//         "firstName":"Alex",
//         "lastName":"James",
//         "age":25,
//         "email":"alex@alex.com"
//       },
//       {
//       "firstName":"Lidiya",
//       "lastName":"Tekle",
//       "age":28,
//       "email":"lidiya@lidiya.com"
//       }
//     ]
//     }`
    
//     const usersObj = JSON.parse(usersText, (key, value) => {
     
//         if(typeof value == "string" && key !="email")
//         {
//             value = value.toUpperCase();
//         }
//         return value
//     })
//     console.log(usersObj)

// --------------------------------------------

// // nesneyi json'a çevirme
// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'Redux',
//         'MongoDB',
//         'Express',
//         'React',
//         'Node'
//       ],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: [
//         'HTML',
//         'CSS',
//         'JavaScript',
//         'MongoDB',
//         'Express',
//         'React',
//         'Node'
//       ],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }
  
//   const txt = JSON.stringify(users,undefined,4)
//   console.log(txt) // text, JSON- anlamına gelir, çünkü json bir nesnenin string biçimidir.

// JSON.stringify ile Filtre Dizisi Kullanma
// Şimdi, replacerı filtre olarak kullanalım. Kullanıcı nesnesinin uzun bir anahtar listesi var ama biz sadece birkaçıyla ilgileniyoruz. 
// Örnekte gösterildiği gibi dizide tutmak istediğimiz anahtarları koyuyoruz ve replacer yerine kullanıyoruz.

// const user = {
//     firstName: 'Asabeneh',
//     lastName: 'Yetayeh',
//     country: 'Finland',
//     city: 'Helsinki',
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
//     age: 250,
//     isLoggedIn: false,
//     points: 30
//   }
  
//   const txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],4)
//   console.log(txt)