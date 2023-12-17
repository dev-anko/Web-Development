// Set, elemanlar topluluğudur. Set yalnızca benzersiz öğeler içerebilir. Aşağıdaki bölümde bir setin nasıl oluşturulacağını görelim.
// const companies = new Set();
// console.log(companies)

// ----------------------------------------------------------------

// diziden set oluşturma
// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
//    const languagesSet = new Set(languages);
// console.log(languagesSet)

// ----------------------------------------------------------------

// set iterable(gezilebilir, yani üzerinde döngü yapılabilir) bir nesnedir ve her öğreye iterable işlemi uygulanabilir.
// for(const a of languagesSet)
// {
//     console.log(a);
// }

// ----------------------------------------------------------------

// set'e eleman eklemek
// const companies = new Set()
// console.log(companies.size) // dizideki length gibi büyüklüğünü gösteriyor
// companies.add('Google') // .add ile ekleme işlemlerini yapabiliriz
// companies.add('Facebook')
// companies.add('Amazon')
// companies.add('Oracle')
// companies.add('Microsoft')
// console.log(companies,companies.size)

// -------------------------------------------------------------------

// set'e döngüyle eleman eklemek
// const companies = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']
// const setOfcompanies = new Set();
// for(const e of companies)
// {
//     setOfcompanies.add(e);
// }
// console.log(setOfcompanies)

// -----------------

// bir elemanı set'ten silmek
// const companies = new Set()
// companies.add("Google")
// companies.add("Facebook")
// console.log(companies)
// companies.delete("Facebook")
// console.log(companies)

// ---------------------

// setteki elemanı kontrol etme
// const companies = ["Google", "Facebook", "Huawei", "X"]
// const setOfcompanies = new Set()
// for(const e of companies)
// {
//     setOfcompanies.add(e)
// }
// console.log(setOfcompanies.has("Google"))
// console.log(setOfcompanies.has("Microsoft"))

// -------------------------------------

// set'in içini temizlemek
// const companies = ["Google", "Facebook", "Huawei", "X"]
// const setOfCompanies = new Set()
// for(const e of companies)
// {
//     setOfCompanies.add(e)
// }
// console.log(setOfCompanies)
// setOfCompanies.clear()
// console.log(setOfCompanies)

// languages dizisi içerisindeki elemanları tekrar sayıları ile birlikte bir sete ekleyelim
// const languages = [
//     'English',
//     'Finnish',
//     'English',
//     'French',
//     'Spanish',
//     'English',
//     'French',
//   ]
// const langSet = new Set(languages)
// const counts = new Array()
// const result = new Array();
// let sayac=0;
// for(const e of langSet)
// {
//     let count = 0;
//     for(let i=0; i<languages.length; i++)
//     {
//         if(e===languages[i])
//         count++;
//     }
//     counts.push(count);
//     result.push({lang: e, count: counts[sayac]});
//     sayac++;
// }
// console.log(result)

// ---------------------------

// set'in farklı bir kullanımı
// const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
// const setOfNumbers = new Set(numbers)
// console.log(setOfNumbers)

// -----------------------

// setlerin birleşimi (A U B)
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]
// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)
// console.log(C)

// ----------------------------------------

// setlerin kesişimi
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let A = new Set(a)
// let B = new Set(b)
// let c = a.filter((num) => B.has(num))
// let C = new Set(c)
// console.log(C)

// -----------------------

// setlerin farkı
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let A = new Set(a)
// let B = new Set(b)
// let c = a.filter((num) = !B.has(num))
// let C = new Set(c)
// console.log(C)