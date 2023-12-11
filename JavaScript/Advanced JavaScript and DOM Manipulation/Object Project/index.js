// Bu proje içerisinde bir sınıf oluşturup ardından sınıflardan objeler oluşturacağız.
class Cars
{
    constructor(marka,model,guc,renk,paket)
    {
        this.marka = marka;
        this.model = model;
        this.guc = guc;
        this.renk = renk;
        this.paket = paket;
    }

    bilgiYazdir()
    {
        console.log(`Marka: ${this.marka}\nModel: ${this.model}\nGüç: ${this.guc}\nRenk: ${this.renk}\nPaket: ${this.paket}`);
    }
}
const audi = new Cars("Audi","RS6","1200 Beygir","Siyah","MTM");
audi.bilgiYazdir();

// şimdide sınıf oluşturmadan nesne oluşturalım
function User(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.sayHello = function() {
        console.log('Hello, I am ' + this.firstName + ' ' + this.lastName);
    };
}
let Anko = new User("Anıl","Sezgin",22,"anlsezgin3@gmail.com");
Anko.sayHello();