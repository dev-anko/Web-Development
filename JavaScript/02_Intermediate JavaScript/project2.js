// Fibonacci serisi projesi
// Benim nefret ettiğim bir şeydir neden bilmem. Bir sayının kendisinden önceki iki sayının toplamına eşit olduğu sonsuz bir dizidir.
// Hedef: Kullanıcıdan bir sayı alacağız, bu sayı adeti kadar olan fibonacci dizisini yazdıracağız. Tabii bunun için tarayıcıda çalışmak lazım. Biz şimdilik sayıyı manuel girelim.

let number = 20;
const fibonacci = [];
fibonacci[0]=0;
fibonacci[1]=1;
for(let i=2; i<number; i++)
{
    fibonacci[i]=fibonacci[i-1]+fibonacci[i-2]
}
console.log(fibonacci);