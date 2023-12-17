// boş map oluşturma
// const map = new Map();
// console.log(map)

// --------------------

// bir diziden map oluşturma
// countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo'],
//   ]
//   const map = new Map(countries)
//   console.log(map)
//   console.log(map.size)

// --------------------

// Map'e değer ekleme
// const countriesMap = new Map()
// console.log(countriesMap.size) 
// countriesMap.set('Finland', 'Helsinki') // .set ile ekliyoruz
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap)
// console.log(countriesMap.size)

// -------------------------

// map'ten değer alma
// const countriesMap = new Map()
// countriesMap.set('Finland', 'Helsinki') // .set ile ekliyoruz
// countriesMap.set('Sweden', 'Stockholm')
// countriesMap.set('Norway', 'Oslo')
// console.log(countriesMap) 
// console.log(countriesMap.get('Finland'))

// -------------------------

// map içindeki bütük değerleri döngü kullanarak almak
const countriesMap = new Map()
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
for (const country of countriesMap) {
    console.log(country)
  }
for (const [country, city] of countriesMap){
    console.log(country, city)
   }  