const person =
{
    firstName: "Anıl",
    lastName: "Sezgin",
    country: "Türkiye",
    city: "İstanbul",
    age: 22,
    skills: ["HTML","CSS","JavaScript","Bootstrap","C#","Java","Express.js"],
    getFullName: function()
    {
        return `${this.firstName} ${this.lastName}`;
    }
}
person.nationality = "Türk";
person.title = "Student";
person.skills.push("Python");

person.getPersonInfo = function ()
{
    let skillsWithoutLastSkill = person.skills.splice(0, person.skills.length - 1).join(", ");
    let lastSkill = this.skills.splice(this.skills.length - 1)[0];
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
    return statement
}
// console.log(person)
// console.log(person.getPersonInfo());

// Object.assign methodu nesnenin orijinalini bozmadan kopyalamaya yarar.
// const copyPerson = Object.assign(person);
// copyPerson.firstName="Mustafa";
// console.log(copyPerson);

// Object.keys() Bir nesnenin anahtarlarını veya özelliklerini dizi olarak almak için kullanılır.
// const keys = Object.keys(person);
// console.log(keys);

// Object.values() methodu Nesnelerin key'lerine karşılık gelen değerleri dizi içerisinde almak için kullanılır.
// const skills = Object.values(person.skills);
// console.log(skills);

// hasOwnProperty() bir nesnede belirli bir anahtar veya özelliğin bulunup bulunmadığını kontrol etmek için kullanılır.
// console.log(person.hasOwnProperty('age'));
// console.log(person.hasOwnProperty('score'));
