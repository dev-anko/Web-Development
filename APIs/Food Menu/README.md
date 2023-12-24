# Food Menu Project

JSON kullanımına yönelik pratik amaçlı bir proje. API'lar ve Axios ile çalışmadan evvel öncebu projeyi yapmanızı tavsiye ederim.
Ek olarak projeyi geliştirirken zorlandığım veya öğrendiğim yerlerin notlarını bu README.md altında toplayacağım.

## Button öğesinin içerisine konulan type="submit" ne anlama gelmektedir? Farklı hangi çeşit type'lar vardır ve ne için kullanılırlar?
`<button>` öğesinin `type` özelliği, butonun hangi türde bir işlemi temsil ettiğini belirtir. Bu özellik, özellikle form içinde yer aldığında önemlidir. `type` özelliğinin yaygın kullanıldığı durum, butonun formu gönderme işlemini gerçekleştireceği durumdur. İşte `type` özelliğinin kullanımı ve farklı değerleri:

1. `type="submit"`: Bu, butonun bir formu gönderme işlemini gerçekleştirdiği anlamına gelir. Form içinde bulunan bu tür bir butona tıklandığında, formdaki veriler sunucuya gönderilir.

```html
<button type="submit">Gönder</button>
```

2. `type="reset"`: Bu, butonun formdaki tüm alanları sıfırlama işlemini gerçekleştirdiği anlamına gelir. Tıklanan bu tür bir buton, formdaki tüm giriş alanlarını varsayılan değerlerine geri döndürür.

```html
<button type="reset">Sıfırla</button>
```

3. `type="button"`: Bu, butonun özel bir işlem gerçekleştirmeyecek, yani formu göndermeyecek veya sıfırlamayacak bir genel amaçlı bir buton olduğu anlamına gelir. Bu tür butonlar genellikle JavaScript ile etkileşimli işlemleri tetiklemek için kullanılır.

```html
<button type="button">Tıkla</button>
```

4. `type="image"`: Bu, bir görüntü düğmesini temsil eder. Bu tür bir düğme tıklandığında, fare tıklama noktasının (x, y koordinatları) formu gönderilen verilere eklenmesine izin verir.

```html
<button type="image" src="submit.png" alt="Gönder">
```

Bu tür `type` değerleri, HTML form elementleri içinde kullanıldığında önemlidir ve kullanıcının form üzerindeki butonları kullanarak hangi işlemleri gerçekleştirebileceğini belirler.
