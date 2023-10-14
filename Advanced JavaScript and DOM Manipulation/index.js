// document.getElementById("button").addEventListener("click",handleClick);
// function handleClick()
// {
//     alert("Tıklandım!");
// }

// ------------------------------------------------------------------------------

// Bir yüksek dereceli hesaplama fonksiyonu yazalım.

// function yuksekDereceliHesaplama(x)
// {
//     return function(y)
//     {
//         return Math.pow(x,y);
//     }
// }
// console.log(yuksekDereceliHesaplama(2)(3)); // 2^3 = 8

// function toplama(x,y)
// {
//     return x+y;
// }

// function cikarma(x,y)
// {
//     return x-y;
// }

// function ortalama(toplama,x,y)
// {
//     return toplama(x,y)/2;
// }
// console.log(ortalama(toplama,5,7)); // mis gibi yüksek dereceli fonksiyon örneği, yani fonksiyon içinde
// fonksiyon kullanma.

// ------------------------------------------------------------------------------

// How to Play Sounds on a Website

// let audio1 = new Audio("sounds/tom-1.mp3");
// document.querySelector("button").addEventListener("click",function()
// {
//     audio1.play();
// });

// ------------------------------------------------------------------------------

// A Deeper Understanding of JavaScript Objects

// let houseKeeper1 = {
//     name: "Suzanne",
//     age: 25,
//     cleaningSkills: ["bathroom","lobby","bedroom"],
//     showSkills: function()
//     {
//         console.log(this.cleaningSkills);
//     }
// };

// function Person(name,age)
// {
//     this.name = name;
//     this.age = age;
// }

// let person1 = new Person("Suzanne",25);
// console.log(person1); // Person {name: "Suzanne", age: 25}
// console.log(person1.name); // Suzanne

// ------------------------------------------------------------------------------

// Objects, their Methods and the Dot Notation

// let bellBoy1= {
//     yearsOfExperience: 12,
//     name: "Jane",
//     cleaningRepertoier: ["bathroom","lobby","bedroom"],
// 	moveSuitcase: function()
// 	 {
// 		 alert("May I Take your suitcase?");
// 		 pickUpSuitcase();
// 		 move();
//     }
// }

// // Constructur Function içerisinde dahil etmek istersen:
// function HouseKeeper(yearsOfExperience, name, cleaningRepertoier)
// {
//     this.yearsOfExperience=yearsOfExperience;
//     this.name=name;
//     this.cleaningRepertoier=cleaningRepertoier;
// 	  this.moveSuitacse= function()
// 	{
// 		 alert("May I Take your suitcase?");
// 		 pickUpSuitcase();
// 		 move();
// 	}
// }

// console.log(bellBoy1.name); // Jane
// console.log(bellBoy1.cleaningRepertoier[0]); // bathroom
// let Alper = new HouseKeeper(12,"Alper",["bathroom","lobby","bedroom"]);
// console.log(Alper); // HouseKeeper {yearsOfExperience: 12, name: "Alper", cleaningRepertoier: Array(3), moveSuitacse: ƒ}

// ------------------------------------------------------------------------------

// Using keyboard event listeners to check for key presses

document.addEventListener("keydown", function(event)
{
    console.log(event);
})