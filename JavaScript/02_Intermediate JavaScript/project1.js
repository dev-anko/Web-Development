// Project1 FizzBuzz project
// Bu projede yapacağımız şey 1-100 arası (100 dahil) sayılardan 3'e bölünenlerin yerine fizz, 5'e bölünenlerin yerine buzz, her iksinide bölünenlerin yerine FizzBuzz yazdırmak

for (let i=1; i<=100; i++)
{
    if(i%3 == 0 && i%5!=0)
    {
        console.log("Fizz")
    }
    else if(i%5 == 0 && i%3!=0)
    {
        console.log("Buzz")
    }
    else if(i%5==0 && i%3==0)
    {
        console.log("FizzBuzz")
    }
    else
    {
        console.log(i);
    }

}