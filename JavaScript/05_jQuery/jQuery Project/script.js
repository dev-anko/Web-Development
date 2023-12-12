let pLength = $("p").length;
for(let i=0; i<pLength; i++)
{
    $("p")[i].addEventListener("click",random);
}
function random()
{
    let randomNumber = Math.floor(Math.random()*33)+1;
    $("img").attr("src","./images/"+randomNumber+".jpg");
    console.log($("img").attr("src"));
}